import React from 'react';
import './footer.scss';

const Footer = () => (
  <section>
    <div className="footer">
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
    </div>
  </section>
);

export default Footer;
