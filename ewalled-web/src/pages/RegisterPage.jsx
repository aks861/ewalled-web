import registerBg from "../assets/loginregister.png";
import logo from "../assets/logo-loginregister.png";
import { Link, useNavigate } from "react-router-dom";
import "../styles/RegisterPage.css";
import { useState } from "react";

function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (name && email && password && phone) {
      console.log("Registered:", { name, email, password, phone });

      navigate("/login");
    } else {
      alert("Mohon isi data dengan lengkap.");
    }
  };
  return (
    <div className="register-container">
      <div className="register-left">
        <img src={logo} alt="logo" className="logo" />
        <form className="register-form" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <input
            type="text"
            placeholder="No HP"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

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
