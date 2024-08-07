// AnnouncementList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import AnnouncementItem from './AnnouncementItem';

const AnnouncementList = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [totalAnnouncements, setTotalAnnouncements] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const announcementsPerPage = 4; // Number of items per page

  useEffect(() => {
    fetchAnnouncements(currentPage);
  }, [currentPage]);

  //RG-8/3/2024- end point to pull down announcement, using axios library for the async request. 
  const fetchAnnouncements = async (page) => {
    try {
      const response = await axios.get('http://localhost:8000/api/announcements', {
        params: { page: page +1 , pageSize: announcementsPerPage, userid: 123 } // Adjusted to match API requirements
      });

      setAnnouncements(response.data.announcements || []);
      setTotalAnnouncements(response.data.totalcount  );
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };


  //RG -8/3/2024 - react bult in pager 
  return (
    <div>
   <ReactPaginate
        previousLabel={'<  '}
        nextLabel={'> '}
        breakLabel={'...'}
        pageCount={Math.ceil(totalAnnouncements / announcementsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
      {announcements.map((announcement) => (
        <AnnouncementItem key={announcement.id  } announcement={announcement} />
      ))}
       
    </div>
  );
};

export default AnnouncementList;
