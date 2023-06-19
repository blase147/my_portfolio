import { FaHtml5, FaBootstrap, FaGem } from 'react-icons/fa';

const data = [
  {
    id: 1,
    title: 'Luxury Cars Lending',
    description: 'Luxury cars lending is an implemention of a connection between Ruby on Rails back-end and React front-end. Luxury-cars-backend handles the backend API, and Luxury-cars-frontend handles the frontend UI to display Luxury cars for rent, my reservations when logged in, add cars and delete cars navigations on the homepage..',
    lang: [<FaHtml5 key="html" size={30} />, <FaBootstrap key="bootstrap" size={30} />, <FaGem key="ruby" size={30} />],
    image: '../assets/images/luxury-cars-lending.png',
    live: 'https://luxury-cars-lending-frontend.onrender.com/',
    source: 'https://github.com/blase147/luxury-cars-frontend',
  },

  {
    id: 2,
    title: 'Budget app',
    description: 'This is a mobile web application that allows users to manage their budget. User can see a list of expenses associated with a group and total amount. It also allows users to introduce new groups/expenses an keep a track of money spent..',
    lang: [<FaHtml5 key="html" size={30} />, <FaBootstrap key="bootstrap" size={30} />, <FaGem key="ruby" size={30} />],
    image: '../assets/images/budget-app.jpg',
    live: 'https://budget-app-5uzz.onrender.com/',
    source: 'https://github.com/blase147/budget_app/',
  },

  {
    id: 3,
    title: 'Space Travellers Hub',
    description: 'This project is a web application for a company that provides commercial and scientific space travel services, that allows you to: Book rockets and cancel reservations. Join selected space missions and leave them.',
    lang: [<FaHtml5 key="html" size={30} />, <FaBootstrap key="bootstrap" size={30} />, <FaGem key="ruby" size={30} />],
    image: '../assets/images/space-travellers-hub.jpg',
    live: 'https://blase147.github.io/space-travellers-hub/',
    source: 'https://github.com/blase147/space-travellers-hub',
  },

  {
    id: 4,
    title: 'Portfolio Website',
    description: 'This is a portfolio Website designed to showcase the talent and skills of a software engineer through dynamic display of completed projects and jobs. It also has a contact form for quick responses and feedback',
    lang: [<FaHtml5 key="html" size={30} />, <FaBootstrap key="bootstrap" size={30} />, <FaGem key="ruby" size={30} />],
    image: '../assets/images/my-portfolio.jpg',
    live: 'https://my-portfolio-ghve.onrender.com',
    source: 'https://github.com/blase147/my_portfolio',
  },

  {
    id: 5,
    title: 'Covid-19 Updater',
    description: 'This application displays Covid-19 updates(statistical data) for all continents in the world and also allows searching such data by continent',
    lang: [<FaHtml5 key="html" size={30} />, <FaBootstrap key="bootstrap" size={30} />, <FaGem key="ruby" size={30} />],
    image: '../assets/images/covid-19-updater.jpg',
    live: 'https://covid-19-updater-app.netlify.app/',
    source: 'https://github.com/blase147/covid-19-updater',
  },

  {
    id: 6,
    title: 'Recipe App',
    description: 'This Recipe App keeps track of all your recipes and ingredients. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe.',
    lang: [<FaHtml5 key="html" size={30} />, <FaBootstrap key="bootstrap" size={30} />, <FaGem key="ruby" size={30} />],
    image: '../assets/images/recipe-app.jpg',
    live: 'https://recipe-ruby.onrender.com/',
    source: 'https://github.com/blase147/recipe-app',
  },
];
export default data; // export default data;
