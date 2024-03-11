// Booking.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 // Include your styles

const Booking = () => {
  const [passengerName, setPassengerName] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');

  const handleBooking = () => {
    // Add your booking logic here
    // For simplicity, just logging the details for now
    console.log('Booking Details:', {
      passengerName,
      departureCity,
      arrivalCity,
      departureDate,
    });
  };

  return (
    <div className="booking-container">
      <h1>Book Your Bus Ticket</h1>

      <form>
        <label>
          Passenger Name:
          <input
            type="text"
            value={passengerName}
            onChange={(e) => setPassengerName(e.target.value)}
          />
        </label>

        <label>
          Departure City:
          <input
            type="text"
            value={departureCity}
            onChange={(e) => setDepartureCity(e.target.value)}
          />
        </label>

        <label>
          Arrival City:
          <input
            type="text"
            value={arrivalCity}
            onChange={(e) => setArrivalCity(e.target.value)}
          />
        </label>

        <label>
          Departure Date:
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </label>

        <button type="button" onClick={handleBooking}>
          Book Now
        </button>
      </form>

      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
};

export default Booking;
