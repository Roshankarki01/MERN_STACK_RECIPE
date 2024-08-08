import React, { useState } from 'react';
import "./nav.css";

function Login() {
  const [G_mail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/login', { // Replace with your backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          G_mail,
          password,
        }),
      });

      const data = await response.text(); // Assuming the backend sends a plain text response

      if (response.ok) {
        setMessage(data); // "You are welcome"
      } else {
        setMessage('Error: ' + data); // "Incorrect Gmail or password"
      }
    } catch (error) {
      setMessage('Error logging in');
    }
  };

  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Gmail" value={G_mail} onChange={(e) => setGmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Log In</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
