import loginPageBackground from "./assets/sellby-background.png";
import "./LoginPageImages.css";
function LoginPageImages() {
  return (
    <div className="login-page-images">
      <img
        src={loginPageBackground}
        alt="Sellby Background"
        className="login-page-background"
      />
    </div>
  );
}
export default LoginPageImages;
