import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './Views.css'
import R1 from './r1.png'
import R2 from './r2.png'
import R3 from './r3.png'
import R4 from './r4.png'
import R5 from './r5.png'
import R6 from './r6.png'
import R7 from './r7.png'
// import R1 from './r1.png'
const Views = () => {
  return (
    <div className='viwes'>
        <div className='viwes_text'>
        <div className='view-text1'>
        WHAT STUDENTS SAYS
        </div>
        <div className='view-text2'>
         Recent Reviews 
          <div className='blur' style={{background: "rgb(170, 279, 289)"}}></div>
        </div> 
            
        </div>

        <div className='car'>
        <div className='ctr'>
        <Carousel
        
      showThumbs={false}
      interval="3000"
      transitionTime="1000"
      controls={true}
      showIndicators={true}
      autoPlay
      infiniteLoop
      centerMode={true}
      centerSlidePercentage="100"
      emulateTouch={true}
      showStatus={false}
      // showArrows={true}
      // swipeable={true}
      // useKeyboardArrows={true}
    >
    <div className='uip'> <img src={R1} alt="r1" /> </div>
    <div className='uip'> <img src={R2} alt="r2" /> </div>
    <div className='uip'> <img src={R3} alt="r3" /> </div>
    <div className='uip'> <img src={R4} alt="r4" /> </div>
    <div className='uip'> <img src={R5} alt="r5" /> </div>
    <div className='uip'> <img src={R6} alt="r6" /> </div>
    <div className='uip'> <img src={R7} alt="r7" /> </div>
     
    
    </Carousel>
        </div> </div> 
    </div> 
  )
}

export default Views