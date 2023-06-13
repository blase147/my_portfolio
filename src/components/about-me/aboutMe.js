import React from 'react';
import './aboutMe.scss';
import {
  FaGithub, FaLinkedin, FaAngellist, FaTwitter, FaFacebook,
} from 'react-icons/fa';

const AboutMe = () => (
  <div>
    <div className="about-me-container">
      <section id="about" className="about">
        <div className="about-me">
          <div className="about-me-intro">
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
            <button type="button">Get My Resume</button>
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

          <div className="skill-a">
            <p>Language</p>
            <ul>
              <li>Javascript</li>
              <li>Ruby</li>
              <li>Html</li>
              <li>Css</li>
            </ul>
          </div>

          <div>
            <p>Frameworks</p>
            <ul>
              <li>Bootstrap</li>
              <li>Ruby on Rail</li>
              <li>RSPec</li>
              <li>CapyBara</li>
              <li>Selenium</li>
            </ul>
          </div>

          <div>
            <p>Skills</p>
            <ul>
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
