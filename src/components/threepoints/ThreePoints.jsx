import React from 'react';
import './threepoints.css';
const ThreePoints = () => {
  return (
    <section className="threePoints">
      <div className="threePoints--point">
        <h3 className="threePoints--title">Quality Guarantee</h3>
        <p className="threePoints--text">
          Each piece is inspected by our QA director to ensure the finest
          craftsmanship.
        </p>
      </div>
      <div className="threePoints--point">
        <h3 className="threePoints--title">Quality Service</h3>
        <p className="threePoints--text">
          Fluent in English to ensure smooth communication and processing of
          orders.
        </p>
      </div>
      <div className="threePoints--point">
        <h3 className="threePoints--title">Expert Craftsmen</h3>
        <p className="threePoints--text">
          We only work with expert craftsmen. Each piece you own is uniquely
          handmade.
        </p>
      </div>
    </section>
  );
};

export default ThreePoints;
