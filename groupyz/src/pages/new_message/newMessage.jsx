import "./styles/newMessage.css";
import Button_c from "../../components/global/Button_c";
import Plus from "./images/plus.svg";
import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import X from "../add_groups/images/X.svg";
import { useState } from "react";
import Clock from "../dashboard/images/clock.svg";
import Arrows from "../dashboard/images/arrows.svg";
import { Select } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Checkbox from "../../components/global/Checkbox";

const NewMessage = () => {
  const location = useLocation();
  let preSelectedGroups = [];
  if (location.state) {
    preSelectedGroups = location.state.selectedGroups;
  }

  const [selectedGroups, setSelectedGroups] = useState(preSelectedGroups);
  const handleGroupDeselection = (groupName) => {
    setSelectedGroups((prevSelectedGroups) =>
      prevSelectedGroups.filter((group) => group !== groupName)
    );
  };

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
              <div class="buttonPosition">
                <div class="addGroups">
                  <Button_c name=" " image={Plus} />
                </div>
                <div class="borderLine"></div>
              </div>
              <div class="groupsPosition">
                {selectedGroups.map((group) => (
                  <div className="selectedGroups">
                    <Grid container columns={{ xs: 4 }}>
                      <Grid item xs={3}>
                        <span>{group}</span>
                      </Grid>
                      <Grid item xs={1}>
                        <div class="xButton">
                          <button onClick={() => handleGroupDeselection(group)}>
                            <img src={X} alt="X button" />
                          </button>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                ))}
              </div>
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div class="secondColumn">
                <input type="text" placeholder="Add headline to message" />
                <div class="multRow">
                  <div class="logoPos">
                    <img src={Clock} alt="clock" />
                  </div>
                  <div class="datePicker">
                    <DatePicker label="Pick date" format="DD/MM/YYYY" />
                  </div>
                  <div class="timePicker">
                    <TimePicker label="Pick time" format="hh:mm" />
                  </div>
                </div>
                <div class="multRow">
                  <div class="logoPos">
                    <img src={Arrows} alt="arrows" />
                  </div>
                  <div class="selectRepeat">
                    <FormControl fullWidth>
                      <InputLabel id="repeat">repeat</InputLabel>
                      <Select placeholder="repeat">
                        <MenuItem value="once">Once</MenuItem>
                        <MenuItem value="weekly">Weekly</MenuItem>
                        <MenuItem value="monthly">Monthly</MenuItem>
                        <MenuItem value="none">No repeat</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <label>
                    <input type="checkbox" />
                    Everyday
                  </label>
                </div>
              </div>
            </LocalizationProvider>
          </div>
        </div>
      </div>
    </newmessage>
  );
};

export default NewMessage;
