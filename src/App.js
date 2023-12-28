// App.js

import React from 'react';
import './App.css';
import Home from './Components/Home';
import Navigationbar from './Components/Navigationbar';
import LoginForm from './Components/Login'; // Corrected component name
//import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './Components/AboutUs'
//import FAQ from './components/FAQ';
import Signup from './Components/Signup';
//import Order from './components/order'; // Corrected component name
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Router>
        <Navigationbar />
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<LoginForm />} /> 
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
       
      </Router>
    </>
  );
}

export default App;
