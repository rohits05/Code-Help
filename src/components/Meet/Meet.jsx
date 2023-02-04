import React from 'react'
import { Button } from '@chakra-ui/react'
import './Meet.css'
// import Bg from './white.jpeg'
import Ama from './ama.png'
import Msc from './msc.png'
import Noogler from './noogler.png'
const Meet = () => {
  return (
    <div className='m'> 
        <div className="meet">
            <div className="meet1">
            
                <div className="meet_text"> 

                    <div className='txt'>Meet your<span id='ins'>Instructor</span></div>
                    {/* &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */} 
                </div>
                <span className='btn'> {/* &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
                <Button id="bt">Know More</Button>
                </span> 
            </div>  
        </div> <span className='lin'></span>  

        <div className="meet2">
        <div className="meet_img">
                <img src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2FEllipse_392_6b9d901d07.png&w=1920&q=75" alt="" />
            </div></div> <span className='love'><pre>Love Babbar</pre> Founder, Code-Help</span> 

         <div className='meet3'>
          <div className='meet3_text'>
            <img src={Ama} alt="" />
            <img src={Msc} alt="" />
            <img src={Noogler} alt="" />
          </div>
        </div>
        <div className='LI'> </div>
        {/* <div className='blur s-blur1' style={ {background: '#ABF1FF94'}}></div> */}

        <div className='meet4'>
          <div className='meet4_text'>
            <div className='m4'>
            <h1  className='pl'>PLACEMENTS</h1>
              <pre className='get'>Get Offers from</pre>Top Companies
              <span className='our'>Our finest get offers from top-notch companies.</span> 
            </div> 
          
          </div>
        </div>  

        <div className='r-right'>
            <div className='e-mainCircle'>
                <div className='e-secCircle'>
                    <img src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2Fboapgmfhnhmfnndgqagu_00d47f7d84.png&w=1920&q=75" alt="msc"/>
                </div>

                <div className='e-secCircle'>
                    <img src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2Fcdjndvdrbe0riikypusi_f5726f36f2.png&w=1920&q=75" alt="meta"/>
                </div>

                <div className='e-secCircle'>
                    <img src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2Fd2vqxmvfziqcf21is5gh_08116fc328.png&w=1920&q=75" alt="linkedin"/>
                </div>

                <div className='e-secCircle'>
                    <img src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2Fdoiz1t2gzivmgj9mmrlu_d856e1a02d.png&w=1920&q=75" alt="adobe"/>
                </div>

                <div className='e-secCircle'>
                    <img src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2Ffaonnvzgrznbyj5z1gaq_43760505f1.png&w=1920&q=75" alt="apple"/>
                </div>

                <div className='e-secCircle'>
                    <img src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2Ffx1yuctlyb6qv5vcui5c_78aba1cc2a.png&w=1920&q=75" alt="amazon"/>
                </div>

                <div className='e-secCircle'>
                    <img src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2Fkgcmgzbg6bxyrkaj5stv_7f859fcc30.png&w=1920&q=75" alt="olas"/>
                </div>

                <div className='e-secCircle'>
                    <img src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2Fsjqxdtjtzxz4kjjtpyqx_3e6eba6f99.png&w=1920&q=75" alt="netflix"/>
                </div>

                <div className='e-secCircle'>
                    <img src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2Fukiqud92f4nzkdmkzue0_8efbcaee62.png&w=1920&q=75" alt="google"/>
                </div>

                <div className='e-secCircle'>
                    <img src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2Fzif4s9vnfj2mi8kgpksa_a578a281f5.png&w=1920&q=75" alt="flipkart"/>
                </div>
            </div>
            <div className='e-backCircle whiteCircle'></div>
            <div className='e-backCircle pinkCircle'></div>
            <div className='e-backCircle grayCircle'></div>
        </div>
    </div>
  )
}

export default Meet