import React from 'react';
import './myWorks.scss';
import data from '../../projectData';
// import NavigationBar from '../navigation-bar/navigationBar';

const MyWorks = () => (
  <section className="my-works">
    <div><h1 className="projects-title">Projects</h1></div>
    <div className="project-container">
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <ul>
            {item.lang.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
          <img src={item.image} alt="Project Screenshot" />
          <div>
            <a href={item.live} target="_blank" rel="noreferrer">
              Live Demo
            </a>
            <a href={item.source} target="_blank" rel="noreferrer">
              Source Code
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>

);

export default MyWorks;
