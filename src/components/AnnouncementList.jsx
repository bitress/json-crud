import React from 'react';

const AnnouncementList = ({ announcements, onDelete }) => {
    return (
        <div>
            <h2>Announcements</h2>
            <ul>
                {announcements.map((announcement) => (
                    <li key={announcement.id}>
                        <strong>{announcement.title}</strong>
                        <p>{announcement.content}</p>
                        <p>Date: {announcement.date}</p>
                        <button onClick={() => onDelete(announcement.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AnnouncementList;
