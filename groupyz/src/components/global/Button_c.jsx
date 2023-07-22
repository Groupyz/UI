import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import "./styles/Button_c.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Button_c = ({ variant, image, name, dest }) => {
  if (!name) {
    throw new Error("The name required Prop missing!");
  }
  if (!variant) {
    variant = "contained";
  }

  const showToastMessage = () => {
    if (dest) {
      window.location.href = `/${dest}`;
    } else {
      toast.error("Not Supported!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  if (image) {
    return (
      <div>
        <Button variant={variant} id="Button_c" onClick={showToastMessage}>
          <div class="image">
            <img src={image} width={"25px"} height={"25px"} />
          </div>
          {name}
        </Button>
        <ToastContainer />
      </div>
    );
  } else {
    return (
      <div>
        <Button variant={variant} id="Button_c" onClick={showToastMessage}>
          {name}
        </Button>
        <ToastContainer />
      </div>
    );
  }
};

Button_c.propTypes = {
  name: PropTypes.any.isRequired,
};

export default Button_c;
