import "../styles/Home.css";

function Nav() {
  return (
    <nav className="nav">
      <img src="./assets/logo.png" height="40px" />
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
          <img src="./assets/mode.png" height="26px" width="26px" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
