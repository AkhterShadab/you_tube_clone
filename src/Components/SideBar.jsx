import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="p-5 shadow-md col-span-1">
      <ul>
        <Link to="/">
          <li className="py-1">🏠 Home</li>
        </Link>
        <li className="py-1">🎦 Shorts</li>
        <li className="py-1">▶️ Videos</li>
        <li className="py-1">🎞️ Live</li>
      </ul>
      <h1 className="pt-4 font-bold">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="pt-4 font-bold">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
