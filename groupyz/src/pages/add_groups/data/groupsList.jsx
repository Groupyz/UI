import "../styles/addGroups.css";
import data from "./dummyData.json";
import Checkbox from "../../../components/global/Checkbox";

// const groupsList = (props) => {
const groupsList = ({ input, selectedGroups, setSelectedGroups }) => {
  const filteredData = data.filter((el) => {
    //if no input the return the original
    if (input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.group_name.toLowerCase().includes(input);
    }
  });

  const handleGroupSelection = (groupName) => {
    setSelectedGroups((prevSelectedGroups) => {
      if (prevSelectedGroups.includes(groupName)) {
        return prevSelectedGroups.filter((group) => group !== groupName);
      } else {
        return [...prevSelectedGroups, groupName];
      }
    });
  };

  return (
    <div className="groupList">
      {filteredData.map((item) => (
        <div key={item.group_id} className="multRow">
          <div className="group">{item.group_name}</div>
          <div className="checkbox">
            <Checkbox
              label={item.group_name}
              selectedGroups={selectedGroups}
              setSelectedGroups={setSelectedGroups}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default groupsList;
