import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './main.css'; // Import custom CSS for Home component

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

  const [selectedAccount, setSelectedAccount] = useState(null);

  useEffect(() => {
    Axios.get('http://localhost:8080/user/getLoggedInUserWithAccounts/' + localStorage.getItem('username'))
      .then((res) => {
        setUserDetails(res.data);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, []);

  // Function to handle the selection of the bank account
  const handleAccountSelection = (accountId) => {
    setSelectedAccount(accountId);
  };

  return (
    <div className='home-body'>
    <div className="container home-container">
      <h2 className="text-center">Welcome, {userDetails.username}!</h2>
      <div className="row">
        <div className="col-md-8 " >
          <table className="custom-table user-table ">
            <tbody className="double-border"> {/* Apply double-border class */}
              <tr>
                <th>Username:</th>
                <td>{userDetails.username}</td>
              </tr>
              <tr>
                <th>Phone Number:</th>
                <td>{userDetails.phoneNumber}</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>{userDetails.email}</td>
              </tr>
              <tr>
                <th>Address:</th>
                <td>{userDetails.address}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-12 mt-4 ">
          <h3>Your Bank Accounts</h3>
          <table className="custom-table bank-table table table-striped ">
            <thead className="thead-dark">
              <tr>
                <th>Select</th>
                <th>Bank Account Number</th>
                <th>Bank</th>
                <th>Balance</th>
                <th>IFSC Code</th>
              </tr>
            </thead>
            <tbody>
              {userDetails.bankAccounts.map(account => (
                <tr key={account.accountId}>
                  <td>
                    <input
                      type="radio"
                      name="selectedAccount"
                      value={account.accountId}
                      checked={selectedAccount === account.accountId}
                      onChange={() => handleAccountSelection(account.accountId)}
                    />
                  </td>
                  <td>{account.bankAccountNumber}</td>
                  <td>{account.bankName}</td>
                  <td>{account.currentBalance}</td>
                  <td>{account.ifscCode}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            {selectedAccount && (
              <div>
                <h4>Selected Account: {selectedAccount}</h4>
                {/* Add operations for the selected account here */}
              </div>
            )}
          </div>
          <Link to="/add-bank-account" className="btn btn-primary">Add Bank Account</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
