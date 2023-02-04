import React from 'react'
// import { Box, Heading, Text } from '@chakra-ui/react'
import './Stats.css'
const Stats = () => {
  return (
    <div className="stats1">
        
    <div className="stats"> 
       <div className="stats2">
        <div className="show">
            <div className="show1"> 700K+ <pre>Subscribers</pre><span className='y'>on Youtube </span> </div>
        </div>

        <div className='line'></div>

        <div className="show">
            <div className="show1"> 3K+ <pre>Followers</pre><span className='y'>on Twitter </span></div>
        </div>

        <div className='line'></div>

        <div className="show">
            <div className="show1"> 80K+ <pre>Followers</pre><span className='y'>on Instagram</span></div>
        </div>

        <div className='line'></div>

        <div className="show">
            <div className="show1"> 260K+ <pre>Followers</pre><span className='y'>on Linkedin</span></div>
        </div>
        </div>
    </div>
     </div>
  )
}

export default Stats