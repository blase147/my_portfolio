import { FaHtml5, FaBootstrap, FaGem } from 'react-icons/fa';

const data = [
  {
    id: 1,
    title: 'Luxury Cars Lending',
    description: 'This is a car rental applicaton were users are allowed to signup to book luxury cars for rental or test drive at a given price',
    lang: [<FaHtml5 key="html" size={30} />, <FaBootstrap key="bootstrap" size={30} />, <FaGem key="ruby" size={30} />],
    image: '../public/luxury-cars-lending.png',
    live: 'https://luxury-cars-lending-frontend.onrender.com/',
    source: 'https://github.com/blase147/luxury-cars-frontend',
  },

  {
    id: 2,
    title: 'Budget app',
    description: 'This is a mobile web application that allows users to manage their budget, introduce new groups/expenses while keeping track of money spent..',
    lang: [<FaHtml5 key="html" size={30} />, <FaBootstrap key="bootstrap" size={30} />, <FaGem key="ruby" size={30} />],
    image: '../public/budget-app.jpg',
    live: 'https://budget-app-5uzz.onrender.com/',
    source: 'https://github.com/blase147/budget_app/',
  },

  {
    id: 3,
    title: 'Space Travellers Hub',
    description: 'This project is a web application for booking commercial and scientific space travel services.',
    lang: [<FaHtml5 key="html" size={30} />, <FaBootstrap key="bootstrap" size={30} />, <FaGem key="ruby" size={30} />],
    image: '../public/space-travellers-hub.JPG',
    live: 'https://blase147.github.io/space-travellers-hub/',
    source: 'https://github.com/blase147/space-travellers-hub',
  },

  {
    id: 4,
    title: 'Portfolio Website',
    description: 'This is my portfolio Website designed to showcase my talent and skills as a software engineer',
    lang: [<FaHtml5 key="html" size={30} />, <FaBootstrap key="bootstrap" size={30} />, <FaGem key="ruby" size={30} />],
    image: '../public/my-portfolio.JPG',
    live: 'https://my-portfolio-ghve.onrender.com',
    source: 'https://github.com/blase147/my_portfolio',
  },

  {
    id: 5,
    title: 'Covid-19 Updater',
    description: 'This application displays Covid-19 updates(statistical data) for all continents in the world through filtered search by continent',
    lang: [<FaHtml5 key="html" size={30} />, <FaBootstrap key="bootstrap" size={30} />, <FaGem key="ruby" size={30} />],
    image: '../public/covid-19-updater.JPG',
    live: 'https://covid-19-updater-app.netlify.app/',
    source: 'https://github.com/blase147/covid-19-updater',
  },

  {
    id: 6,
    title: 'Recipe App',
    description: 'This is a Recipe App that keeps track of all recipes and ingredients. It can be used for saving ingredients, keeping track of what you have in your bucket list.',
    lang: [<FaHtml5 key="html" size={30} />, <FaBootstrap key="bootstrap" size={30} />, <FaGem key="ruby" size={30} />],
    image: '../public/recipe-app.jpg',
    live: 'https://recipe-ruby.onrender.com/',
    source: 'https://github.com/blase147/recipe-app',
  },
];
export default data; // export default data;
