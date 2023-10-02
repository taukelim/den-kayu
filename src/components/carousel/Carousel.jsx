import React from 'react';
import './carousel.css';
const Carousel = ({ imageData }) => {
  const images = imageData.imagesArray.map((e, i) => (
    <img
      src={require(`../../images/${imageData.folder}/${e}.png`)}
      className="carousel--image"
      alt="product"
    ></img>
  ));

  return <div className="carousel--container">{images}</div>;
};

export default Carousel;
