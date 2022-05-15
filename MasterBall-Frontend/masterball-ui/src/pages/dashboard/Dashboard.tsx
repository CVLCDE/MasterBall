// Library Imports
import React, { useRef } from "react";

// Style Imports
import './dashboard_style.css';

// Component Imports
import News from "../../components/news/News";
import CollectionList from "../../components/collection_list/CollectionList";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/system";


function Dashboard() {

    return (
        <div className="dashboard">
            <div className="dashboard-wrapper">
                <div className="content-wrapper">
                    <Grid container spacing={2} style={{height: "100%", overflow: "auto"}}>
                        <Grid item xs={ 12 }>
                            <CollectionList title="Grail'd 👑" ownedCards={false} grailedCards={false} />
                        </Grid>
                        <Grid item xs={ 12 }>
                            <CollectionList title="Owned 📜" ownedCards={false} grailedCards={false} />
                        </Grid>
                        {/* <Grid item xs={ 6 }>
                            <CollectionList title="Coming Soon" ownedCards={false} grailedCards={false} />
                        </Grid>
                        <Grid item xs={ 6 }>
                            <CollectionList title="Coming Soon" ownedCards={false} grailedCards={false} />
                        </Grid> */}
                    </Grid>
                </div>
                
            </div>
        </div>
    )
}

export default Dashboard;
