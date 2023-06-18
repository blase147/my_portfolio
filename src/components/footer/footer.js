import React from 'react';
import {
  FaGithub, FaLinkedin, FaAngellist, FaTwitter, FaFacebook,
} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { RiMapPin2Line } from 'react-icons/ri';
import '../Homepage/homePage.scss';
import DownloadPDF from '../../DownloadPDF';
import './footer.scss';

const Footer = () => (
  <div>
    <div className="intro-container">
      <section className="intro">
        <div className="my_location">
          <p>
            <RiMapPin2Line />
            Imo, Nigeria
          </p>
          <h2>Chukwuma Mosanya, </h2>
          <h1>Software Engineer</h1>
        </div>
      </section>
      <div className="res-mail">
        <DownloadPDF className="pfd" />
      </div>
    </div>

    <section>
      <div className="footer">
        <div className="social-icons-container">
          <ul className="social-icons">
            <li>
              <a href="https://github.com/blase147"><FaGithub size={30} alt="social-icon" /></a>
            </li>
            <li>
              <a href="www.linkedin.com/in/chukwuma-mosanya-346303"><FaLinkedin size={30} alt="social-icon" /></a>
            </li>
            <li>
              <a href="www.angelist.com"><FaAngellist size={30} alt="social-icon" /></a>
            </li>
            <li>
              <a href="https://twitter.com/ChukwumaMosanya"><FaTwitter size={30} alt="social-icon" /></a>
            </li>
            <li>
              <a href="www.facebook.com"><FaFacebook size={30} alt="social-icons" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div><hr /></div>

      <div className="copyright">
        {' '}
        <div><p><FontAwesomeIcon className="custom-icon" icon={faCopyright} /></p></div>
        <div><p>CHUKWUMA PAUL MOSANYA, 2023</p></div>

      </div>
    </section>
  </div>

);

export default Footer;
