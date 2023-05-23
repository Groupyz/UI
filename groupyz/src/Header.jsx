import "./styles/Header.css";
import header_logo from "./assets/images/header_logo.png";

const Header = () => {
  return (
    <header>
      <div class="headerContainer">
        <div class="logoContainer">
          <img src={header_logo} alt="logo" />
        </div>
        <div class="scheduleContainer">{`Schedule messages`}</div>
      </div>
    </header>
  );
};

export default Header;
