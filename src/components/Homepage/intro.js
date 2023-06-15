import React, { useState, useEffect } from 'react';
import { RiMapPin2Line } from 'react-icons/ri';
import './homePage.scss';
import DownloadPDF from '../../DownloadPDF';

const Intro = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="intro-container">
      <div className="profPic">
        {windowWidth > 768 && (
        <img src="./main-photo.jpg" alt="profile pic" />
        )}
      </div>
      <section className="intro">
        <div className="my_location">
          <p>
            <RiMapPin2Line />
            Imo, Nigeria
          </p>
          {/* <div className="profPic">
            {windowWidth > 768 && (
            <img src="./main-photo.jpg" alt="profile pic" />
            )}
          </div> */}
          <h2>Chukwuma Mosanya, </h2>
          <h1>Software Engineer</h1>
          <p id="primary-text-des">
            I can help you build a product, feature or website.
            Look through some of my work and experience! If you
            like what you see and have a project you need coded,
            do not hesitate to contact me.
          </p>
        </div>
        <div className="res-mail">
          <div className="my-resume">
            <DownloadPDF className="pfd" />
          </div>
          <div className="mailto">
            <a href="mailto:solarmails2gmail.com" target="_blank" rel="noreferrer">
              solarmails2@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
