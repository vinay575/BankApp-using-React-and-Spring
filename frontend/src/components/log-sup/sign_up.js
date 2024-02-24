import { useState } from "react";
import axios from "axios";
import './log-sup.css'; // Import CSS for styling

function Sign_up() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const save = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/bank/user", {
        username: username,
        password: password,
        phoneNumber: phoneNumber,
        email: email,
        address: address,
      });
      alert("User Registration Successful");
    } catch (err) {
      alert(err);
    }
  };

  // Validation logic
  const isValidEmail = (email) => {
    return email.includes('@') && email.includes('.');
  };

  const isValidPassword = (password) => {
    return password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username.trim() || !email.trim() || !password.trim() || !phoneNumber.trim() || !address.trim()) {
      alert('All fields are required');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Invalid email format');
      return;
    }

    if (!isValidPassword(password)) {
      alert('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit');
      return;
    }

    save(event);
  };

  return (
    <div className="body">
      <div className="container">
        <div className="header">
          <h2>Register Here</h2>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="field">
            <label>Address</label>
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <div className="field">
            <input
              type="checkbox"
              id="tc"
              className="terms"
              required
            />
            <label htmlFor="tc">I Agree To Terms And Conditions</label>
          </div>
          <input type="submit" className="button" name="submit" />
        </form>
      </div>
    </div>
  );
}

export default Sign_up;
