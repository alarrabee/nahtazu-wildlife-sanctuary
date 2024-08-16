import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import AuthService from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      if (data?.login?.token) {
        AuthService.login(data.login.token);
      }
    } catch (e) {
      console.error('Login failed:', e);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formState.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formState.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
      {error && (
        <div>Error: {error.message}</div>
      )}
    </form>
  );
};

export default Login;
