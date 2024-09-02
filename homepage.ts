import React from 'react';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets'; // This would be the right-side component

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default Home;