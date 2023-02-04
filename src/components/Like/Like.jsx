import { Button } from '@chakra-ui/react'
import React from 'react'
import './Like.css'
const Like = () => {
  return (
    <div className='l'> 
    <div className="l1">
            <div className="l-text">
            What would you like to <span className='lrn'>learn?</span>
            </div>
    </div>

            <div children='like_im'>
                <div className="im1">
                <div className="im2"> <img src="https://codehelp.s3.ap-south-1.amazonaws.com/Web_Dev_670f900667.jpg" alt="web" /><span className='web' id="web1">Web Development BootCamp Master Course @dot Batch <hr /><span id='rup'>₹4500</span><s>₹6999</s> <Button id="ftw">42% off</Button></span> </div>
                   
                <div className="im3"> <img src="https://codehelp.s3.ap-south-1.amazonaws.com/7fc42db7_014c_4b18_bb1e_4be672a9c751_be6ba830a4.JPG" alt="maang" /><span className='web' id="web2">Data Structures & Algorithms BootCamp @Supreme Batch<hr /><span id='rup'>₹3500</span><s>₹7000</s> <Button id="ftw">50% off</Button></span> </div>

                 <div className="im3"><img src="https://codehelp.s3.ap-south-1.amazonaws.com/Whats_App_Image_2022_10_01_at_1_06_44_PM_cf3d3e1c28.jpeg" alt="design" id="iu"/><span className='web' id="web3">Cracking Object Oriented Design Interviews By Love Babbar<hr/><span id='rup'>₹555</span><s>₹999</s> <Button id="ftw">44% off</Button></span> </div>  
                    
                </div>
            </div>
        
         {/* <span className='linee'></span>   */}
         <span className='linee'></span>
        {/* <hr></hr> */}
       
        {/* <div className='LI'> </div> */}
        

            <div className="l2">
                <div className="l-text" id='upc'>
                Upcoming <span className='lrn'>Courses</span>
                </div>
            </div>

            <div children='like_im'>
                <div className="im1" id='im1'>
                <div className="im2" id='s1'> <img src="https://codehelp.s3.ap-south-1.amazonaws.com/63512441e4b0913195f2e72e_scaled_cover_b49e10478e.png" alt="web" /><span className='web' id="web1">Master Course on Recursion and Backtracking<hr /> <Button id="ftw">Coming Soon</Button></span> </div>
                   
                <div className="im3" id='s2'> <img src="https://codehelp.s3.ap-south-1.amazonaws.com/Rectangle_1379_ef869b2e6c.png" alt="maang" /><span className='web' id="web2">Master Course on Graph Algorithm<hr /> <Button id="ftw">Coming Soon</Button></span> </div>
                </div>
            </div>
        </div>
  )
}

export default Like