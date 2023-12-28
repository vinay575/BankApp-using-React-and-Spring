import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from '../components/content/Header.js';
import Statement from '../components/content/Statement.js'; 
import Home from '../components/content/home.js'; 
import About from '../components/content/about.js'; 
import SignUp from '../components/log-sup/Sign_up'; 
import Login from '../components/log-sup/login.js'; // Import the Login component
import Contact from '../components/content/contact.js';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/statement" element={<Statement />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
