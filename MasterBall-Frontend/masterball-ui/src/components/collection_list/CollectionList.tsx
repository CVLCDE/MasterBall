// Library Imports
import React from 'react'

// Style Imports 
import './collection_list_style.css';

// Component Imports
import Paper from '@mui/material/Paper';
import ICardList from '../../interfaces/CardListInterface';


function CollectionList({ title, ownedCards, grailedCards }:ICardList) {
  return (
    <div>
      <span className="content-title">{ title }</span>
      <Paper elevation={8}>

      </Paper>
      <div className="collection-list">
        <div className="collection-list-wrapper">

        </div>
      </div>
    </div>
  )
}

export default CollectionList