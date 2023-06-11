import React from 'react';
import './homePage.scss';
// import NavigationBar from '../navigation-bar/navigationBar';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  FaTwitter, FaLinkedin, FaGithub,
  FaAngellist, FaFacebook,
} from 'react-icons/fa';
import ContactMe from '../contact-me/contactMe';
import MyWorks from '../my-works/myWorks';
import Footer from '../footer/footer';

const HomePage = () => (
  <div>
    <section className="home-page">
      <div className="intro">
        <h1>
          Hey There.
          <br />

          I am Paul

        </h1>
        <h2>I am a Software Developer</h2>
        <p id="primary-text-des">
          I can help you build a product, feature or website.
          Look through some of my work and experience! If you
          like what you see and have a project you need coded,
          do not hestiate to contact me.
        </p>
      </div>
      <div className="social-icons-container">
        <ul className="social-icons">
          <li>
            <a href="https://github.com/blase147"><FaGithub size={45} alt="social-icon" /></a>
          </li>
          <li>
            <a href="www.linkedin.com/in/chukwuma-mosanya-346453"><FaLinkedin size={45} alt="social-icon" /></a>
          </li>
          <li>
            <a href="www.angelist.com"><FaAngellist size={45} alt="social-icon" /></a>
          </li>
          <li>
            <a href="https://twitter.com/ChukwumaMosanya"><FaTwitter size={45} alt="social-icon" /></a>
          </li>
          <li>
            <a href="www.facebook.com"><FaFacebook size={45} alt="social-icons" /></a>
          </li>
        </ul>
      </div>
      <div className="profile-pic">
        <img src="../../main photo.jpg" alt="profile-pic" />
      </div>
    </section>

    <MyWorks />
    <ContactMe />
    <Footer />
  </div>
);
export default HomePage;
