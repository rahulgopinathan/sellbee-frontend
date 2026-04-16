import "./LoginForm.css";
import { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLoginClick() {
    const response = await axios.post("http://localhost:3001/auth/signin", {
      email: "john.doe1@example.com",
      password: "password123",
    });
    console.log(response);
  }

  return (
    <div className="login-form-container">
      <div className="app-icon">
        <p className="sellby-text">Sellby</p>
        <p className="sellby-mu-text">MU</p>
      </div>

      <div className="user-creds">
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="user-email-input"
          placeholder="University Email"
        />
        <input
          className="user-password-input"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Enter Password"
        />
      </div>

      <button onClick={handleLoginClick} className="login-btn">
        Proceed
      </button>

      <a
        className="terms-and-conditions-link"
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Terms & Conditions
      </a>
    </div>
  );
}

export default LoginForm;
