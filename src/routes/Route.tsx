import { useContext } from "react";
import { Redirect, RouteProps, Route } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

interface RouteWrapperProps extends Omit<RouteProps, "component"> {
  component: React.ElementType;
  isPrivate?: boolean;
}

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}: RouteWrapperProps) {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated && isPrivate) {
    return <Redirect to="/" />;
  }

  if (isAuthenticated && !isPrivate) {
    return <Redirect to="/list" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}
