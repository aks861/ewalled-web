import view from "../assets/view.svg";
import plus from "../assets/plus.svg";
import transfer from "../assets/transfer.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles//components/AccountInfoCard.css";

function AccountInfoCard() {
  const [showBalance, setShowBalance] = useState(true);
  const navigate = useNavigate();

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
            <button
              className="balance-button"
              onClick={() => navigate("/topup")}
            >
              <img src={plus} height="35" />
            </button>
            <button
              className="balance-button"
              onClick={() => navigate("/transfer")}
            >
              <img src={transfer} height="35" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountInfoCard;
