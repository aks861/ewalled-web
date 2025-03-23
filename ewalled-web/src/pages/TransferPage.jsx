import Nav from "../components/Nav";
import "../styles/TransferPage.css";
import dropdownImg from "../assets/dropdown.png";

function TransferPage() {
  return (
    <>
      <Nav />
      <div className="transfer-page">
        <div className="transfer-container">
          <h1 className="transfer-heading">Transfer</h1>
          <div className="transfer-card">
            <div className="transfer-to">
              <div className="dropdown-label">To</div>
              <div className="recipient">
                900782139 (Giz)
                <img src={dropdownImg} className="dropdown" />
              </div>
            </div>

            <div className="transfer-amount">
              <div className="amount-label">Amount</div>
              <input type="text" defaultValue="IDR 150.000,00" />
              <p className="balance">
                Balance: <span>IDR 10.000.000</span>
              </p>
            </div>

            <div className="transfer-note">
              <div className="note-label">Notes:</div>
              <input type="text" />
            </div>
            <button className="transfer-btn">Transfer</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransferPage;
