import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import "./styles/Button_c.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Button_c = ({ name, dest }) => {
  if (!name) {
    throw new Error("The requiredProp is missing!");
  }

  function goToDest(dest) {
    console.log(dest);
    if (!dest) {
      showToastMessage();
    }
  }

  const showToastMessage = () => {
    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div>
      <Button
        href="#text-buttons"
        variant="contained"
        id="Button_c"
        onClick={goToDest(dest)}
      >
        {name}
      </Button>
      <ToastContainer />
    </div>
  );
};

Button_c.propTypes = {
  name: PropTypes.any.isRequired,
};

export default Button_c;
