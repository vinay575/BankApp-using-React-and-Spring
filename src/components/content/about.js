// TransferPage.jsx

import React, { useState } from 'react';
import './TransferPage.css'; // Import CSS file for styling

const TransferPage = () => {
  const [transferData, setTransferData] = useState({
    targetAccount: '',
    amount: '',
    transactionType: 'Transfer',
    reference: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTransferData((prevTransferData) => ({
      ...prevTransferData,
      [name]: value,
    }));
  };

  const handleTransfer = () => {
    // Add your logic to handle the transfer
    console.log('Transfer initiated:', transferData);
    // Reset the form
    setTransferData({
      targetAccount: '',
      amount: '',
      transactionType: 'Transfer',
      reference: '',
    });
  };

  return (
    <div className="transfer-container">
      <h1>Transfer Money</h1>
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Target Account:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="targetAccount"
                  value={transferData.targetAccount}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Amount:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="amount"
                  value={transferData.amount}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Transaction Type:</label>
              </td>
              <td>
                <select
                  name="transactionType"
                  value={transferData.transactionType}
                  onChange={handleInputChange}
                >
                  <option value="Transfer">Transfer</option>
                  <option value="Bill Payment">Bill Payment</option>
                  {/* Add more options as needed */}
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label>Reference:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="reference"
                  value={transferData.reference}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <button type="button" onClick={handleTransfer}>
          Transfer
        </button>
      </form>
    </div>
  );
};

export default TransferPage;
