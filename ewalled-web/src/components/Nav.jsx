import "./Nav.css";
import logo from "../assets/logo.png";
import mode from "../assets/mode.png";

function Nav() {
  return (
    <nav className="nav">
      <img src={logo} height="40px" />
      <div className="nav-links">
        <a href="#" className="nav-link">
          Dashboard
        </a>
        <a href="#" className="nav-link">
          Transfer
        </a>
        <a href="#" className="nav-link">
          Topup
        </a>
        <a href="#" className="nav-link">
          Sign Out
        </a>
        <div className="vertical-line" />
        <a href="#" className="nav-link">
          <img src={mode} height="26px" width="26px" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
