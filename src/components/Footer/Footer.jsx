import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className="f">
      {/* FooTeR !!  */}
      <div className="footer">
        <div className='help'>
        <img src="https://codehelp.s3.ap-south-1.amazonaws.com/hoktffneuv795jansa8z_bdff2537c7.svg" alt="logo" className='logo' />
          <p>CODE HELP</p>
        <span id='ulT'>  <pre className='pre'>The Ultimate Guide to Ace SDE <pre id='int'>Interviews.</pre></pre> </span>
        
        </div>

        <div className='help'>
          <p>MENU</p>
          <pre className='pre'>About</pre>
          <pre className='pre'>Courses</pre>
          <pre className='pre'>Contact</pre>
         
        </div>

        <div className='help'>
          <p>SERVICES</p>
          <pre className='pre'>Privacy Policy</pre>
          <pre className='pre'>Terms of use</pre>
          <pre className='pre'>Refund Policy</pre>
         
        
        </div >
        <span id='lin_'></span>
        <div className='help'>
          <div id='touch'>GET IN TOUCH</div>
          <pre className='pre' id='ptr'>Email: support@codehelp.in</pre>
          
        </div>
      </div>
      <div className="footerBorder">
        <div> Copyright © 2023 CodeHelp. All Rights Reserved.</div>
      </div>
   
    </div>
  )
}

export default Footer