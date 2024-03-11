// Login.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        {/* Your login form fields go here */}
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        {/* Additional form fields */}
        <button type="submit">Log In</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
    </div>
  );
};

export default Login;
