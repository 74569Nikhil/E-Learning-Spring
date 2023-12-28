import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Signup.css';
import backgroundVideo from '../video/signup.mp4';

function Signup() {
  return (
    <div>
      <video autoPlay muted loop id="myVideo">
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <form className='mt-5'>
        <h2 id="user">User Form</h2>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
        />
        <br />

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
        />
        <br />

        <label htmlFor="contactNo">Contact Number:</label>
        <input
          type="text"
          id="contactNo"
          name="contactNo"
          required
        />
        <br />

        <label htmlFor="address">Address:</label>
        <br />
        <textarea
          id="address"
          name="address"
          required
        />
        <br />

        <p>
          Already have an account? <Link to="/login">Login here</Link>.
        </p>
      </form>
    </div>
  );
}

export default Signup;
