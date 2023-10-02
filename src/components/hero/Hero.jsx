import React from 'react';
import './hero.css';

const Hero = ({ text, textStyle, image, heroStyle, id }) => {
  return (
    <section className="hero" style={heroStyle} id={id}>
      <img
        src={require('../../images/Hero/' + image + '.jpg')}
        alt=""
        className="hero--image"
      />
      <span className="hero--text" style={textStyle}>
        {text}
      </span>
    </section>
  );
};

export default Hero;
