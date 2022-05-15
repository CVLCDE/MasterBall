// Library Imports
import React from 'react'

// Style Imports 
import './collection_list_style.css';

// Interface Imports
import ICardList from '../../interfaces/CardListInterface';

// Component Imports
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AnchorIcon from '@mui/icons-material/Anchor';



function CollectionList({ title, ownedCards, grailedCards }: ICardList) {
  const elements = []

  for (var i = 0; i < 25; i++){
    elements.push(
      <ListItem disablePadding  sx={{
        marginBottom: '5px',
        backgroundColor: '#1E1E2E',
        color: "whitesmoke"
      }}>
        <ListItemButton>
          <ListItemIcon>
            <AnchorIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
      </ListItem>
    )
  }




  return (
    <div className="collection-list">
      <span className="collection-list-title">{ title }</span>
      <Paper className="collection-list-content" elevation={8}>
        <div className="collection-list-selected-card-container">
          <Card sx={{ maxWidth: 250, backgroundColor: "#1e1e2e" }} variant="outlined">
            <CardMedia
              component="img"
              alt="green iguana"
              height="275"
              src="https://imgs.search.brave.com/WzWMyv-RhDAtmlIYA0iP5637Y5Mh0GP6US1XG-winWQ/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly9pbWcw/MC5kZXZpYW50YXJ0/Lm5ldC9lOWZlL2kv/MjAxNS8xMzQvYS9h/L3d5bmF1dF9za2ls/bGV0dF9fX2ZpbmFs/aXplZF92ZXJzaW9u/X19ieV9hbGxoZWFy/dHNnb2Jvb20tZDh0/ZGZ3ZS5wbmc"
            />

            <CardActions sx={{justifyContent: "center", background: "#E36569"}}>
              <Button size="large" sx={{color: "whitesmoke"}} variant="contained">TCGPLAYER</Button>
            </CardActions>
          </Card>
        </div>

        <div className="collection-list-db-container">
          <Box sx={{
            color: "whitesmoke"
          }}>
            Total Cards: 0 | Favorite Set: ???
          </Box>
          <List sx={{
            width: '90%',
            overflow: 'auto',
            height: "90%",
            margin: "0% 5%"
          }}>
            {[...elements] }
          </List>
        </div>

      </Paper>
    </div>
  )
}

export default CollectionList