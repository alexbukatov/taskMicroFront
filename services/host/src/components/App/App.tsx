import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <h1>PAGE</h1>
      <Link to={'/about'}>ABOUT</Link>
      <br />
      <Link to={'/shop'}>SHOP</Link>
      <br />
      <Link to={'/admin'}>ADMIN</Link>
      <Outlet />
    </div>
  );
};
