import "./LoginForm.css";
import { useState } from "react";
import axios from "axios";
import SellByTextIcon from "../../shared/sellby-text-icon/SellbyTextIcon";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLoginClick() {
    setIsLoading(true);
    setError("");
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/signin`, {
        email,
        password,
      });
    } catch (err) {
      setError(err.response?.data?.message ?? "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="login-form-container">
      <SellByTextIcon />

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

      {error && <p className="login-error">{error}</p>}

      <button onClick={handleLoginClick} className="login-btn" disabled={isLoading}>
        {isLoading ? "Loading..." : "Proceed"}
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
