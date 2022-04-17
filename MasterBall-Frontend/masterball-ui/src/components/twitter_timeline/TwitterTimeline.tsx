// Library Import
import React from 'react'

// Component Imports
import { TwitterTimelineEmbed } from 'react-twitter-embed'

// Interfaces
interface TwitterData{
  twitterHandle: string;
  
}

function TwitterTimeline(props: TwitterData) {
  return (
    <TwitterTimelineEmbed
    sourceType="profile"
    screenName={ props.twitterHandle }
      autoHeight={true}
      noFooter={true}
      noScrollbar={true}
      theme="dark"
    />
  )
}


export default TwitterTimeline
