import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import './navigationBar.scss';

const NavigationBar = () => {
  const navLinks = [
    { url: '/my_works', name: 'Portfolio' },
    { url: '/about_me', name: 'About' },
    { url: '/contact_me', name: 'Contact' },
    { url: '/send_male', name: 'Send Direct Mail' },
  ];

  return (
    <div className="navigation-bar-container">
      <div className="logo">
        <Link to="/" className="myName">Chukwuma Paul Mosanya</Link>
      </div>

      <div className="navigation-bar">
        {navLinks.map(({ url, name }) => (
          <li key={name}>
            <Link to={url}>{name}</Link>
          </li>
        ))}
        <button id="menu-button" type="button" className="menu">
          <i className="fas fa-bars" />
        </button>
        <button className="close-btn" type="button" id="close-btn">
          <i className="fa-solid fa-xmark close-icon" />
        </button>
      </div>
    </div>

  );
};

export default NavigationBar;
