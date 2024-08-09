import React, { useState } from 'react';
import "./nav.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with', email, password);
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <img src="/path-to-your-image/logo.png" alt="Logo" className="login-logo" />
      </div>
      <h2>Log In</h2>
      <p>If you don't have an account? <a href="/signup">Sign Up</a></p>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <p className="error-message">Please input the correct password</p>
        <div className="social-login-buttons">
          <button className="google-signin">Sign in with Google</button>
          <button className="google-signin">Sign in with Facebook</button>
          <button className="google-signin">Sign in with Twitter</button>
        </div>
        <button type="submit" className="login-button">Log In</button>
      </form>
    </div>
  );
}

export default Login;
