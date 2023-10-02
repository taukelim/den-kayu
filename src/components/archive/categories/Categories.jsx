import React from 'react';
import './categories.css';
const Categories = () => {
  return (
    <section className="categories">
      <h2 className="card--title">Our Categories</h2>
      <div className="card--container">
        <div className="card">
          <img
            src={require('../../images/dkbrownlogo.png')}
            alt=""
            className="card--image"
          />
          <p className="card--name">Indoor</p>
        </div>
        <div className="card">
          <img
            src={require('../../images/dkbrownlogo.png')}
            alt=""
            className="card--image"
          />
          <p className="card--name">Outdoor</p>
        </div>
        <div className="card">
          <img
            src={require('../../images/dkbrownlogo.png')}
            alt=""
            className="card--image"
          />
          <p className="card--name">Handicrafts</p>
        </div>
      </div>
    </section>
  );
};

export default Categories;
