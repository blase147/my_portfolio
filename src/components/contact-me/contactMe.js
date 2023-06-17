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
    <div className="footer-nav">
      <ul>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
        <li>Blog</li>
      </ul>
    </div>
  </section>
);

export default ContactMe;
