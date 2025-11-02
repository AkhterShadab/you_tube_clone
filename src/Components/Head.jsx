import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  return (
    <div className="m-2 p-2 grid grid-flow-col shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="hamburger menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          onClick={() => dispatch(toggleMenu())}
        />
        <a href="/">
          <img
            className="mx-4 mt-1 h-7"
            alt="YouTube Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="flex col-span-9 text-center">
        <input
          className="border border-gray-400 rounded-s-3xl px-3 w-1/2"
          placeholder="Search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="border border-gray-400 rounded-e-3xl px-4 bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-2">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user icon"
        />
      </div>
    </div>
  );
};

export default Head;
