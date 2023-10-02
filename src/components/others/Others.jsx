import React from 'react';
import './others.css';

const Others = ({ text1, text2 }) => {
  return (
    <section className="others">
      <h2 className="others--title">Other Products</h2>
      <div className="card--container">
        <div className="others--card">
          <img
            src={require('../../images/other/bamboo-handicrafts.jpg')}
            alt=""
            className="card--image"
          />
          <p className="card--name">{text1}</p>
        </div>
        <div className="others--card">
          <img
            src={require('../../images/other/rattan-handicrafts.jpg')}
            alt=""
            className="card--image"
          />
          <p className="card--name">{text2}</p>
        </div>
      </div>
    </section>
  );
};

export default Others;
