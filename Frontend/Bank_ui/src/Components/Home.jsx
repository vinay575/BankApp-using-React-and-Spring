import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Home = () => {
  const [userDetails, setUserDetails] = useState({
    userId: '',
    username: '',
    password: '',
    phoneNumber: '',
    email: '',
    address: '',
    bankAccounts: []
  });

  useEffect(() => {
    Axios.get('http://localhost:8080/user/getLoggedInUserWithAccounts/' + localStorage.getItem('username'))
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
      <h3>Your Bank Accounts:</h3>
      <ul>
        {userDetails.bankAccounts.map(account => (
          <li key={account.accountId}>
            Account ID: {account.accountId}, Bank: {account.bankName}, Balance: {account.currentBalance}
          </li>
        ))}
      </ul>
      <Link to="/add-bank-account">Add Bank Account</Link>
    </div>
  );
};

export default Home;
