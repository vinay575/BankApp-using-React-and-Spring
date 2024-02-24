// Dashboard.jsx

import React, { useState } from 'react';
import './Dashboard.css'; // Import CSS file for styling

const Dashboard = () => {
  // Dummy account data
  const [accountInfo, setAccountInfo] = useState({
    accountId: 'ACCT123',
    accountHolder: 'CH Vinay Bhaskar',
    accountBalance: 5000.00,
    accountType: 'Savings',
  });

  // Deposit functionality
  const handleDeposit = (amount) => {
    setAccountInfo((prevAccountInfo) => ({
      ...prevAccountInfo,
      accountBalance: prevAccountInfo.accountBalance + parseFloat(amount),
    }));
  };

  // Withdraw functionality
  const handleWithdraw = (amount) => {
    setAccountInfo((prevAccountInfo) => ({
      ...prevAccountInfo,
      accountBalance: prevAccountInfo.accountBalance - parseFloat(amount),
    }));
  };

  return (
    <div className="dashboard-container">
      {/* Account Information Section */}
      <div className="account-info">
        <h2>Account Information</h2>
        <table>
          <tbody>
            <tr>
              <td><strong>Account ID:</strong></td>
              <td>{accountInfo.accountId}</td>
            </tr>
            <tr>
              <td><strong>Account Holder:</strong></td>
              <td>{accountInfo.accountHolder}</td>
            </tr>
            <tr>
              <td><strong>Account Balance:</strong></td>
              <td>${accountInfo.accountBalance.toFixed(2)}</td>
            </tr>
            <tr>
              <td><strong>Account Type:</strong></td>
              <td>{accountInfo.accountType}</td>
            </tr>
          </tbody>
        </table>

        {/* Deposit and Withdraw buttons */}
        <div className="transaction-buttons">
          <button className='butto ' onClick={() => handleDeposit(100)}>Deposit $100</button>
          <button className='butto ' onClick={() => handleWithdraw(50)}>Withdraw $50</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
