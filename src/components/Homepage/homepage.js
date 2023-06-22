import React, { useState, useEffect } from 'react';
import './homePage.scss';
import '../about-me/aboutMe.scss';
import '../contact-me/contactMe.scss';
import '../my-works/myWorks.scss';
import '../footer/footer.scss';
// import { Link } from 'react-router-dom';
import {
  FaGithub, FaLinkedin,
  FaAngellist, FaTwitter, FaFacebook,
} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserLarge, faMedal, faEnvelope, faCopyright,
} from '@fortawesome/free-solid-svg-icons';
import { RiMapPin2Line } from 'react-icons/ri';
import data from '../../projectData';
import DownloadPDF from '../../DownloadPDF';
import NavigationBar from '../navigation-bar/navigationBar';

const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="home" className="homepage">
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
            <button className="mailto" type="button">
              <a href="mailto:solarmails2gmail.com" target="_blank" rel="noreferrer">
                solarmails2@gmail.com
              </a>
            </button>
          </div>
        </section>
      </div>

      <section id="my-works" className="my-works">
        <FontAwesomeIcon className="custom-icon" icon={faMedal} />
        <div>
          <h1 className="projects-title">Projects</h1>
        </div>
        <div className="project-container">
          {data.map((item) => (
            <div key={item.id} className="item-card animated-div">
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
                        <li key={language.id}>
                          {language.icon}
                          {language.name}
                        </li>
                      ))}
                    </div>
                  </ul>
                  <div className="view-btns">
                    <button className="animated-div" type="button">
                      <a href={item.live} target="_blank" rel="noreferrer">
                        View Live
                      </a>
                    </button>
                    <button className="animated-div" type="button">
                      <a href={item.source} target="_blank" rel="noreferrer">
                        View on GitHub
                      </a>
                    </button>
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
                {/* <div className="my-tech-stack">
                  <h2>My tech stack</h2>
                  <p>Here are some of the  languages and tools I have mastered</p>
                  <ul className="d-list">
                    <li>
                      <img src="./html.png" alt="html" />
                      HTML5
                    </li>
                    <li>
                      <img src="./javascript.png" alt="javascript" />
                      JavaScript
                    </li>
                    <li><img src="./ruby.png" alt="html" /></li>
                    <li>
                      <img src="./bootstrap.png" alt="bootstrap" />
                      Bootstrap
                    </li>
                    <li>
                      <img src="./ruby-on-rails.png" alt="html" />
                      Rails
                    </li>
                    <li>
                      <img src="./ruby-on-rails.png" alt="html" />
                      GitHub
                    </li>
                    <li>
                      <img src="./ruby-on-rails.png" alt="html" />
                      Git
                    </li>
                    <li>
                      <img src="./ruby-on-rails.png" alt="html" />
                      Rspec
                    </li>
                    <li>
                      <img src="./ruby-on-rails.png" alt="html" />
                      JWT
                    </li>
                    <li>
                      <img src="./ruby-on-rails.png" alt="html" />
                      Capybara
                    </li>
                  </ul>
                </div> */}
                <div className="my-tech-stack">
                  <h2>My tech stack</h2>
                  <p>Here are some of the languages and tools I have mastered</p>
                  <ul className="d-list">
                    <li>
                      <img src="./html.png" alt="html" style={{ filter: 'brightness(0) invert(1)' }} />
                      HTML5
                    </li>
                    <li>
                      <img src="./javascript.png" alt="javascript" style={{ filter: 'brightness(0) invert(1)' }} />
                      JavaScript
                    </li>
                    <li>
                      <img src="./ruby.png" alt="ruby" style={{ filter: 'brightness(0) invert(1)' }} />
                      Ruby
                    </li>
                    <li>
                      <img src="./bootstrap.png" alt="bootstrap" style={{ filter: 'brightness(0) invert(1)' }} />
                      Bootstrap
                    </li>
                    <li>
                      <img src="./rails.png" alt="rails" style={{ filter: 'brightness(0) invert(1)' }} />
                      Rails
                    </li>
                    <li>
                      <img src="./github.png" alt="github" style={{ filter: 'brightness(0) invert(1)' }} />
                      GitHub
                    </li>
                    <li>
                      <img src="./git.png" alt="git" style={{ filter: 'brightness(0) invert(1)' }} />
                      Git
                    </li>
                    <li>
                      <img src="./rspec.png" alt="rspec" style={{ filter: 'brightness(0) invert(1)' }} />
                      Rspec
                    </li>
                    <li>
                      <img src="./jwt.png" alt="jwt" style={{ filter: 'brightness(0) invert(1)' }} />
                      JWT
                    </li>
                    <li>
                      <img src="./capybara.png" alt="capybara" style={{ filter: 'brightness(0) invert(1)' }} />
                      Capybara
                    </li>
                  </ul>
                </div>

              </div>
              <div className="img-profile">
                <img src="./main-photo.jpg" alt="profile" />
                <DownloadPDF className="my-resume" />
                <ul className="social-icons">
                  <li className="animated-div">
                    <a href="https://github.com/blase147"><FaGithub size={30} alt="social-icon" /></a>
                  </li>
                  <li className="animated-div">
                    <a href="www.linkedin.com/in/chukwuma-mosanya-346303"><FaLinkedin size={30} alt="social-icon" /></a>
                  </li>
                  <li className="animated-div">
                    <a href="www.angelist.com"><FaAngellist size={30} alt="social-icon" /></a>
                  </li>
                  <li className="animated-div">
                    <a href="https://twitter.com/ChukwumaMosanya"><FaTwitter size={30} alt="social-icon" /></a>
                  </li>
                  <li className="animated-div">
                    <a href="www.facebook.com"><FaFacebook size={30} alt="social-icons" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </section>
        <section className="blog">
          <div>
            <h1>Blog Posts</h1>
            <h2>Choosing your place in the tech industry</h2>
            <p>
              In choosing a tech career to follow, introspection becomes a key action.
              Basic skills and interests must be well established to gain insight into ones
              capabilities and passion. This will ultimately create a direction for a movement
              whose payload is the development of mastery and professionalization.
              This mastery is paramount as the subject of technology is brutally logical,
              semantically objective, and ruled by perfect and correct test cases...read more
            </p>
          </div>
          <button type="button" className="readmore">
            <a href="https://medium.com/@solarmails2/choosing-your-place-in-the-tech-industry-1356bba0f41d">
              READ MORE ARTICLES
            </a>
          </button>
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
                    <textarea className="animated-div" name="comment" cols="30" rows="10" maxLength="500" placeholder="What do you think about building your next project with me?" required />
                    <span className="message" />
                  </label>
                </div>
                <div>
                  <button className="get-in-touch-btn" type="submit">SEND A MESSAGE</button>
                </div>
              </form>
            </div>
          </fieldset>
        </div>
        <nav className="footer-nav">
          <h3>I teach grade school Info tech too</h3>
          <p>
            You can check them out on
            {' '}
            <a href="https://www.youtube.com/@chukwumamosanya1279/videos">YouTube</a>
          </p>
          <iframe
            title="All-time Best Selling Countertop Blender. Durable, stylistic and rugged"
            width="967"
            height="544"
            src="https://www.youtube.com/embed/Qa3nv4rP73o"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share"
            allowfullscreen
          />
          {' '}
        </nav>
      </section>

      <div id="footer" className="footer-container">
        <div className="outro-container">
          <section className="outro">
            <div className="my_location">
              <p>
                <RiMapPin2Line />
                Imo, Nigeria
              </p>
              <h2>Chukwuma Mosanya, </h2>
              <h1>Software Engineer</h1>
            </div>
          </section>
          <div className="res-mail-footer">
            <DownloadPDF />
            <button className="mailto" type="button">
              <a href="mailto:solarmails2gmail.com" target="_blank" rel="noreferrer">
                solarmails2@gmail.com
              </a>
            </button>
          </div>
        </div>

        <section>
          <div className="footer">
            <div className="social-icons-container">
              <ul className="social-icons">
                <li className="animated-div">
                  <a href="https://github.com/blase147"><FaGithub size={30} alt="social-icon" /></a>
                </li>
                <li className="animated-div">
                  <a href="www.linkedin.com/in/chukwuma-mosanya-346303"><FaLinkedin size={30} alt="social-icon" /></a>
                </li>
                <li className="animated-div">
                  <a href="www.angelist.com"><FaAngellist size={30} alt="social-icon" /></a>
                </li>
                <li className="animated-div">
                  <a href="https://twitter.com/ChukwumaMosanya"><FaTwitter size={30} alt="social-icon" /></a>
                </li>
                <li className="animated-div">
                  <a href="www.facebook.com"><FaFacebook size={30} alt="social-icons" /></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hr"><hr /></div>

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
