import "./styles/Footer.css";
import Logo from "./assets/images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div class="footerContainer">
        <div class="row">
          <div class="logoContainer">
            <img src={Logo} alt="" />
          </div>
        </div>
        <hr class="line" />
        <div class="row">
          <div class="rightsContainer">{`© Groupyz All rights reserved 2023`}</div>
          <div class="linksContainer">
            <button type="button">Terms</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button">Privacy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
