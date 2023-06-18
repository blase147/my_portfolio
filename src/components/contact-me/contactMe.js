import React from 'react';
import { Link } from 'react-router-dom';
import './contactMe.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactMe = () => (
  <section className="contact-me-container" id="contact_me">
    <FontAwesomeIcon className="custom-icon" icon={faEnvelope} />
    <div><h1>Get in Touch</h1></div>
    <div className="contact-me">
      <p>
        I am always interested in hearing about new projects,
        so if you would like to chat please get in touch.

      </p>
      <fieldset>
        <legend> Just say hi!</legend>
        <div className="form-group">
          <form className="get-in-touch" id="form" action="https://formspree.io/f/xqkjanrn" method="POST">
            <div>
              <label className="label" htmlFor="name">
                Your name:
                <input className="input" type="text" id="name" name="name" maxLength="30" placeholder="Fullname" required />
              </label>
            </div>

            <div>
              <label className="label" htmlFor="mail">
                Your e-mail address:
                <input className="input" id="mail" type="email" name="email" placeholder="solarmails2@gmail.com" />
              </label>
            </div>

            <div>
              <label className="label" htmlFor="comment">
                Your message:
                <textarea name="comment" cols="30" rows="10" maxLength="500" placeholder="What do you think about building your next project with me?" required />
                <span className="message" />
              </label>
            </div>
            <div>
              <button className="get-in-touch-btn" type="submit">Get in touch now!!</button>
            </div>
          </form>
        </div>
      </fieldset>
    </div>
    <nav className="footer-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#about_me">About</Link>
        </li>
        <li>
          <Link to="/my_works#contact_me">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact_me">Contact</Link>
        </li>
        <li>
          <Link to="/blog#contact_me">Blog</Link>
        </li>
      </ul>
    </nav>
  </section>
);

export default ContactMe;
