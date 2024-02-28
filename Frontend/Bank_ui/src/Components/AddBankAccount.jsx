import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import Axios from 'axios';

const AddBankAccount = () => {
  const navigate = useNavigate(); // Use useNavigate hook instead of useHistory
  const userId = localStorage.getItem('userId');

  const [newBankAccount, setNewBankAccount] = useState({
    bankAccountNumber: '',
    bankName: '',
    ifscCode: '',
    accountType: '',
    currentBalance: 0
  });

  const addBankAccount = () => {
    Axios.post('http://localhost:8080/user/addaccount', {
      ...newBankAccount,
      user: { userId: userId }
    })
      .then(() => {
        alert('Bank account successfully created!');
        navigate('/hOmEpAgE'); // Use navigate function to navigate to the home page
      })
      .catch((error) => {
        console.error('Error adding bank account:', error);
      });
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBankAccount(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h2>Add Bank Account</h2>
      <form onSubmit={(e) => { e.preventDefault(); addBankAccount(); }}>
        <label>
          Bank Account Number:
          <input type="text" name="bankAccountNumber" value={newBankAccount.bankAccountNumber} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Bank Name:
          <input type="text" name="bankName" value={newBankAccount.bankName} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          IFSC Code:
          <input type="text" name="ifscCode" value={newBankAccount.ifscCode} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Account Type:
          <input type="text" name="accountType" value={newBankAccount.accountType} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Current Balance:
          <input type="number" name="currentBalance" value={newBankAccount.currentBalance} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Add Bank Account</button>
      </form>
    </div>
  );
};

export default AddBankAccount;
