import React from 'react';
import './aboutMe.scss';
import {
  FaGithub, FaLinkedin, FaAngellist, FaTwitter, FaFacebook,
} from 'react-icons/fa';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';

const AboutMe = () => (
  <div>
    <div className="about-me-container">
      <section id="about" className="about">
        <div className="about-me">
          <div className="about-me-intro">
            <FontAwesomeIcon className="custom-icon" icon={faUserLarge} />
            <h1>About me</h1>
            <p>
              Hello I am a software developer! I can help you build a product,
              feature or website Look through some of my work and experience!
              If you like what you see and have a project you need coded,
              do not hestiate to contact me.I am a software designer, with over
              ten years of experience. Built up while working with teams big
              and small across the United States, Japan and Australia.

              Now, I am back home. Living in Canterbury, New Zealand, where I spend my
              free time reading about the history of video game development and riding track bikes.

            </p>
            <img src="./main-photo.jpg" alt="profile" />
            <div className="buttons">
              <button type="button">Get My Resume</button>
              <button type="button">
                <a className="mailto" href="mailto:solarmails2gmail.com" target="_blank" rel="noreferrer">solarmails2@gmail.com</a>
              </button>
            </div>
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

        <div className="skill-section">

          <div className="skill-title">
            <p>Language</p>
            <ul className="d-list">
              <li>Javascript</li>
              <li>Ruby</li>
              <li>Html</li>
              <li>Css</li>
            </ul>
          </div>

          <div className="skill-title">
            <p>Frameworks</p>
            <ul className="d-list">
              <li>Bootstrap</li>
              <li>Ruby on Rail</li>
              <li>RSPec</li>
              <li>CapyBara</li>
              <li>Selenium</li>
            </ul>
          </div>

          <div className="skill-title">
            <p>Skills</p>
            <ul className="d-list">
              <li>Codekit</li>
              <li>Github</li>
              <li>Codepen</li>
              <li>Gitlab</li>
              <li>Terminal</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default AboutMe;
