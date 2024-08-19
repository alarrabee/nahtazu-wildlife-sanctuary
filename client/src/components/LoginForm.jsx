import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import AuthService from '../utils/auth';

const formBox ={
  bordeRadius: '5px',
  padding: '20px', 
  backgroundColor: 'light gray'
  
};
const inputForm ={
  width: '100%',
  padding: '12px 20px',
  margin: '8px 0',
  display: 'inline-block',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
}


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
    <div style={formBox}><h2 style={{ fontSize:'5vw'}}>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <label for='email' style={{ fontSize:'3vw'}}>Email </label><br></br>
        <input style={inputForm}
          id='email'
          name="email"
          type="text"
          placeholder="Your Email"
          value={formState.email}
          onChange={handleChange}
          />
          <br></br><br></br>
          <label for='password' style={{ fontSize:'3vw'}}>Password </label><br></br>
        <input style={inputForm}
          id='password'
          name="password"
          type="password"
          placeholder="*****"
          value={formState.password}
          onChange={handleChange}
            /><br></br><br></br>
        <button type="submit" style={{ fontSize:'2vw',  margin:'5px', cursor:'pointer'}}>Submit</button>
          {error && (
          <div>Error: {error.message}</div>
          )}
      </form>
    </div>
  );
};

export default Login;
