import Nav from "../components/Nav";
import "../styles/Home.css";

function HomePage() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="index.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
        rel="stylesheet"
      />
      <Nav />
      <div className="container">
        <section className="greetings">
          <div className="greetings-text">
            <h1>Good Morning, Chelsea!</h1>
            <p>Check all your incoming and outgoing transactions here</p>
          </div>
          <div className="profile">
            <div className="profile-name">
              <h3>Chelsea Emmanuela</h3>
              <p>Personal Account</p>
            </div>
            <img src="./assets/chelsea (1).png" height="100px" width="100px" />
          </div>
        </section>
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
