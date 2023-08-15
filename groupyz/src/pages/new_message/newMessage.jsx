import "./styles/newMessage.css";
import Button_c from "../../components/global/Button_c";
import Plus from "./images/plus.svg";

const NewMessage = () => {
  return (
    <newmessage>
      <div class="container">
        <div class="row firstRow">
          <div class="headlineBorder">
            <div class="headline">Schedule & Compose message</div>
            <div class="progressBar"></div>
          </div>
        </div>
        <div class="col">
          <div class="row secondRow">
            <div class="firstCol">
              <div class="addGroups">
                <Button_c name=" " image={Plus} />
              </div>
              <div class="borderLine"></div>
            </div>
          </div>
        </div>
      </div>
    </newmessage>
  );
};

export default NewMessage;
