import "./LoginForm.css";

function LoginForm() {
  return (
    <div className="login-form-container">
      <div className="app-icon">
        <p className="sellby-text">Sellby</p>
        <p className="sellby-mu-text">MU</p>
      </div>

      <div className="user-creds">
        <input
          type="text"
          className="user-email-input"
          placeholder="University Email"
        />
        <input
          className="user-password-input"
          type="password"
          placeholder="Enter Password"
        />
      </div>

      <button className="login-btn">Proceed</button>

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
