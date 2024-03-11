// Confirmation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Confirmation = () => {
  return (
    <div>
      <h1>Booking Confirmation</h1>
      <p>Your bus ticket has been booked successfully!</p>
      {/* Display booking details */}
      <div>
        <strong>Departure:</strong> City A<br />
        <strong>Destination:</strong> City B<br />
        {/* Additional details */}
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Confirmation;
