import React, { useState } from 'react';
import './log-sup.css';

const Login = () => {
    const [loginData, setLoginData] = useState({
      usernameOrEmail: '',
      password: '',
    });
  
    const { usernameOrEmail, password } = loginData;
  
    const changeLoginHandler = (e) => {
      setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };
  
    const submitLoginHandler = (e) => {
      e.preventDefault();
      console.log(loginData);
  
      // Basic form validation
      if (!usernameOrEmail.trim() || !password.trim()) {
        alert('All fields are required');
        return;
      }
  
      // You can add additional login validations here
  
      console.log('Login submitted:', loginData);
  
      // Reset form fields after successful login
      setLoginData({
        usernameOrEmail: '',
        password: '',
      });
    };
  
    return (
      <div className='body'>
        <div className='container'>
          <div className='header'>
            <h2>Login</h2>
          </div>
          <form action='' className='form' id='loginForm' onSubmit={submitLoginHandler}>
            <div className='field'>
              <label>Username or Email</label>
              <input
                type='text'
                placeholder='Username or Email'
                name='usernameOrEmail'
                value={usernameOrEmail}
                onChange={changeLoginHandler}
                id='usernameOrEmail'
              />
            </div>
  
            <div className='field'>
              <label>Password</label>
              <input
                type='password'
                placeholder='password'
                name='password'
                value={password}
                onChange={changeLoginHandler}
                id='loginPassword'
              />
            </div>
  
            <input type='submit' className='button' name='loginSubmit' value='Login' />
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;
  