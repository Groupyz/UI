import "./styles/Login.css";
import Message from "./images/Message.svg";
import LoginComponent from "./LoginComponent";

const Login = () => (
  <login>
    <div class="container">
      <div class="loginCompContainer">
        <LoginComponent />
      </div>
      <div class="imageContainer">
        <img src={Message} alt="" />
      </div>
    </div>
  </login>
);

export default Login;
