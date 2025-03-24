import loginBg from "../assets/loginregister.png";
import logo from "../assets/logo-loginregister.png";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";
import { useState } from "react";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (email && password) {
      console.log("Logging in:", email);
      navigate("/");
    } else {
      alert("Mohon isi email dan password.");
    }
  }

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={logo} alt="logo" className="logo" />
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
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
