// Library Imports
import React, { useState } from 'react'

// Style Imports
import './navigation_style.css'
import Colors from '../../assets/Colors'

// Component Imports
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { CustomTooltip } from './CustomTooltip';
import { Link } from "react-router-dom";

// Icon Imports
import DashboardIcon from '@mui/icons-material/Dashboard';
import CollectionsIcon from '@mui/icons-material/Collections';



function Navigation() {

  return (
    <div className='navigation' style={{background: Colors.dark_pink_gradient }}>
      <div className="navigation-wrapper">
        <List>
          <ListItem>
            <CustomTooltip title="Dashboard" placement="right">
              <Link to="/"> 
                  <ListItemButton>
                      <DashboardIcon sx={{ fontSize: 50, color: '#F5F8FA' }} />
                  </ListItemButton>
                </Link>
              </CustomTooltip>
            </ListItem>

          <ListItem>
            <CustomTooltip title="Sets" placement="right">
              <Link to="/set-viewer"> 
                <ListItemButton>
                    <CollectionsIcon sx={{ fontSize: 50, color: '#F5F8FA' }}/>
                </ListItemButton>
              </Link>
            </CustomTooltip>
          </ListItem>
          </List>
        </div>
    </div>
  )
}

export default Navigation