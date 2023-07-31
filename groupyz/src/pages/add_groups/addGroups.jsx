import "./styles/addGroups.css";
import TextField from "@mui/material/TextField";
import Search from "./images/search.svg";
import GroupsList from "./data/groupsList.jsx";
import { useState } from "react";

const AddGroups = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <addgroups>
      <div class="container">
        <div class="row firstRow">
          <div class="headlineBorder">
            <div class="headline">Add groups</div>
            <div class="progressBar"></div>
          </div>
        </div>
        <div class="col">
          <div class="row secondRow">
            <div class="searchBar">
              <TextField
                id="searchBar"
                onChange={inputHandler}
                variant="outlined"
                fullWidth
                placeholder="Search a group"
                InputProps={{
                  startAdornment: <img src={Search} alt="" />,
                  disableUnderline: true,
                }}
              />
            </div>
            <GroupsList input={inputText} />
          </div>
        </div>
      </div>
    </addgroups>
  );
};

export default AddGroups;
