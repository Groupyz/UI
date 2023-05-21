import { Link } from "react-router-dom";
const NoMatch = () => (
  <div>
    <h2>Nothing to see here!</h2>
    <p>
      <Link to="https://eurovision.tv/">Go to the home page</Link>
    </p>
  </div>
);

export default NoMatch;
