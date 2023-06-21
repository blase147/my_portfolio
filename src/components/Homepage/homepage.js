import React, { useState, useEffect } from 'react';
import './homePage.scss';
import '../about-me/aboutMe.scss';
import '../contact-me/contactMe.scss';
import '../my-works/myWorks.scss';
import '../footer/footer.scss';
import { Link } from 'react-router-dom';
import {
  FaGithub, FaLinkedin,
  FaAngellist, FaTwitter, FaFacebook,
} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserLarge, faMedal, faEnvelope, faCopyright,
} from '@fortawesome/free-solid-svg-icons';
import { RiMapPin2Line } from 'react-icons/ri';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { v4 as uuidv4 } from 'uuid';
import data from '../../projectData';
import DownloadPDF from '../../DownloadPDF';
import NavigationBar from '../navigation-bar/navigationBar';

const HomePage = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // const backgroundImageUrls = [
  //   '/public/tech1.png',
  //   '/public/luxury-cars-lending.png',
  //   // Add more image URLs as needed
  // ];

  return (
    <div id="home" className="homepage">
      {/* <div
        key={uuidv4()} // Generate a unique key using uuidv4()
        className="your-component-item"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      /> */}
      <NavigationBar />
      <div id="intro" className="intro-container">
        <div className="profPic">
          {windowWidth > 768 && (
          <img src="./main-photo.jpg" alt="profile pic" />
          )}
        </div>
        <section className="intro">
          <div className="my_location">
            <p>
              <RiMapPin2Line />
              Imo, Nigeria
            </p>
            <h2>Chukwuma Mosanya, </h2>
            <h1>Software Engineer</h1>
            <p id="primary-text-des">
              I can help you build a product, feature or website.
              Look through some of my work and experience! If you
              like what you see and have a project you need coded,
              do not hesitate to contact me.
            </p>
          </div>
          <div className="res-mail">
            <DownloadPDF className="pfd" />
          </div>
        </section>
      </div>

      <section id="my-works" className="my-works">
        <FontAwesomeIcon className="custom-icon" icon={faMedal} />
        <div><h1 className="projects-title">Projects</h1></div>
        <div className="project-container">
          {data.map((item) => (
            <div key={item.id} className="item-card">
              <img src={item.image} alt="Project Screenshot" />

              <div className="text-content">
                <div className="text">
                  <h2>{item.title}</h2>
                  <p className="desc">{item.description}</p>
                </div>
                <div className="stack-icon-btn">
                  <ul className="lang">
                    <p>Project stack:</p>
                    <div className="li-container">
                      {item.lang.map((language) => (
                        <li key={language}>{language}</li>
                      ))}
                    </div>
                  </ul>
                  <div className="view-btns">
                    <a href={item.live} target="_blank" rel="noreferrer">
                      View Live
                    </a>
                    <a href={item.source} target="_blank" rel="noreferrer">
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div id="about-me" className="about-me-container">
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

                  Now, I am back. Living in Canterbury, New Zealand, where I spend my
                  free time reading about the history of video game development and riding
                  track bikes.

                </p>
                <div className="my-tech-stack">
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
            <h1>Blog Posts</h1>
            <a href="https://medium.com/@solarmails2/choosing-your-place-in-the-tech-industry-1356bba0f41d">
              <h2>Chosing your place in the tech industry</h2>
              <p>
                In choosing a tech career to follow, introspection becomes a key action.
                Basic skills and interests must be well established to gain insight into ones
                capabilities and passion. This will ultimately create a direction for a movement
                whose payload is the development of mastery and professionalization.
                This mastery is paramount as the subject of technology is brutally logical,
                semantically objective, and ruled by perfect and correct test cases...read more
              </p>
            </a>
          </div>
          <p className="readmore">READ MORE ARTICLES</p>
          <hr />
        </section>
      </div>

      <section id="contact-me" className="contact-me-container">
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
              <Link to="/#about_me">About</Link>
            </li>
            <li>
              <Link to="/#my_works">Portfolio</Link>
            </li>
            <li>
              <Link to="#contact_me">Contact</Link>
            </li>
            <li>
              <Link to="https://medium.com/@solarmails2">Blog</Link>
            </li>
          </ul>
        </nav>
      </section>

      <div id="footer" className="footer-container">
        <div className="intro-container">
          <section className="intro">
            <div className="my_location">
              <p>
                <RiMapPin2Line />
                Imo, Nigeria
              </p>
              <h2>Chukwuma Mosanya, </h2>
              <h1>Software Engineer</h1>
            </div>
          </section>
          <div className="res-mail">
            <DownloadPDF className="pfd" />
          </div>
        </div>

        <section>
          <div className="footer">
            <div className="social-icons-container">
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
          <div><hr /></div>

          <div className="copyright">
            {' '}
            <div><p><FontAwesomeIcon className="custom-icon" icon={faCopyright} /></p></div>
            <div><p>CHUKWUMA PAUL MOSANYA, 2023</p></div>

          </div>
        </section>
      </div>

      {/* <Intro />
    <MyWorks />
    <AboutMe />
    <ContactMe /> */}
    </div>
  );
};
export default HomePage;
