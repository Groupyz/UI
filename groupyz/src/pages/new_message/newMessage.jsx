import "./styles/newMessage.css";
import Button_c from "../../components/global/Button_c";
import Plus from "./images/plus.svg";
import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import X from "../add_groups/images/X.svg";
import { useState } from "react";

const NewMessage = () => {
  const location = useLocation();
  const preSelectedGroups = location.state.selectedGroups;
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
          </div>
        </div>
      </div>
    </newmessage>
  );
};

export default NewMessage;
