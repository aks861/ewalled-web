import registerBg from "../assets/loginregister.png";
import logo from "../assets/logo-loginregister.png";
import { Link } from "react-router-dom";
import "../styles/RegisterPage.css";

function RegisterPage() {
  return (
    <div className="register-container">
      <div className="register-left">
        <img src={logo} alt="logo" className="logo" />
        <form className="register-form">
          <input type="text" placeholder="Nama Lengkap" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="No HP" />
          <button type="submit">Daftar</button>
        </form>
        <p className="login-text">
          Sudah punya akun? <Link to="/login">Login di sini</Link>
        </p>
      </div>
      <div className="register-right">
        <img src={registerBg} alt="register-bg" />
      </div>
    </div>
  );
}

export default RegisterPage;
