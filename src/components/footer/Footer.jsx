import React from 'react';
import './footer.css';
const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer--links--section">
        <div className="footer--contact--section">
          <h3 className="footer--contact--title">Contact</h3>
          <a href="https://wa.me/6282126028988" className="footer--links">
            Whatsapp
          </a>
          <a href="mailto:denkayuhome@gmail.com" className="footer--links">
            Email
          </a>
          <a href="#email" className="footer--links">
            Line
          </a>
        </div>
        <div className="footer--socialMedia--section">
          <h3 className="footer--socialMedia--title">Social Media</h3>
          <a
            href="https://www.instagram.com/denkayuhome/"
            className="footer--links"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/denkayu.id"
            className="footer--links"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/company/pt-samudra-sejahtera-bahagia/"
            className="footer--links"
          >
            Linkedin
          </a>
        </div>
      </div>

      <div className="footer--logo--section">
        <img
          src={require('../../images/logo--white--transparent.png')}
          alt=""
          className="footer--logo--image"
        />
        <p className="footer--company--name">PT Samudra Sejahtera Bahagia</p>
      </div>
    </footer>
  );
};

export default Footer;
