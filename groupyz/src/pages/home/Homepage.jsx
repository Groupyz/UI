import "./styles/Homepage.css";
import PictureContainer from "./PictureContainer";
import background from "./images/background.svg";
import Button_c from "../../components/global/Button_c";
import logo from "../../../src/assets/images/logo.svg";

const Homepage = () => (
  <homepage>
    <div class="container" style={{ backgroundImage: `url(${background})` }}>
      <div class="row">
        <div class="headlinesContainer">
          <p>
            SCHEDULE MESSAGES <br />
            to Reach Your Members at the Right Time
          </p>
          <div class="subHeadlinesContainer">
            <p>All our PRO level features at your fingertips.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="buttonContainer">
          <Button_c name="Get Started" img={logo} />
        </div>
      </div>
      <div class="row">
        <div class="photosContainer">
          <PictureContainer />
        </div>
      </div>
    </div>
  </homepage>
);

export default Homepage;
