// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// Include your styles

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Bus Ticket Booking</h1>
      </header>

      <section className="features">
        <div className="feature">
          <h2>Easy Booking</h2>
          <p>Book your bus tickets with a few clicks.</p>
        </div>

        <div className="feature">
          <h2>Comfortable Travel</h2>
          <p>Travel in comfort with our modern buses.</p>
        </div>

        <div className="feature">
          <h2>Secure Payments</h2>
          <p>Secure and reliable payment options.</p>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Book Your Ticket?</h2>
        <Link to="/booking" className="cta-button">Book Now</Link>
      </section>
    </div>
  );
};

export default Home;
