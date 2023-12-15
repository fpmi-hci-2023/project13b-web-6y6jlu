import React, { useState } from 'react';

const Home: React.FC = () => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');

 const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
 };

 return (
    <div>
      <h1>Welcome back</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Login
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Log in</button>
        <button type="submit">Sign up</button>
      </form>
      <p>Tip: Don't read books in moving vehicles</p>
    </div>
 );
};