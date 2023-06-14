import React from 'react';
import './contactMe.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactMe = () => (
  <section className="contact-me-container">
    <FontAwesomeIcon className="custom-icon" icon={faEnvelope} />
    <div><h1>Get in Touch</h1></div>
    <div className="contact-me">
      <p>
        I am always interested in hearing about new projects,
        so if you would like to chat please get in touch.

      </p>
      <div className="form-group">
        <form className="get-in-touch" id="form" action="https://formspree.io/f/xqkjanrn" method="POST">
          <input type="text" name="fullname" maxLength="30" placeholder="Fullname" required />
          <input id="mail" className="email" type="email" name="email" placeholder="Email address" />
          <textarea name="comment" cols="30" rows="10" maxLength="500" placeholder="Enter text here" required />
          <span className="message" />
          <div>
            <button className="get-in-touch-btn" type="submit">Get in touch now!!</button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default ContactMe;
