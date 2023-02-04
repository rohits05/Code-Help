import React from 'react'
import './navbar.css'
// import Codehelp from '../../assets/codehelp.png'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
const navbar = () => {
  return (
    <div className='n-wrapper'>
        <div className='n-left'>
            {/* <div className='n-name'>Rohit</div> */}
            <img src="https://codehelp.s3.ap-south-1.amazonaws.com/qdo970k2vrxj8kefd1zt_9520ff468a.svg" alt='logo' className='n-logo'/>
            {/* <Toogle/> */}
        </div>
        <div className='n-right'>
            <div className='n-menu'>
            <div className='n-list'>
                <ul type='none'>
                    <li>About Us</li>
                    <li>Courses</li>
                    <li>Games</li>
                    <li>Contact</li>
                </ul>
            </div>
            </div>

            <div className='n-search'>
            <button className='f-button'>
                Dashboard
            </button>
            <button className='button n-button'>
                Login
            </button>

            </div>
            <ColorModeSwitcher id='color_mode'/>
        </div>
    </div>
  )
}

export default navbar