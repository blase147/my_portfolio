import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import './navigationBar.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
// eslint-disable-next-line import/no-extraneous-dependencies

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { url: '/my_works', name: 'Portfolio' },
    { url: '/about_me', name: 'About' },
    { url: '/contact_me', name: 'Contact' },
    { url: '/send_male', name: 'Send Direct Mail' },
  ];

  return (

    <div className="navigation-bar-container">
      <div className="menu-icon">
        {isOpen ? <RiCloseLine size={50} onClick={toggleMenu} />
          : <RiMenuLine size={50} onClick={toggleMenu} />}
      </div>
      {isOpen && (
      <ul className="navigation-menu">
        {navLinks.map(({ url, name }) => (
          <li key={name}>
            <Link to={url} onClick={toggleMenu}>{name}</Link>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default NavigationBar;
