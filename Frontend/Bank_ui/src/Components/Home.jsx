import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Home = () => {
  const [userDetails, setUserDetails] = useState({
    userId: '',
    username: '',
    password: '',
    phoneNumber: '',
    email: '',
    address: ''
  });

  useEffect(() => {
    // Fetch user details from the backend upon component mount
    Axios.get('http://localhost:8080/user/get/' + localStorage.getItem('username'))
      .then((res) => {
        setUserDetails(res.data);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, []);

  return (
    <div>
      <h2>Welcome, {userDetails.username}!</h2>
      <p>Here are your details:</p>
      <ul>
        <li>User ID: {userDetails.userId}</li>
        <li>Username: {userDetails.username}</li>
        <li>Phone Number: {userDetails.phoneNumber}</li>
        <li>Email: {userDetails.email}</li>
        <li>Address: {userDetails.address}</li>
      </ul>
    </div>
  );
};

export default Home;