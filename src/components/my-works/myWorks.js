import React from 'react';
import './myWorks.scss';
import data from '../../projectData';
// import NavigationBar from '../navigation-bar/navigationBar';

const MyWorks = () => (
  <section className="my-works">
    <div className="my-recent-works-title">
      <div><h1>My Recent Works</h1></div>
      <div><hr /></div>
    </div>
    <div className="my-recent-works">
      <img className="featured-image" src="img/Img-Placeholder.jpg" alt="icon" />
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
    {
      data.map((project) => (
        <div className="project-card" key={project.id}>
          <h1>{project.title}</h1>
          <div>{project.description}</div>
          <p>{project.lang}</p>
          <p>{project.image}</p>
          <p>{project.live}</p>
          <p>{project.source}</p>
        </div>
      ))
    }
  </section>

);

export default MyWorks;
