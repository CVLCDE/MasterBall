// Library Imports
import React, { useRef } from "react";

// Style Imports
import './dashboard_style.css';

// Component Imports
import News from "../../components/news/News";
import GrailedList from "../../components/grailed_list/GrailedList";
import CollectionList from "../../components/collection_list/CollectionList";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

function Dashboard() {

    const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    backgroundColor: "#383838",
    height: 333,
    lineHeight: '60px',
    }));
    
    return (
        <div className="dashboard">
            <div className="dashboard-wrapper">
                <div className="content-wrapper">
                    <Grid container rowSpacing={10} columnSpacing={{ xs: 8 }}>
                        <Grid item xs={6}>
                            <span className="content-title">Grail'd 👑</span>
                            <Item elevation={8}>
                                <GrailedList />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <span className="content-title">My Collection 📜</span>
                            <Item elevation={8}>
                                <CollectionList />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <span className="content-title">Decks 🗂️</span>
                            <Item elevation={8}>

                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <span className="content-title">Selling 📈</span>
                            <Item elevation={8}>
                                
                            </Item>              
                        </Grid>
                    </Grid>
                </div>
                <News />
            </div>
        </div>
    )
}

export default Dashboard;
