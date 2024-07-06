import React from 'react';
import './hero.css';
import videobg from './background.mp4';

const Hero = () => {
  return (
    <div className='back'>
      <div className="hero-video">
        <video src={videobg} autoPlay loop muted></video>
      </div>
      
      

      <div className="content">
        <p>
         Resource and Development 
        </p>

       
      </div>
    </div>
  );
};

export default Hero;
