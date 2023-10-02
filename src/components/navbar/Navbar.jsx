import React from 'react';
import './navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const iconStyle = {
    fontSize: '2em',
  };

  const [showLinks, setShowLinks] = React.useState(false);

  return (
    <nav id={showLinks ? 'whiteNav' : ''}>
      <div className="left--side">
        <div className="logo--image--container">
          <img
            src={require('../../images/logodk.png')}
            alt=""
            className="logo--image"
          />
        </div>
      </div>

      <div className="right--side">
        <button
          className="burger--button"
          onClick={() => setShowLinks(!showLinks)}
        >
          <GiHamburgerMenu style={iconStyle} />
        </button>
        <div className="links--container" id={showLinks ? 'hidden' : ''}>
          <a href="#about" className="links">
            About
          </a>
          <a href="#furniture" className="links">
            Furniture
          </a>
          <a href="#ata" className="links">
            Ata
          </a>
          <a href="#contact" className="links">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
