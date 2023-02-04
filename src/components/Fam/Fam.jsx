import React from 'react'
import './Fam.css'
// import By from './by.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {up-right-from-square} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'    
const Fam = () => {
  return (
    <div className='fam'>
      <div className='fam__part'>
          <span id='k'></span>
          <div id='by'><img src="https://codehelp.s3.ap-south-1.amazonaws.com/tn1nenc6ld2pp0pxg9zm_edd5b5b405.svg" alt="" /> </div>
          
          <div className='fam__title'>
              <span id='join' className='j'>Join our Coding family</span>
              <pre id='con'>If you would like to keep up on the latest posts and courses,</pre><span id='connect'>come by and connect with us on the following links.</span>
          </div>
        
      </div>

      <div className='fam__part2'>
          <div className='fam_imgs1' id='fe'>
              <div className='fam_img1' id='i1'><img src="https://codehelp.s3.ap-south-1.amazonaws.com/Youtube_Oct_Denoiser_Beauty_001_copy_6a63d8ef65.png" alt='fam' id='red'/><span id='red'><FontAwesomeIcon icon="fa-thin fa-up-right-from-square" id='red'/>YouTube</span></div>
             
              <div className='fam_img1' id='i3'><img src="https://codehelp.s3.ap-south-1.amazonaws.com/Linked_In_Oct_Denoiser_Beauty_001_copy_b6e0b974bb.png" alt='fam' /><span id='deep'><FontAwesomeIcon icon="fa-thin fa-up-right-from-square" id='deep'/> LinkedIn</span></div>
          </div>

          <div className='fam_imgs1' id='se'>
          <div className='fam_img1' id='i2'><img src="https://codehelp.s3.ap-south-1.amazonaws.com/Discord_Oct_Denoiser_Beauty_001_copy_a253ed4d28.png" alt='fam' /><span id='pur'><FontAwesomeIcon icon="fa-thin fa-up-right-from-square" id='pur'/>Discord</span></div>
             
              <div className='fam_img1' id='i4'><img src="https://codehelp.s3.ap-south-1.amazonaws.com/Telegram_Oct_Denoiser_Beauty_002_copy_fa9aeac119.png" alt='fam' /><span id='blue'><FontAwesomeIcon icon="fa-thin fa-up-right-from-square" id='blue'/>Telegram</span></div>
          </div>
      </div>
    </div>
  )
}

export default Fam