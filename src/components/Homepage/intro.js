import React from 'react';
//  import NavigationBar from '../navigation-bar/navigationBar';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
// FaTwitter, FaLinkedin, FaGithub,
// FaAngellist, FaFacebook,
} from 'react-icons/fa';
// eslint-disable-next-line import/no-extraneous-dependencies
import { RiMapPin2Line } from 'react-icons/ri';

import './homePage.scss';
import DownloadPDF from '../../DownloadPDF';

const Intro = () => (
  <div className="intro-container">
    <section className="intro">
      <div className="my_location">
        <p>
          <RiMapPin2Line />
          Imo, Nigeria
        </p>
        <h2>Chukwuma Mosanya, </h2>
        <h1>Software Engineer</h1>
        <p id="primary-text-des">
          I can help you build a product, feature or website.
          Look through some of my work and experience! If you
          like what you see and have a project you need coded,
          do not hestiate to contact me.
        </p>
      </div>
    </section>
    <div className="res-mail">
      <div className="my-resume"><DownloadPDF /></div>
      <div className="mailto">
        <a href="mailto:solarmails2gmail.com" target="_blank" rel="noreferrer">solarmails2@gmail.com</a>
      </div>
    </div>
  </div>
);
export default Intro;
