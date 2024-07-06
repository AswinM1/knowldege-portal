import React from 'react';
import './hero2.css';
import bg from './bg2.mp4';

const Sec = () => {
  return (
    <div>
<div className='v'>
  <video src={bg} autoPlay loop muted></video>
</div>
    <div className='backs'>
      <div className="contents">
        <div className="circles">
          <img src="https://via.placeholder.com/200x200" alt="John Doe" className="img-fluid" />
        </div>
        <div>
          <h1>Meet the team lead</h1>
          <p style={{color:'white'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            dkjashdjahsdjashdajhdjashdhdlksdlsldldjdklsdjklasdjasdj <br />
          </p>
         </div>
      </div>
    </div>
    </div>
  );
};

export default Sec;