import loginPageBackground from "../../assets/sellby-background.png";
import appIcon from "../../assets/app-icon.png";
import "./LoginPageImages.css";
function LoginPageImages() {
  return (
    <div className="login-page-images">
      <img
        src={loginPageBackground}
        alt="Sellby Background"
        className="login-page-background"
      />
      <div className="app-icon-container">
        <img className="app-emoji" src={appIcon} alt="app icon" />
        <p className="app-title">Campus market place for acadamic Essentials</p>
      </div>
    </div>
  );
}
export default LoginPageImages;
