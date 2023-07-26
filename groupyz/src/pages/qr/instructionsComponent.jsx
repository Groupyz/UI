import "./styles/instructionsComponent.css";
import scan from "./images/scan.svg"
import frame from "./images/frame.svg"
import apps from "./images/apps.svg"


const InstructionsComponent = () => (
    <instructionsComponent>
        <div class="instructionsContainer">
            <div class="col">
                <div class="row">
                    <div class="titleContainer">To sync your WhatsApp groups with Groupyz :</div>
                </div>
                <div class="row">
                    <div class="stepsContainer">
                        <p>
                            1. Open WhatsApp on your phone
                            <br /><br />
                            2. Tap <b>Menu</b> or <b>Settings</b> and select <b>Linked Devices</b>
                            <br /><br />
                            3. click <b>'Link Device'</b>
                            <br /><br />
                            4. Point your phone to the screen in order to capture the code
                            <br /><br />
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
                    </div>
                </div>
            </div>

            <div class="changeAppContainer">
                <div>
                    <p>Change app</p>
                </div>
                <div>
                    <img src={apps} alt="" />
                </div>
            </div>
        </div>




    </instructionsComponent>
);

export default InstructionsComponent;
