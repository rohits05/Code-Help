import React from 'react'
import './Why.css'
import Cs from './cs.png'
import Cur from './cur.png'
import Dsa from './dsa.png'
import Hpq from './hpq.png'
import New from './new.png'
import Learn from './learn.png'

const Why = () => {
  return (
    <div className='W'>
        <div className="why">
        <img src="https://codehelp.s3.ap-south-1.amazonaws.com/bkzxjg9fxeaiuej76vdd_9e7b388222.png" alt="" />
            <div className="why1">
            
               WHY CODE-HELP?
            </div>
            <div className="why2">
            <pre>Making learning easier and </pre>
             more convenient for you.
            </div>
            </div>

            <div children='imgs'>
                <div className="img1">
                    <img src={Dsa} alt="Cs" /> 
                    <img src={Cs} alt="Cs" /> 
                    <img src={Hpq} alt="Cs" /> 
                </div>

                <div className="img2">
                    <img src={Cur} alt="Cs" /> 
                    <img src={Learn} alt="Cs" /> 
                    <img src={New} alt="Cs" /> 
                </div>
            </div>
    </div>
  )
}

export default Why