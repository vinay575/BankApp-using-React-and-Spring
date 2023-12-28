// StatementPage.jsx

import React from 'react';
import './Statement.css'; // Import CSS file for styling

const StatementPage = () => {
  // Dummy transaction data
  const transactions = [
    {
      txnId: '123456',
      txnDateTime: '2023-01-01T12:00:00',
      txnAmount: '100.00',
      txnType: 'Credit',
      txnStatus: 'Completed',
      sourceAcctId: 'S123',
      targetAcctId: 'T456',
    },
    // Add more transactions as needed
  ];

  return (
    <div className="statement-container">

      {/* Statement Section */}
      <div className="statement">
        <h2>Transaction History</h2>
        <table>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Date and Time</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Status</th>
              <th>Source Account ID</th>
              <th>Target Account ID</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.txnId}>
                <td>{transaction.txnId}</td>
                <td>{transaction.txnDateTime}</td>
                <td>${transaction.txnAmount}</td>
                <td>{transaction.txnType}</td>
                <td>{transaction.txnStatus}</td>
                <td>{transaction.sourceAcctId}</td>
                <td>{transaction.targetAcctId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatementPage;
