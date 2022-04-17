// Library Imports
import React, { useState } from 'react'

// Style Imports
import './navigation_style.css'

// Component Imports
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Tooltip from '@mui/material/Tooltip';
import { CustomTooltip } from './CustomTooltip';

// Icon Imports
import DashboardIcon from '@mui/icons-material/Dashboard';
import CollectionsIcon from '@mui/icons-material/Collections';
import ConstructionIcon from '@mui/icons-material/Construction';
import StorefrontIcon from '@mui/icons-material/Storefront';
import NewspaperIcon from '@mui/icons-material/Newspaper';



function Navigation() {

  return (
    <div className='navigation'>
      <div className="navigation-wrapper">
        <List>
          <ListItem>
            <CustomTooltip title="Dashboard" placement="right">
                <ListItemButton>
                    <DashboardIcon sx={{ fontSize: 50 }} />
                </ListItemButton>
              </CustomTooltip>
            </ListItem>


          <ListItem>
            <CustomTooltip title="Sets" placement="right">
                <ListItemButton>
                    <CollectionsIcon sx={{ fontSize: 50 }}/>
                </ListItemButton>
              </CustomTooltip>
            </ListItem>
          
          <ListItem>
              <CustomTooltip title="Deck Builder" placement="right">
                <ListItemButton>
                    <ConstructionIcon sx={{ fontSize: 50 }}/>
                </ListItemButton>
              </CustomTooltip>
            </ListItem>

          <ListItem>
              <CustomTooltip title="Market" placement="right">
                <ListItemButton>
                    <StorefrontIcon sx={{ fontSize: 50 }}/>
                </ListItemButton>
              </CustomTooltip>
            </ListItem>

          <ListItem>
            <CustomTooltip title="News" placement="right">
              <ListItemButton>
                  <NewspaperIcon sx={{ fontSize: 50 }}/>
              </ListItemButton>
            </CustomTooltip>
          </ListItem>
          
          </List>
        </div>
    </div>
  )
}

export default Navigation