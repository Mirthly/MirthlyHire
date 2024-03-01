import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Nav = () => {
  return (
    <>
      <div>
        <div className='flex justify-between gap-5 border-b-2 fixed w-[100%]'>
          <div className='flex gap-5 m-5 px-10'>
        
              <div>Mirthly</div>
            
            <div className='flex gap-5'>
              <div>Find Job</div>
              <div>Messages</div>
              <div>Hiring</div>
              <div>Community</div>
              <div>FAQ</div>
            </div>
          </div>
          <div className='flex gap-5 m-5'>
            <AccountCircleIcon />
            <NotificationsNoneIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;

