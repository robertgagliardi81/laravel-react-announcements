import React from 'react';
import '../styles/announcement.css'; // Make sure to import the CSS file

const AnnouncementItem = ({ announcement }) => {
  return (
    <div className="announcement-tile">
      <h3>{announcement.author}</h3>
      <p className="announcement-date">{new Date(announcement.date).toLocaleDateString()}</p>
      <div
        className="announcement-body"
        dangerouslySetInnerHTML={{ __html: announcement.body }}
      />
    </div>
  );
};

export default AnnouncementItem;
