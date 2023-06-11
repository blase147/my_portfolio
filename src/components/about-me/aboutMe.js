import React from 'react';
import './aboutMe.scss';
// import NavigationBar from '../navigation-bar/navigationBar';

const AboutMe = () => (
  <div>
    {/* <NavigationBar /> */}
    <div className="about-me-container">
      <section id="about" className="about">
        <div className="about-me">
          <div className="about-me-intro">
            <h1>About me</h1>
            <p>
              Hello I am a software developer! I can help you build a product,
              feature or website Look through some of my work and experience!
              If you like what you see and have a project you need coded,
              do not hestiate to contact me.

            </p>
            <button type="button">Get My Resume</button>
          </div>
        </div>

        <hr className="skill-rule" />
        <div className="skill-section">

          <div className="skill-a">
            <p className="skill-a-title">
              <img src="img/diamond.png" alt="icon" />
              Language
            </p>
            <ul>
              <li>Javascript</li>
              <li>Ruby</li>
              <li>Html</li>
              <li>Css</li>
            </ul>
          </div>

          <div className="skill-a">
            <p className="skill-a-title">
              <img src="img/Rectangle.png" alt="icon" />
              Frameworks
            </p>
            <ul>
              <li>Bootstrap</li>
              <li>Ruby on Rail</li>
              <li>RSPec</li>
              <li>CapyBara</li>
              <li>Selenium</li>
            </ul>
          </div>

          <div className="skill-a">
            <p className="skill-a-title">
              <img src="img/circle.png" alt="icon" />
              Skills
            </p>
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
