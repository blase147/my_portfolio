// eslint-disable-next-line import/no-extraneous-dependencies
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';
import HomePage from './components/Homepage/homepage';
import backgroundImage from './images/tech1.png';

// import Footer from './components/footer/footer';

// const NavigationLayout = () => (
//   <>
//     <NavigationBar />
//     <Outlet />
//     <Footer />
//   </>
// );

function App() {
  return (
    <div className="App">
      <div
        key={uuidv4()} // Generate a unique key using uuidv4()
        className="your-component-item"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <Router>
        <Routes>
          {/* <Route element={<NavigationLayout />}> */}
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/my_works" element={<MyWorks />} />
            <Route path="/about_me" element={<AboutMe />} />
            <Route path="/contact_me" element={<ContactMe />} />
            <Route url="https://medium.com/@solarmails2" /> */}
          {/* </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
