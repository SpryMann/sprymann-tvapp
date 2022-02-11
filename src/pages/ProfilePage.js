import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Profile from '../components/Profile';

const ProfilePage = () => {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Topbar />
        <Profile />
      </div>
    </>
  );
};

export default ProfilePage;
