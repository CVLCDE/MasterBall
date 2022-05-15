// Library Imports
import React from "react";

// Style Imports
import './set_viewer_style.css';

// Component Imports
import Typography from '@mui/material/Typography';
import Searchbar from "../../components/searchbar/Searchbar";
import Grid from '@mui/material/Grid';
import styled from "@emotion/styled";
import { Card, Paper } from "@mui/material";


function SetViewer() {

  return (
    <div className="set-viewer">
      <div className="set-viewer-wrapper">
        <Typography variant="h4" component="div" color="whitesmoke" gutterBottom>
          Set Viewer
        </Typography>

        <Searchbar />


        <div className="all-sets-container">
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Card>xs=8</Card>
              </Grid>
              <Grid item xs={3}>
                <Card>xs=4</Card>
              </Grid>
              <Grid item xs={3}>
                <Card>xs=4</Card>
              </Grid>
              <Grid item xs={3}>
                <Card>xs=8</Card>
              </Grid>
            </Grid>
     
        </div>

      </div>
    </div>
  )
}

export default SetViewer
