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
    { id: 1, url: '/', name: 'Home' },
    { id: 2, url: '/my_works', name: 'Portfolio' },
    { id: 3, url: '/about_me', name: 'About' },
    { id: 4, url: '/contact_me', name: 'Contact' },
    { id: 5, url: '/url', name: 'Blog' },
  ];

  let menuIcon = null;
  if (windowWidth <= 768) {
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
            {navLinks.map(({ id, url, name }) => (
              <li key={id}>
                <Link to={url} onClick={toggleMenu}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="desktop-nav-container">
        {windowWidth > 768 && (
          <ul className="navigation-menu">
            {navLinks.map(({ id, url, name }) => (
              <li key={id}>
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
