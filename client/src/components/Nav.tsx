import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import React from 'react';

export const Nav = () => {
  return (
    <>
      <div>
        <div className='flex justify-between gap-5 border-b-2 fixed w-[100%]'>
          <div className='flex gap-5 m-5 '>
            <div className='flex mr-8 ml-5'>
              <div>Mirthly</div>
            </div>
            <div className='flex gap-5'>
              <div>Find Job</div>
              <div>Messages</div>
              <div>Hiring</div>
              <div>Community</div>
              <div>FAQ</div>
            </div>
          </div>
          <div className='flex gap-5 m-5 '>
            <AccountCircleIcon />
            <NotificationsNoneIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
