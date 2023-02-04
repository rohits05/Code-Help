import React from 'react'
import './intro.css'
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <div className='intro'>
    <div className='i-left'>
        <div className='i-name'>
        <span className='learn'><span id="l">Learn</span>   With</span>
        <Typewriter
        // className='type'
            options={{
              strings: ["Love", "Babbar"],
              autoStart: true,
              loop: true,
                // delay: 200,
            }}
          />
        </div>

        <div className='i-desc1'>
        <pre>The Ultimate Guide To Ace</pre>
        <pre>SDE Interviews.</pre>
        </div>

        <div className='i-desc'>
        <button className='button i-button'>View Courses</button>
        <button className='button i-button2'>Watch Videos</button>
        </div>

        <div className='i-icons'>
        <img id="f" src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2FIMG_9037_086d5a6a8b.jpg&w=48&q=100" alt="photo3" />
            <img id="s" src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2FScreenshot_2022_11_19_161704_fe89795d3e.png&w=48&q=100" alt="photo4" />
            <img id='t' src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2F20220907_122714_e19e9a8b7a.png&w=48&q=100" alt="_photo1" />
            <img id='fr' src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2F1665736772625_b861134636.jpg&w=48&q=100" alt="photo2" />
            <img id="fif" src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2Fxjr5e4a59w60z0ak1d68_9ac99d9934.jpg&w=48&q=100" alt="photo5" />
            <div className='hpy'>
            <pre>20000 +</pre> 
            Happy Students
            </div>
        </div>
    </div>
    <div className='i-right'>
        {/* {/* <img src="" alt="" /> */}
        <div className='i-img'>
        <img src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2Fbzfszobhjsgbjk2xb2ha_275f4fb989.png&w=3840&q=75" alt="" />
        </div>
        {/* <img src="" alt="" /> */}

        {/* blur divs */}
        <div children='b'>
        <div className='blur' style={{background: "rgb(230 160 240)"}}></div>
        <div className='blur' style={{background: "#7246c5", top: '17rem', width: '17rem',
         height: '14rem', left: '-12rem'}}></div>
        </div>
    </div>
    </div>
  )
}

export default Intro