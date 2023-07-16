import "./styles/LoginComponent.css";
import Button_c from "../../components/global/Button_c";
import google from "./images/google.svg";

const LoginComponent = () => (
  <loginComponent>
    <div class="loginContainer">
      <div class="row">
        <div class="welcomeContainer">Welcome back!</div>
      </div>
      <div class="row">
        <div class="subWelcomeContainer">
          welcome back! please enter your details.
        </div>
      </div>
      <div class="row">
        <div class="googleButton">
          <Button_c image={google} name="Log in with Google" />
        </div>
      </div>
    </div>
  </loginComponent>
);

export default LoginComponent;
