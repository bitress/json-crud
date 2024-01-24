// src/components/App.js
import React, { useState, useEffect } from 'react';
import AnnouncementList from './components/AnnouncementList';

const App = () => {
  const [announcements, setAnnouncements] = useState([]);



  const handleDelete = (id) => {
    const updatedAnnouncements = announcements.filter((announcement) => announcement.id !== id);
    setAnnouncements(updatedAnnouncements);
  };

  return (
      <div>
        <h1>React Vite CRUD App</h1>
        <AnnouncementList announcements={announcements} onDelete={handleDelete} />
      </div>
  );
};

export default App;
