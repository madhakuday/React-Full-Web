import React from 'react';
import '../stylesheet/Hero.css';

function Hero() {
  return (
    <>
      <div className="hero hero_imag">
        <div className="hero_box">
          <h1>
            we care <br /> about your <br />
            Health
          </h1>
          <p>
            Royalty-free licenses let you pay once to <br /> use copyrighted
            images and video clips in personal
          </p>

          <button className="btn button">Read more</button>
        </div>
      </div>
    </>
  );
}

export default Hero;
