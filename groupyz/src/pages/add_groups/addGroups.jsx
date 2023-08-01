import "./styles/addGroups.css";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Search from "./images/search.svg";
import GroupsList from "./data/groupsList.jsx";
import { useState } from "react";
import Button_c from "../../components/global/Button_c";
import arrow from "./images/arrow.svg";

const AddGroups = () => {
  const [inputText, setInputText] = useState("");
  const [selectedGroups, setSelectedGroups] = useState([]);
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
            <div class="firstCol">
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
              <GroupsList
                input={inputText}
                selectedGroups={selectedGroups}
                setSelectedGroups={setSelectedGroups}
              />
            </div>
            <div class="secondCol">
              {selectedGroups.map((group) => (
                <div className="selectedGroups">
                  <Grid container columns={{ xs: 4 }}>
                    <Grid item xs={4}>
                      <Item>{group}</Item>
                    </Grid>
                  </Grid>
                </div>
              ))}
            </div>
            <div class="thirdCol">
              <div class="continueButton">
                <Button_c name=" " image={arrow} width="34px" height="34px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </addgroups>
  );
};

export default AddGroups;
