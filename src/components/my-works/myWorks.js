import React from 'react';
import './myWorks.scss';
import data from '../../projectData';
// import NavigationBar from '../navigation-bar/navigationBar';

const MyWorks = () => (
  <section className="my-works">
    <div className="my-recent-works-title">
      <div className="title"><h1>My Recent Works</h1></div>
      <div className="rule"><hr /></div>
    </div>
    <div className="my-recent-works">
      <div className="featured-image"><img src="../../main photo.jpg" alt="icon-2" /></div>
      <div className="multi-post-stories">
        <h2>Multi-Post Stories</h2>
        <p>
          A daily selection of privately personalized reads; no accounts or sign-ups required,
          has been the industrys standard dummy text ever since the 1500s, when an unknown
          printer took a standard dummy text.
        </p>
        <ul>
          <li className="li">css</li>
          <li className="li">html</li>
          <li className="li">bootstrap</li>
          <li className="li">Ruby</li>
        </ul>
        <button className="btn-sp" type="button">See Project</button>
      </div>
    </div>
    <div className="project-container">
      {
      data.map((project) => (
        <div className="project-card" key={project.id}>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <p className="lang">{project.lang}</p>
          <p>{project.image}</p>
          <p>{project.live}</p>
          <p>{project.source}</p>
        </div>
      ))
      }
    </div>
  </section>

);

export default MyWorks;
