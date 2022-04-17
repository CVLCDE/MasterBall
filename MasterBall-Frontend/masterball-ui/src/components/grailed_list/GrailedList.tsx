import React from 'react'

// Style Imports
import './grailed_list_style.css';

// Component Imports
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

function GrailedList() {

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  backgroundColor: "#383838",
  height: 60,
  lineHeight: '60px',
}));
    
  return (
    <div className="grailed-list">
        <div className="grailed-list-wrapper">
              

        </div>
    </div>
  )
}

export default GrailedList