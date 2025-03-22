import Nav from "../components/Nav";
import Greeting from "../components/Greeting";
import "../styles/HomePage.css";
import avatar from "../assets/chelsea (1).png";
import AccountInfoCard from "../components/AccountInfoCard";

function HomePage() {
  return (
    <>
      <Nav />
      <div className="container">
        <Greeting avatar={avatar} />
        <AccountInfoCard />
      </div>
    </>
  );
}

export default HomePage;
