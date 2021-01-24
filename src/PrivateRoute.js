import { Redirect } from "react-router-dom";

const PrivateRoute = ({ children, authenticated, ...rest }) => {
  return authenticated ? children : <Redirect to={{ pathname: "/login" }} />;
};

export default PrivateRoute;
