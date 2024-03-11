// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Booking from './Components/Booking';
import Confirmation from './Components/Confirmation';
import Login from './Components/Login'; // Import the Login component
import Signup from './Components/Signup'; // Import the Signup component
import './Nav.css'
import './App.css'
import './Home.css'
import './Booking.css'
import './Confirmation.css'
import './Login.css'
import './Signup.css'

// import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          
          <ul>
            <li>
              AKTRAVELS
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/booking">Booking</Link>
            </li>
            <li>
              <Link to="/confirmation">Confirmation</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>

      

        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

