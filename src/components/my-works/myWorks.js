import React from 'react';
import './myWorks.scss';
import data from '../../projectData';
// import NavigationBar from '../navigation-bar/navigationBar';

const MyWorks = () => (
  <section className="my-works">
    <div><h1 className="projects-title">Projects</h1></div>
    <div className="project-container">
      {data.map((item) => (
        <div key={item.id} className="item-card">
          <img src={item.image} alt="Project Screenshot" />

          <div className="text-content">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <ul className="lang">
              <p>Project stack:</p>
              {item.lang.map((language) => (
                <li key={language}>{language}</li>
              ))}
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
      ))}
    </div>
  </section>

);

export default MyWorks;
