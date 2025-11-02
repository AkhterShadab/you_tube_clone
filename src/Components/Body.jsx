import React from 'react';
import SideBar from './SideBar';
import MainContainer from './MainContainer';
import { useSelector } from 'react-redux';
import store from '../utils/store';
import { Outlet } from 'react-router-dom';

const Body = () => {
  const { isMenuOpen } = useSelector((store) => store.app);
  return (
    <div className="grid grid-flow-col">
      {isMenuOpen && <SideBar />}
      <Outlet />
    </div>
  );
};

export default Body;
