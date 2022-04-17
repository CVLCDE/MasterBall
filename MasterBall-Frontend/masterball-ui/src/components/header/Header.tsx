// Library Imports
import React from 'react'

// Style Imports
import './header_style.css';

// Asset Imports
import masterballLogo from '../../assets/masterball-logo.png';

// Component Imports
import Avatar from '@mui/material/Avatar';

// Icon Imports
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className="header">
      <div className="header-wrapper">

        <div className="left-side">
          <span className="site-name">MasterBall</span>
        </div>

        <div className="right-side">
            <NotificationsIcon className='notifications-icon' fontSize="large"/>
            <Avatar sx={{ width: 35, height: 35 }} className='user-avatar'  alt="User Avater" src="https://m.media-amazon.com/images/M/MV5BZjYzNjMxODItZGQzOS00ZDMwLThkMTItYzY3ZDdlZDE4MjAzXkEyXkFqcGdeQXVyNzgxNDk0NTI@._V1_FMjpg_UX1000_.jpg"/>
        </div>

      </div>
    </div>
  )
}

export default Header