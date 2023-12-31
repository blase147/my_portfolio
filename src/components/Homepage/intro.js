import React, { useState, useEffect } from 'react';
import { RiMapPin2Line } from 'react-icons/ri';
// import './homePage.scss';
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
        {windowWidth > 600 && (
        <img src="./main-photo.jpg" alt="profile pic" />
        )}
      </div>
      <section className="intro">
        <div className="my_location">
          <p>
            <RiMapPin2Line />
            Imo, Nigeria
          </p>
          <h2>Chukwuma Mosanya, </h2>
          <h1>Software Engineer</h1>
          <p id="primary-text-des">
            Certified Full-Stack Software Engineer trained to
            help startups and companies of scale build and maintain
            efficient and customer centric web & desktop applications
            I can help you build a product, feature or website.
            Look through some of my work and experience! If you
            like what you see and have a project you need coded,
            do not hesitate to contact me.
          </p>
        </div>
        <div className="res-mail">
          <DownloadPDF className="pfd" />
        </div>
      </section>
    </div>
  );
};

export default Intro;
