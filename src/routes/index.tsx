import { Switch } from "react-router-dom";
import { List } from "../pages/List";
import Route from "./Route";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/list" component={List} isPrivate />
    </Switch>
  );
}
