import loginBg from "../assets/loginregister.png";
import logo from "../assets/logo-loginregister.png";
import { Link } from "react-router-dom";
import "../styles/LoginPage.css";

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-left">
        <img src={logo} alt="logo" className="logo" />
        <form className="login-form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <Link to="/">
            <button type="submit">Login</button>
          </Link>
        </form>
        <p className="register-text">
          Belum punya akun? <Link to="/register">Daftar di sini</Link>
        </p>
      </div>
      <div className="login-right">
        <img src={loginBg} alt="money" />
      </div>
    </div>
  );
}

export default LoginPage;
