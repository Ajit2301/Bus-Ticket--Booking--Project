// Signup.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <h1>Create an Account</h1>
      <form>
        {/* Your signup form fields go here */}
        <label>
          Full Name:
          <input type="text" name="fullName" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        {/* Additional form fields */}
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Log in here</Link></p>
    </div>
  );
};

export default Signup;
