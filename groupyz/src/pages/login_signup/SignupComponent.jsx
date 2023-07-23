import "./styles/LoginComponent.css";
import "./styles/SignupComponent.css";
import Button_c from "../../components/global/Button_c";
import google from "./images/google.svg";
import line from "./images/Line.svg";

const SignupComponent = () => (
  <signupComponent>
    <loginComponent>
      <div class="signupContainer">
        <div class="row">
          <div class="welcomeContainer">Create an account</div>
        </div>
        <div class="row">
          <input type="text" placeholder="Name" />
        </div>
        <div class="row">
          <input type="text" placeholder="Email" />
        </div>
        <div class="row">
          <input type="text" placeholder="Password" />
        </div>
        <div class="row">
          <div class="loginButton">
            <Button_c name="Create account" />
          </div>
        </div>
        <div class="row">
          <div class="seperator">
            <img src={line} alt="seperator" />
            <div class="text">or</div>
          </div>
        </div>
        <div class="row">
          <div class="googleButton">
            <Button_c image={google} name="Log in with Google" />
          </div>
        </div>
        <div class="multRow">
          <div class="signup">already have an account?</div>
          <div class="signupButton">
            <Button_c variant="text" name="Log in" dest="./login" />
          </div>
        </div>
      </div>
    </loginComponent>
  </signupComponent>
);

export default SignupComponent;
