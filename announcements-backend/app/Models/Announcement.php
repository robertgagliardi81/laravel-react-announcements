<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DB;
class Announcement extends Model
{
    use HasFactory;

 
    protected $fillable = [
        'id',
        'author',
        'date',
        'body'
    ];

    public static function getAnnouncementsByUserId($page, $pageSize, $userId)
    {
         
        $TotalCount = 0;
  
    
        // RG-8/3/2024- call stored proedure to get data set and the total count 
        $announcements = DB::select('CALL GetPagedAnnouncements(?, ?, ?, @TotalCount)', [
            $page,
            $pageSize,
            $userId
        ]);
    
    // RG-8/3/2024- Retrieve the output parameter total count
    $result = DB::select('SELECT @TotalCount AS TotalCount');
    $TotalCount = $result[0]->TotalCount;
 

        //  RG-8/3/2024- map accountments to announcementsCollection
        $announcementsCollection = collect($announcements)->map(function ($item) {
            return new self((array) $item);
        });
    
        // RG-8/3/2024 - return announcements wraped in announcements array and the total count for the pager. 
        return [
            'announcements' => $announcementsCollection,
            'totalcount' => $TotalCount
        ];
    }
    
}
