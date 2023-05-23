import "./styles/Header.css";
<<<<<<< HEAD
import Logo from "./assets/images/logo.svg";
=======
import header_logo from "./assets/images/header_logo.png";
>>>>>>> 0fff56e (init header without buttons)

const Header = () => {
  return (
    <header>
<<<<<<< HEAD
      <div class="container">
        <div class="logoContainer">
          <img src={Logo} width={112} height={112} alt="logo" />
=======
      <div class="headerContainer">
        <div class="logoContainer">
          <img src={header_logo} alt="logo" />
>>>>>>> 0fff56e (init header without buttons)
        </div>
        <div class="scheduleContainer">{`Schedule messages`}</div>
      </div>
    </header>
  );
};

export default Header;
