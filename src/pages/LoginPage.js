import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      login({ username: 'admin', role: 'admin' });
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="w-full max-w-md p-8 mx-auto shadow-2xl bg-secondary bg-opacity-50 backdrop-blur-md rounded-xl">
        <h2 className="mb-8 text-3xl font-extrabold text-center text-text-primary">
          Welcome Back!
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="block mb-2 text-sm font-semibold text-text-primary">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border rounded-lg bg-primary bg-opacity-50 text-text-primary border-accent focus:outline-none focus:ring-2 focus:ring-highlight"
              placeholder="admin"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-semibold text-text-primary">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg bg-primary bg-opacity-50 text-text-primary border-accent focus:outline-none focus:ring-2 focus:ring-highlight"
              placeholder="admin"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 font-semibold transition duration-300 rounded-lg bg-highlight text-primary hover:bg-opacity-80"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-text-primary">
          Don't have an account?{' '}
          <span className="font-medium text-highlight hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

