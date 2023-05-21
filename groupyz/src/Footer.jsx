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
          <div class="rightsContainer">{`© Groupyz All rights reserved`}</div>
          <div class="linksContainer">
            <a href="https://commons.wikimedia.org/wiki/File:Pug_portrait.jpg">
              Terms
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://commons.wikimedia.org/wiki/File:Pug_portrait.jpg">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
