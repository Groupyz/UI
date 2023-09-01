import "../styles/addGroups.css";
import data from "./dummyData.json";
import Checkbox from "../../../components/global/Checkbox";

const groupsList = ({
  input,
  selectedGroups,
  setSelectedGroups,
  getDataFromGroupsList,
}) => {
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

  const handleGroupsData = () => {
    getDataFromGroupsList(data);
  };

  return (
    <div className="groupList">
      {handleGroupsData()}
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
