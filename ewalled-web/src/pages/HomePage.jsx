import Nav from "../components/Nav";
import Greeting from "../components/Greeting";
import "../styles/Home.css";
import avatar from "../assets/chelsea (1).png";

function HomePage() {
  return (
    <>
      <Nav />
      <div className="container">
        <Greeting avatar={avatar} />
        <section className="account-info">
          <div className="account-no-card">
            <h4>Account No.</h4>
            <h3>100899</h3>
          </div>
          <div className="balance-card">
            <h4>Balance</h4>
            <div className="balance-actions">
              <div className="balance-action">
                <h3>Rp 10.000.000,00</h3>
                <a href="#" className="view-button">
                  <img src="./assets/view.png" height="38px" />
                </a>
              </div>
              <div className="balance-action">
                <a href="#" className="balance-button">
                  <img src="./assets/plus.png" height="35px" />
                </a>
                <a href="#" className="balance-button">
                  <img src="./assets/transfer.png" height="35px" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
