import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import "./styles/Button_c.css";

const Button_c = ({ name }) => {
  if (!name) {
    throw new Error("The requiredProp is missing!");
  }

  return (
    <div>
      <Button href="#text-buttons" variant="contained" id="Button_c">
        {name}
      </Button>
    </div>
  );
};

Button_c.propTypes = {
  name: PropTypes.any.isRequired,
};

export default Button_c;
