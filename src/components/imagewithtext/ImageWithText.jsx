import React from 'react';
import './imagewithtext.css';
const ImageWithText = () => {
  return (
    <section id="about">
      <div className="imageWithText">
        <img
          src={require('../../images/hands-to-space.gif')}
          alt=""
          className="imageWithText--image"
        />
        <p className="imageWithText--text">{`From their hands 
to your space.`}</p>
      </div>
    </section>
  );
};

export default ImageWithText;
