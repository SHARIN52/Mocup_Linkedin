import React from 'react';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';

function Profile() {
  return (
    <div className="profile">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default Profile;