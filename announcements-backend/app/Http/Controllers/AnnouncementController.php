<?php


namespace App\Http\Controllers;


use App\Models\Announcement;
use Illuminate\Http\Request;

 
class AnnouncementController extends Controller
{
    public function getAnnouncements(Request $request)
    {
        $userId = $request->query('userid', 123);
        $page = $request->query('page', 1);
        $pageSize = $request->query('page_size', 4);
    
   
        $announcements = Announcement::getAnnouncementsByUserId( $page, $pageSize, $userId);

        return response()->json($announcements);
    }
}

