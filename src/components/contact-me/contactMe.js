import React from 'react';
import './contactMe.scss';
// import NavigationBar from '../navigation-bar/navigationBar';

const ContactMe = () => (
  <section className="contact-me-container">
    <div><h1>Get in Touch</h1></div>
    <div className="contact-me">
      <p>
        I am always interested in hearing about new projects,
        so if you would like to chat please get in touch.

      </p>
      <div>
        <form className="get-in-touch" id="form" action="https://formspree.io/f/xqkjanrn" method="POST">
          <input type="text" name="fullname" maxLength="30" placeholder="Fullname" required />
          <input id="mail" className="email" type="email" name="email" placeholder="Email address" />
          <textarea name="comment" cols="30" rows="10" maxLength="500" placeholder="Enter text here" required />
          <span className="message" />
          <div className="align-left">
            <button type="submit">Get in touch</button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default ContactMe;
