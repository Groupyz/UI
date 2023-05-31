import "./styles/Homepage.css";
import PictureContainer from "./PictureContainer";

const Homepage = () => (
  <>
    <div class="container">
      <div class="row">
        <div class="headlinesContainer">
          <header> Hello World!</header>
        </div>
      </div>
      <div class="row">
        <div class="photosContainer">
          <PictureContainer />
        </div>
      </div>
    </div>
  </>
);

export default Homepage;
