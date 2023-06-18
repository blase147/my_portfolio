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
import Footer from './components/footer/footer';

const NavigationLayout = () => (
  <>
    <NavigationBar />
    <Outlet />
    <Footer />
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
            <Route url="https://medium.com/@solarmails2" />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
