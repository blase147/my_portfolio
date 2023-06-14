import React from 'react';
import './footer.scss';
import {
  FaGithub, FaLinkedin, FaAngellist, FaTwitter, FaFacebook,
} from 'react-icons/fa';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { RiMapPin2Line } from 'react-icons/ri';
import '../Homepage/homePage.scss';

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
        <button className="my-resume" type="button">GET MY RESUME</button>
        <a className="mailto" href="mailto:solarmails2gmail.com" target="_blank" rel="noreferrer">solarmails2@gmail.com</a>
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
      <div className="copyright">
        {' '}
        <FontAwesomeIcon className="custom-icon" icon={faCopyright} />
        <p>CHUKWUMA PAUL MOSANYA</p>

      </div>
    </section>
  </div>

);

export default Footer;
