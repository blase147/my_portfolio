/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import './homePage.scss';
import '../about-me/aboutMe.scss';
import '../contact-me/contactMe.scss';
import '../my-works/myWorks.scss';
import '../footer/footer.scss';
// import { Link } from 'react-router-dom';
import {
  FaGithub, FaLinkedin,
  FaAngellist, FaTwitter, FaFacebook, FaHtml5, FaJs, FaReact, FaNodeJs, FaSass, FaBootstrap,
  FaNpm, FaAws, FaFigma, FaCss3, FaGit,
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
          {windowWidth > 767 && (
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
              Certified Full-Stack Software Engineer trained to
              help startups and companies of scale build and maintain
              efficient and customer centric web & desktop applications.
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
                  Hi there, I would like to tell you a little about myself.
                  I am a Nigerian born software developer. So far, it has
                  been a little over 10 years I made a critical career switch
                  from paramedic to techy. First it all started as a passion
                  for computers and the very many amazing things one can do
                  with them. The wonder of technology ranging from the
                  possibility of automated and intelligent systems to the
                  nitty-gritty of how technology works all its wonders drew
                  me nearer and farther from biological sciences. I remember
                  during my college days in the biological sciences department,
                  I was labelled nerdy, the computer Wizkid of my faculty.
                  Then came the speculated irony that I was practically in the
                  wrong discipline. However, I did my studies well and graduated
                  well but without that fulfilment that comes with graduating
                  into your first degree, so while my peers where landing jobs
                  as college lecturers and others obtained academics grants,
                  I wallowed in job hunting as a graduate paramedic. However,
                  it was interestingly funny that my out-of-school tech skills
                  paid my bills. Without the necessity of college certification,
                  I worked in a couple organizations as an IT Manager, IT
                  support and IT instructor. And then along the line, I met a
                  few senior developers, in the industry and quickly the need
                  to advance my skill to a professional level arose. consequently,
                  I enrolled into Austin Peay State University USA, for a diploma
                  in Coding and Technology, subsequently I got admitted into
                  Microverse an online software engineering institution where
                  I did a one-year course in software engineering and mastered
                  the rubrics of machine language, agile methodologies and remote
                  pair programming. From Microverse I got certified in HTML5,
                  CSS3, JavaScript, Bootstrap, React/Redux, Ruby and Rails as
                  my primary stack. In the last three years I have built a number
                  of apps from budgeting app in React, to APIs in JavaScript
                  to blogs in Rails and a couple more full-stack projects in Rails.
                  During my course work, I studied and used Git, NodeJS, GitHub,
                  Capybara, Rspec, JWT, AWS, Figma and SASS.
                </p>
                <div className="my-tech-stack">
                  <h2>My tech stack</h2>
                  <p>Here are some of the languages and tools I have mastered</p>
                  <ul className="d-list">
                    <li>
                      <FaHtml5 size={30} />
                      HTML5
                    </li>
                    <li>
                      <FaJs size={30} />
                      JavaScript
                    </li>
                    <li>
                      <FaReact size={30} />
                      React
                    </li>
                    <li>
                      <FaBootstrap size={30} />
                      HTML5
                    </li>
                    {/* <li>
                      <FaRuby size={30} />
                      Ruby
                    </li> */}
                    <li>
                      <FaNodeJs size={30} />
                      NodeJs
                    </li>
                    <li>
                      <FaSass size={30} />
                      SASS
                    </li>
                    <li>
                      <FaNpm size={30} />
                      Npm
                    </li>
                    <li>
                      <FaAws size={30} />
                      AWS
                    </li>
                    <li>
                      <FaFigma size={30} />
                      Figma
                    </li>
                    <li>
                      <FaCss3 size={30} />
                      CSS3
                    </li>
                    <li>
                      <FaGit size={30} />
                      Git
                    </li>
                  </ul>
                  {' '}
                  <div className="skillset">
                    <div className="wrapper">
                      <div className="container">
                        <h2>My Skillset</h2>
                        <div className="skills">
                          <div className="details">
                            <span>HTML</span>
                            <span>95%</span>
                          </div>
                          <div className="bar">
                            <div id="html-bar" />
                          </div>
                        </div>
                        <div className="skills">
                          <div className="details">
                            <span>CSS</span>
                            <span>80%</span>
                          </div>
                          <div className="bar">
                            <div id="css-bar" />
                          </div>
                        </div>
                        <div className="skills">
                          <div className="details">
                            <span>SASS</span>
                            <span>75%</span>
                          </div>
                          <div className="bar">
                            <div id="sass-bar" />
                          </div>
                        </div>
                        <div className="skills">
                          <div className="details">
                            <span>Javascript</span>
                            <span>75%</span>
                          </div>
                          <div className="bar">
                            <div id="js-bar" />
                          </div>
                        </div>
                        <div className="skills">
                          <div className="details">
                            <span>React</span>
                            <span>85%</span>
                          </div>
                          <div className="bar">
                            <div id="react-bar" />
                          </div>
                        </div>
                        <div className="skills">
                          <div className="details">
                            <span>Ruby</span>
                            <span>80%</span>
                          </div>
                          <div className="bar">
                            <div id="ruby-bar" />
                          </div>
                        </div>
                        <div className="skills">
                          <div className="details">
                            <span>Rails</span>
                            <span>80%</span>
                          </div>
                          <div className="bar">
                            <div id="rails-bar" />
                          </div>
                        </div>
                        <div className="skills">
                          <div className="details">
                            <span>Video Editing</span>
                            <span>85%</span>
                          </div>
                          <div className="bar">
                            <div id="ve-bar" />
                          </div>
                        </div>
                        <div className="skills">
                          <div className="details">
                            <span>Animation</span>
                            <span>70%</span>
                          </div>
                          <div className="bar">
                            <div id="animation-bar" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                    <a href="https://www.linkedin.com/in/chukwuma-mosanya"><FaLinkedin size={30} alt="social-icon" /></a>
                  </li>
                  <li className="animated-div">
                    <a href="https://wellfound.com/u/chukwuma-mosanya"><FaAngellist size={30} alt="social-icon" /></a>
                  </li>
                  <li className="animated-div">
                    <a href="https://twitter.com/ChukwumaMosanya"><FaTwitter size={30} alt="social-icon" /></a>
                  </li>
                  <li className="animated-div">
                    <a href="https://web.facebook.com/chukwuma.mosanya/"><FaFacebook size={30} alt="social-icons" /></a>
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
        {/* <nav className="footer-nav">
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
        </nav> */}
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
                  <a href="https://www.linkedin.com/in/chukwuma-mosanya"><FaLinkedin size={30} alt="social-icon" /></a>
                </li>
                <li className="animated-div">
                  <a href="https://wellfound.com/u/chukwuma-mosanya"><FaAngellist size={30} alt="social-icon" /></a>
                </li>
                <li className="animated-div">
                  <a href="https://twitter.com/ChukwumaMosanya"><FaTwitter size={30} alt="social-icon" /></a>
                </li>
                <li className="animated-div">
                  <a href="https://web.facebook.com/chukwuma.mosanya/"><FaFacebook size={30} alt="social-icons" /></a>
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
