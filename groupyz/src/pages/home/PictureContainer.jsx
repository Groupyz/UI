import "./styles/PictureContainer.css";
import DashBoard from "./images/dashBoard.png";
import LeftGroupNames from "./images/leftGroupNames.png";
import CreateMessage from "./images/createMessage.png";
import RightGroupNames from "./images/rightGroupNames.png";

const PictureContainer = () => {
  return (
    <div className="PhotosContainer">
      <div className="Row">
        <img src={DashBoard} alt="" />
      </div>
      <div className="Row SecondR">
        <img src={LeftGroupNames} alt="" />
        <img src={CreateMessage} alt="" />
        <img src={RightGroupNames} alt="" />
      </div>
    </div>
  );
};

export default PictureContainer;
