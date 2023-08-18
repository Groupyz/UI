import "./styles/dashboard.css";
import Button_c from "../../components/global/Button_c";

const Dashboard = () => (
  <dashboard>
    <div class="myDashboard">
      <p>My dashboard</p>
    </div>
    <div className="rectangle" />
    <div className="hiName">
      <p>Hi, Stav!</p>
    </div>
    <div className="hiText">
      <p>
        Sending messages at the perfect time is easy
        <br />
        with our new scheduling feature!
        <br />
        Click the button and get started!
      </p>
    </div>
    <div className="createButton">
      <Button_c name=" +  Schedule a new message" />
    </div>
  </dashboard>
);

export default Dashboard;
