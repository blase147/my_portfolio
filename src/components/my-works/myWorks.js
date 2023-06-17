import React from 'react';
import './myWorks.scss';
// import { FaWhmcs } from 'react-icons/fa6';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import data from '../../projectData';

const MyWorks = () => (
  <section className="my-works">
    <FontAwesomeIcon className="custom-icon" icon={faMedal} />
    <div><h1 className="projects-title">Projects</h1></div>
    <div className="project-container">
      {data.map((item) => (
        <div key={item.id} className="item-card">
          <img src={item.image} alt="Project Screenshot" />

          <div className="text-content">
            <h2>{item.title}</h2>
            <p className="desc">{item.description}</p>
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
      ))}
    </div>
  </section>

);

export default MyWorks;
