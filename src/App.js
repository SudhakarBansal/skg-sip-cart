import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
// import Layout from './components/Layout/Layout';
// import HomePage from './components/Pages/HomePage';
// import AboutPage from './components/Pages/AboutPage';
// import ContactUs from './components/Pages/ContactUs';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <h1>This site is under Developement</h1>
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes> */}
    </Router>
  );
}

export default App;
