import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import './navigationBar.scss';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { url: '/', name: 'Home' },
    { url: '/my_works', name: 'Portfolio' },
    { url: '/about_me', name: 'About' },
    { url: '/contact_me', name: 'Contact' },
    { url: '/send_male', name: 'Send Direct Mail' },
  ];

  let menuIcon = null;
  if (windowWidth <= 320) {
    menuIcon = isOpen ? (
      <RiCloseLine size={35} onClick={toggleMenu} />
    ) : (
      <RiMenuLine size={35} onClick={toggleMenu} />
    );
  }

  return (
    <div>
      <div className="navigation-bar-container">
        <div className="menu-icon">{menuIcon}</div>
        {isOpen && (
        <ul className="navigation-menu">
          {navLinks.map(({ url, name }) => (
            <li key={name}>
              <Link to={url} onClick={toggleMenu}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
        )}
      </div>
      <div className="desktop-nav-container">
        {windowWidth > 320 && (
        <ul className="navigation-menu">
          {navLinks.map(({ url, name }) => (
            <li key={name}>
              <Link to={url}>{name}</Link>
            </li>
          ))}
        </ul>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
