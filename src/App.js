// eslint-disable-next-line import/no-extraneous-dependencies
import {
  BrowserRouter as Router, Routes, Route, Outlet,
} from 'react-router-dom';
import MyWorks from './components/my-works/myWorks';
import AboutMe from './components/about-me/aboutMe';
import ContactMe from './components/contact-me/contactMe';
import NavigationBar from './components/navigation-bar/navigationBar';
import './App.css';
import HomePage from './components/Homepage/homepage';

const NavigationLayout = () => (
  <>
    <NavigationBar />
    <Outlet />
  </>
);

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<NavigationLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/my_works" element={<MyWorks />} />
            <Route path="/about_me" element={<AboutMe />} />
            <Route path="/contact_me" element={<ContactMe />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
