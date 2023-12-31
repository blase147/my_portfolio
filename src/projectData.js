import {
  FaHtml5, FaJs, FaReact, FaSass, FaGem,
  FaCss3,
} from 'react-icons/fa';

const data = [
  {
    id: 1,
    title: 'Luxury Cars Lending',
    description: 'This is a car rental application where users are allowed to signup to book luxury cars for rental or test drive at a given price.',
    lang: [
      { id: 'html', icon: <FaHtml5 size={30} />, name: 'HTML' },
      { id: 'css3', icon: <FaCss3 size={30} />, name: 'CSS3' },
      { id: 'react', icon: <FaReact size={30} />, name: 'React' },
      { id: 'sass', icon: <FaSass size={30} />, name: 'SASS' },
      { id: 'ruby', icon: <FaGem size={30} />, name: 'Ruby' },
    ],
    image: './luxury-cars-lending.png',
    live: 'https://luxury-cars-lending-frontend.onrender.com/',
    source: 'https://github.com/blase147/luxury-cars-frontend',
  },

  {
    id: 2,
    title: 'Budget app',
    description: 'This is a mobile web application that allows users to manage their budget, introduce new groups/expenses while keeping track of money spent.',
    lang: [
      { id: 'javascript', icon: <FaJs size={30} />, name: 'JavaScript' },
      { id: 'ruby', icon: <FaGem size={30} />, name: 'Ruby' },
    ],
    image: './budget-app.JPG',
    live: 'https://budget-app-v998.onrender.com',
    source: 'https://github.com/blase147/budget_app/',
  },

  {
    id: 3,
    title: 'Space Travellers Hub',
    description: 'This project is a web application for booking commercial and scientific space travel services.',
    lang: [
      { id: 'html', icon: <FaHtml5 size={30} />, name: 'HTML' },
      { id: 'css3', icon: <FaCss3 size={30} />, name: 'CSS3' },
      { id: 'react', icon: <FaReact size={30} />, name: 'React' },
      { id: 'javascript', icon: <FaJs size={30} />, name: 'JavaScript' },
    ],
    image: './space-travellers-hub.JPG',
    live: 'https://space-travellers-hub-dffj.onrender.com',
    source: 'https://github.com/blase147/space-travellers-hub',
  },

  {
    id: 4,
    title: 'Portfolio Website',
    description: 'This is my portfolio Website designed to showcase my talent and skills as a software engineer.',
    lang: [
      { id: 'html', icon: <FaHtml5 size={30} />, name: 'HTML' },
      { id: 'react', icon: <FaReact size={30} />, name: 'React' },
      { id: 'javascript', icon: <FaJs size={30} />, name: 'JavaScript' },
      { id: 'sass', icon: <FaSass size={30} />, name: 'SASS' },
    ],
    image: './my-portfolio.JPG',
    live: 'https://my-portfolio-ghve.onrender.com',
    source: 'https://github.com/blase147/my_portfolio',
  },

  {
    id: 5,
    title: 'Covid-19 Updater',
    description: 'This application displays Covid-19 updates(statistical data) for all continents in the world through filtered search by continent.',
    lang: [
      { id: 'html', icon: <FaHtml5 size={30} />, name: 'HTML' },
      { id: 'react', icon: <FaReact size={30} />, name: 'React' },
      { id: 'javascript', icon: <FaJs size={30} />, name: 'JavaScript' },
    ],
    image: './covid-19-updater.JPG',
    live: 'https://covid-19-updater.onrender.com/',
    source: 'https://github.com/blase147/covid-19-updater',
  },

  {
    id: 6,
    title: 'Recipe App',
    description: 'This is a Recipe App that keeps track of all recipes and ingredients. It can be used for saving ingredients, keeping track of what you have in your bucket list.',
    lang: [
      { id: 'ruby', icon: <FaGem size={30} />, name: 'Ruby' },
    ],
    image: './recipe-app.JPG',
    live: 'https://recipe-app2-0mzt.onrender.com/',
    source: 'https://github.com/blase147/recipe-app',
  },
];
export default data; // export default data;
