import React from 'react';
import './aboutMe.scss';
import {
  FaGithub, FaLinkedin,
  FaAngellist, FaTwitter, FaFacebook,
} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import DownloadPDF from '../../DownloadPDF';
// import '../footer/footer.scss';
import '../Homepage/homePage.scss';

const AboutMe = () => (
  <div id="about_me" className="about-me-container">
    <section className="about">
      <div className="about-me">
        <FontAwesomeIcon className="user-icon" icon={faUserLarge} />
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
            <div className="my-tech-stack">
              {/* <FontAwesomeIcon className="custom-icon" icon={faCode} /> */}
              <h2>My tech stack</h2>
              <p>Here are some of the  languages and tools I have mastered</p>
              <ul className="d-list">
                <li><img src="./html.png" alt="html" /></li>
                <li><img src="./javascript.png" alt="html" /></li>
                <li><img src="./ruby.png" alt="html" /></li>
                <li><img src="./bootstrap.png" alt="html" /></li>
                <li><img src="./ruby-on-rails.png" alt="html" /></li>
              </ul>
            </div>

          </div>
          <div className="img-profile">
            <img src="./main-photo.jpg" alt="profile" />
            <DownloadPDF className="my-resume" />
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

      {/* <div className="skill-section">
        <div className="skill-title">
          <FontAwesomeIcon className="custom-icon" icon={faCode} />
          <h2>My tech stack</h2>
          <p>Here are some of the  languages and tools I have mastered</p>
          <ul className="d-list">
            <li><img src="./html.png" alt="html" /></li>
            <li><img src="./javascript.png" alt="html" /></li>
            <li><img src="./ruby.png" alt="html" /></li>
            <li><img src="./bootstrap.png" alt="html" /></li>
            <li><img src="./ruby-on-rails.png" alt="html" /></li>
          </ul>
        </div>
      </div> */}
    </section>
    <section className="blog">
      <div>
        <h1>My blog</h1>
        <p><a href="https://medium.com/@solarmails2/choosing-your-place-in-the-tech-industry-1356bba0f41d">Chosing your place in the tech industry</a></p>
      </div>
    </section>
  </div>
);

export default AboutMe;
