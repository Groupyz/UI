import "./styles/Header.css";
import Logo from "./assets/images/logo.svg";

const Header = () => {
  return (
    <header>
      <div class="container">
        <div class="logoContainer">
          <img src={Logo} width={112} height={112} alt="logo" />
        </div>
        <div class="scheduleContainer">{`Schedule messages`}</div>
      </div>
    </header>
  );
};

export default Header;
