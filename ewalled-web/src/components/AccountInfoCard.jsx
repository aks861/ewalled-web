import view from "../assets/view.png";
import plus from "../assets/plus.png";
import transfer from "../assets/transfer.png";
import { useState } from "react";

function AccountInfoCard() {
  const [showBalance, setShowBalance] = useState(true);

  const toggleBalance = () => {
    setShowBalance((prev) => !prev);
  };

  return (
    <section className="account-info">
      <div className="account-no-card">
        <h4>Account No.</h4>
        <h3>100899</h3>
      </div>
      <div className="balance-card">
        <h4>Balance</h4>
        <div className="balance-actions">
          <div className="balance-action">
            <h3>{showBalance ? "Rp 10.000.000,00" : "Rp ••••••••"}</h3>
            <button className="view-button" onClick={toggleBalance}>
              <img src={view} height="38" />
            </button>
          </div>
          <div className="balance-action">
            <button className="balance-button">
              <img src={plus} height="35" />
            </button>
            <button className="balance-button">
              <img src={transfer} height="35" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountInfoCard;
