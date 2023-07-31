import "../styles/addGroups.css";
import data from "./dummyData.json";
import Checkbox from "../../../components/global/Checkbox";

const groupsList = (props) => {
  const filteredData = data.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.group_name.toLowerCase().includes(props.input);
    }
  });

  return (
    <div class="groupList">
      {filteredData.map((item) => {
        return (
          <div class="multRow">
            <div class="group">{item.group_name}</div>
            <div class="checkbox">
              <Checkbox />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default groupsList;
