import React, { useState } from 'react';
import './contact.css';
import Img from '../../images/romen.jpg'

const YourComponent = () => {
  const [isMessageSent, setMessageSent] = useState(false);

  const handleSubmit = () => {
    // Add your logic for handling form submission here
    // For now, let's just set the message sent state to true
    setMessageSent(true);
  };

  return (
    <>
      <div id='back'>
      <div id="tc" className="title-containe">
        <h1 id='h1'>Contact Us</h1>
      </div>

      <div id="c" className="containe">
        
        <div className="image-containe">
          <img id='imge' src={Img} alt="Your Alt Text" />
        </div>

        <div className="text-containe">
         
          <input id='input' type="text" name="name" placeholder="Name" /><br/>
          
          <input  id='input' type="email" name="email" placeholder="Email" /><br/>
          
          <textarea type="text" name="message" placeholder="Message"/><br/>
          
          {/* message sent */}
          {isMessageSent && <div className="message">Message Sent</div>}
          
          <div className="button">
            <button id="submit" className='bto' type="submit" onClick={handleSubmit}>
              Send
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default YourComponent;
