import React from 'react';
import './custom.css';
const Custom = () => {
  return (
    <section className="custom">
      <img
        src={require('../../images/customization.jpg')}
        alt=""
        className="custom--image"
      />

      <div className="custom--text">
        <div className="custom--text--content">
          <span className="custom--text--nowrap">Looking for</span>{' '}
          customization?
        </div>
        <a className="custom--button" href="#contact">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Custom;
