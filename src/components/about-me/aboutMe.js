import React from 'react';
import './aboutMe.scss';
import {
  FaGithub, FaLinkedin, FaAngellist, FaTwitter, FaFacebook, FaBootstrap,
} from 'react-icons/fa';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faUserLarge, faCode } from '@fortawesome/free-solid-svg-icons';
import DownloadPDF from '../../DownloadPDF';

const AboutMe = () => (
  <div>
    <div className="about-me-container">
      <section id="about" className="about">
        <div className="about-me">
          <FontAwesomeIcon className="custom-icon" icon={faUserLarge} />
          <h1>About me</h1>
          <div className="about-me-intro">
            <div className="intro-text">
              <p>
                Hello I am a software developer! I can help you build a product,
                feature or website Look through some of my work and experience!
                If you like what you see and have a project you need coded,
                do not hestiate to contact me.I am a software designer, with over
                ten years of experience. Built up while working with teams big
                and small across the United States, Japan and Australia.

                Now, I am back home. Living in Canterbury, New Zealand, where I spend my
                free time reading about the history of video game development and riding
                track bikes.

              </p>
            </div>
            <div>
              <img src="./main-photo.jpg" alt="profile" />
              <div className="buttons">
                <DownloadPDF />
                <a href="mailto:solarmails2gmail.com" target="_blank" rel="noreferrer">solarmails2@gmail.com</a>
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
        </div>

        <div className="skill-section">
          <FontAwesomeIcon className="custom-icon" icon={faCode} />
          <h3>
            I have build a host of apps using industry ready
            programming languages and frameworks

          </h3>

          <div className="skill-title">
            <p>Language</p>
            <ul className="d-list">
              <li><FaBootstrap key="bootstrap" size={30} /></li>
              <li><FaBootstrap key="bootstrap" size={30} /></li>
              <li><FaBootstrap key="bootstrap" size={30} /></li>
              <li><FaBootstrap key="bootstrap" size={30} /></li>
            </ul>
          </div>

          <div className="skill-title">
            <p>Frameworks</p>
            <ul className="d-list">
              <li><FaBootstrap key="bootstrap" size={30} /></li>
              <li><FaBootstrap key="bootstrap" size={30} /></li>
              <li><FaBootstrap key="bootstrap" size={30} /></li>
              <li><FaBootstrap key="bootstrap" size={30} /></li>
              <li><FaBootstrap key="bootstrap" size={30} /></li>
            </ul>
          </div>

          <div className="skill-title">
            <p>Skills</p>
            <ul className="d-list">
              <li><FaBootstrap key="bootstrap" size={30} /></li>
              <li><FaBootstrap key="bootstrap" size={30} /></li>
              <li><FaBootstrap key="bootstrap" size={30} /></li>
              <li><FaBootstrap key="bootstrap" size={30} /></li>
              <li><FaBootstrap key="bootstrap" size={30} /></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="blog">
        <h1>My blog</h1>
        <p><a href="https://medium.com/@solarmails2/choosing-your-place-in-the-tech-industry-1356bba0f41d">Chosing your place in the tech industry</a></p>
      </section>
    </div>
  </div>

);

export default AboutMe;
