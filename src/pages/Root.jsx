import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../header/NavBar';
import Main from '../Main';

export default function Root() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Main />
    </div>
  );
}
