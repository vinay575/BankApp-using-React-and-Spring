import React, { useState } from 'react';
import './log-sup.css'; 


const Sign_up = () => {
  const [data, setData] = useState({
    Username: '',
    email: '',
    password: '',
    ConformPassword: '',
  });

  const { Username, email, password, ConformPassword } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);

  // Basic form validation
  if (!Username.trim() || !email.trim() || !password.trim() || !ConformPassword.trim()) {
    alert('All fields are required');
    return;
  }

  // Email format validation
  if (!isValidEmail(email)) {
    alert('Invalid email format');
    return;
  }

  // Password strength validation (minimum 8 characters, at least one uppercase letter, one lowercase letter, and one digit)
  if (!isValidPassword(password)) {
    alert('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit');
    return;
  }

  // Check if passwords match
  if (password !== ConformPassword) {
    alert('Passwords do not match');
    return;
  }

  // If all validations pass, you can proceed with form submission 
  console.log('Form submitted:', data);

  // Reset form fields after successful submission
  setData({
    Username: '',
    email: '',
    password: '',
    ConformPassword: '',
  });
};

//to check email validation
const isValidEmail = (email) => {
 return email.includes('@') && email.includes('.');
};

//to check password validation  
//Minimum length of 8 characters.
//Contains at least one lowercase letter.
//Contains at least one uppercase letter.
//Contains at least one digit.
// && logic and all should be true
const isValidPassword = (password) => {
  return password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password);
};

  return (
    <div className='body'>
      <div className='container'>
        <div className='header'>
          <h2>Register Here</h2>
        </div>
        <form action='' className='form' id='form' onSubmit={submitHandler}>
          <div className='field'>
            <label>Username</label>
            <input type='text' placeholder='Username' name='Username' value={Username} onChange={changeHandler} id='uname' />
          </div>

          <div className='field'>
            <label>E-mail</label>
            <input type='email' placeholder='abcdefg@com' name='email' value={email} onChange={changeHandler} id='email' />
          </div>

          <div className='field'>
            <label>Password</label>
            <input type='password' placeholder='password'  name='password'  value={password}  onChange={changeHandler}  id='password' /> 
          </div>

          <div className='field'>
            <label>Confirm Password</label>
            <input type='password' placeholder='Confirm-password' name='ConformPassword' value={ConformPassword} onChange={changeHandler} id='confirmPassword'/>
          </div>

          <div className='field'>
            <input type='checkbox' id='tc' className='terms' />
            <label htmlFor='tc'>I Agree To Terms And Conditions</label>
          </div>

          <input type='submit' className='button' name='submit' />
        </form>
      </div>
    </div>
  );
};

export default Sign_up;
