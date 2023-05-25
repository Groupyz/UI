import "./styles/Header.css";
import Header_logo from "./assets/images/Header_logo.png";

const Header = () => {
  return (
    <header>
      <div class="container">
        <div class="logoContainer">
          <img src={Header_logo} alt="logo" />
        </div>
        <div class="scheduleContainer">{`Schedule messages`}</div>
      </div>
    </header>
  );
};

export default Header;
