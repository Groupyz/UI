import "./styles/Footer.css";
import Logo from "./assets/images/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const showToastMessage = () => {
    toast.error("Not supported!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
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
            <button onClick={showToastMessage} type="button">
              Terms
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={showToastMessage} type="button">
              Privacy
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
