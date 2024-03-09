import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import { useState } from 'react';
import { Link } from "react-router-dom";

const Nav = () => {

  return (
    <>
      <div>
        <div className='flex justify-between gap-5 border-b-2 fixed w-[100%]'>
          <div className='flex gap-5 m-5 px-10'>
            <Link to="/">Mirthly</Link>
            <div className='flex gap-5'>
              <Link to="/explore">Find Job</Link>
              <Link to="/messages">Messages</Link>
              <Link to="/community">Community</Link>
              <Link to="/about">FAQ</Link>
            </div>
          </div>
          <div className='flex gap-5 m-5'>
            <AccountCircleIcon className='cursor-pointer' />
            <NotificationsNoneIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;

