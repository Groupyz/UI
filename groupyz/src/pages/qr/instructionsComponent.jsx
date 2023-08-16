import "./styles/instructionsComponent.css";
import scan from "./images/scan.svg";
import frame from "./images/frame.svg";
//import qr from "./qr.png";
import whatsapp from "./images/whatsapp.svg";
import telegram from "./images/telegram.svg";
import facebook from "./images/facebook.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showToastMessage = () => {
  toast.error("Not Supported!", {
    position: toast.POSITION.TOP_CENTER,
  });
};

const InstructionsComponent = () => (
  <instructionsComponent>
    <div class="instructionsContainer">
      <div class="col">
        <div class="row">
          <div class="titleContainer">
            To sync your WhatsApp groups with Groupyz:
          </div>
        </div>
        <div class="row">
          <div class="stepsContainer">
            <p>
              1. Open WhatsApp on your phone
              <br />
              <br />
              2. Tap <b>Menu</b> or <b>Settings</b> and select{" "}
              <b>Linked Devices</b>
              <br />
              <br />
              3. click <b>'Link Device'</b>
              <br />
              <br />
              4. Point your phone to the screen in order to capture the code
              <br />
              <br />
              5. Please wait, <b>process may take up to 1 minute</b>
            </p>
          </div>
        </div>
      </div>

      <div class="scanContainer">
        <div class="col">
          <div class="row">
            <div class="scanIconContainer">
              <img src={scan} alt="" />
            </div>
            <div class="scanTitleContainer">
              <div>
                <p>Scan QR code</p>
              </div>
            </div>
            <div class="scanContentContainer">
              <div>
                <p>Scan this code in-app to verify a device</p>
              </div>
            </div>
            <div class="scanFrameContainer">
              <div>
                <img src={frame} alt="" />
              </div>
            </div>
            <div class="qr">
              <img
                src={
                  "data:image/png;base64,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"
                }
                width={270}
                height={270}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div class="changeAppContainer">
        <div>
          <p>Change app</p>
        </div>
        <div>
          <div class="whatsappButton">
            <button type="whatsapp" onClick={showToastMessage}>
              <img src={whatsapp} />
            </button>
          </div>
          <div class="telegramButton">
            <button type="telegram" onClick={showToastMessage}>
              <img src={telegram} />
            </button>
          </div>
          <div class="facebookButton">
            <button type="facebook" onClick={showToastMessage}>
              <img src={facebook} />
            </button>
          </div>
        </div>
      </div>
    </div>
  </instructionsComponent>
);

export default InstructionsComponent;
