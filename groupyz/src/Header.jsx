import "./styles/Header.css";
import Logo from "./assets/images/logo.svg";
import Button_c from "./components/global/Button_c";

const Header = () => {
  return (
    <header>
      <div class="container">
        <div class="logoContainer">
          <img src={Logo} width={112} height={112} alt="logo" />
        </div>
        <div class="scheduleContainer">{`Schedule messages`}</div>
        <div class="loginButton">
          <Button_c name="Log in" dest="./login" />
        </div>
        <div class="signupButton">
          <Button_c name="Sign up" dest="./signup" />
        </div>
      </div>
    </header>
  );
};

export default Header;
