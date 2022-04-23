// Library Imports
import React, { useRef } from 'react'

// Style Imports
import './news_style.css'
import Colors from '../../assets/Colors'

// Component Imports 
import TwitterTimeline from "../twitter_timeline/TwitterTimeline";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function News() {
    const twitterSectionRef = useRef<HTMLDivElement>(null);
    return (
    <div className="news-wrapper" style={{background: Colors.dark_pink_gradient }}>
        <span className="news-section-title">News</span>
        <section className="news-section-twitter" ref={twitterSectionRef}>
            <Stack spacing={0.5} direction="row" className="news-selection-container" mb={1}>
                <Button variant="contained" className="news-selection-1">Pokebeach</Button>
                <Button variant="contained" className="news-selection-1">Pokebeach</Button>
                <Button variant="contained" className="news-selection-1">Pokebeach</Button>
            </Stack>
            <div className="twitter-timeline-container">
                <TwitterTimeline twitterHandle="pokebeach"  />
            </div>
        </section>
    </div>
  )
}

export default News