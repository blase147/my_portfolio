import React, { useState, useEffect } from 'react';
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
    { url: '#my-works', name: 'Portfolio' },
    { url: '#about-me', name: 'About' },
    { url: '#contact-me', name: 'Contact' },
    { url: 'https://medium.com/@solarmails2/', name: 'Blog' },
  ];

  let menuIcon = null;
  if (windowWidth <= 768) {
    menuIcon = isOpen ? (
      <RiCloseLine size={35} onClick={toggleMenu} />
    ) : (
      <RiMenuLine size={35} onClick={toggleMenu} />
    );
  }

  const handleHashLinkClick = (event, url) => {
    event.preventDefault();
    const targetId = url.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const { offsetTop } = targetElement;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
    // toggleMenu(); // Close the menu after clicking on a link
  };

  return (
    <div>
      <div className="navigation-bar-container">
        <div className="menu-icon">{menuIcon}</div>
        {isOpen && (
          <ul className="navigation-menu">
            {navLinks.map(({ url, name }) => (
              <li key={name}>
                <a
                  href={url}
                  onClick={(e) => handleHashLinkClick(e, url)}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="desktop-nav-container">
        {windowWidth > 768 && (
          <ul className="navigation-menu">
            {navLinks.map(({ url, name }) => (
              <li key={name}>
                <a
                  href={url}
                  onClick={(e) => handleHashLinkClick(e, url)}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
