import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const SendMoney = () => {
    const { selectedAccount } = useParams();
    const [recipientAccount, setRecipientAccount] = useState('');
    const [amount, setAmount] = useState('');
    const navigate = useNavigate();

    const handleSendMoney = () => {
        Axios.post(`http://localhost:8080/user/sendMoney/${selectedAccount}`, { recipientAccount, amount })
            .then(response => {
                window.alert('Money sent successfully!');
                navigate('/hOmEpAgE');
                // You can add further logic here, such as updating UI or showing a success message
            })
            .catch(error => {
                console.error('Error sending money:', error);
                // Handle errors as per your application requirements
            });
    };

    return (


        <div  className="addaccount-body " >
        <div className="container-lg-10 addaccount-container">
        <div className="row">
        <div>
               <div className="header text-center"><h2>Send Money</h2></div>
               <form  className="form" >
                <div className="field">
                <label>Recipient Account:</label>
                <input type="text" value={recipientAccount} onChange={e => setRecipientAccount(e.target.value)} required />
                </div>
            
             <div className="field">
                <label>Amount:</label>
                <input type="text" value={amount} onChange={e => setAmount(e.target.value)} required />
            </div>
            <button onClick={handleSendMoney} className="btn btn-primary">Send Money</button>
            </form>
        </div>
        </div>
        </div>
        </div>
    );
};

export default SendMoney;
