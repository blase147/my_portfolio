import React from 'react';
import './homePage.scss';
import ContactMe from '../contact-me/contactMe';
import MyWorks from '../my-works/myWorks';
import AboutMe from '../about-me/aboutMe';
import Intro from './intro';

const HomePage = () => (
  <div className="homepage">
    <Intro />
    <MyWorks />
    <AboutMe />
    <ContactMe />
  </div>
);
export default HomePage;
