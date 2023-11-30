import React from 'react';
import './HireMe.css'
import './roundCircle'
const HireMe = () => {
    const text = 'Your Text'
    // const roundCircle=()=>{

    // }
    return (
        <>
         {/* <div className="circle">

            <div >
                <p className="text">JAHID HASAN, FULL STACK WEB DEVELOPER</p>
            </div>
            </div>    */}
        <div className="rounded-text">
        Your Rounded Text
      </div>

      <div className="circle">
      <div className="text">
        Your Text
      </div>
    </div>


    <div className="circle">
      {text.split('').map((letter, index) => (
        <span key={index} className="letter" style={{ '--index': index }}>
          {letter}
        </span>
      ))}
    </div>


    <div className="circle">
      {text.split('').map((letter, index) => (
        <span key={index} className="rotating-letter">
          {letter}
        </span>
      ))}
    </div>

        </>

        
    );
};

export default HireMe;