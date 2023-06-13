import React from 'react';
import './homePage.scss';
import ContactMe from '../contact-me/contactMe';
import MyWorks from '../my-works/myWorks';
import Footer from '../footer/footer';
import Intro from './intro';

const HomePage = () => (
  <div className="homepage">
    <Intro />
    <MyWorks />
    <ContactMe />
    <Footer />
  </div>
);
export default HomePage;
