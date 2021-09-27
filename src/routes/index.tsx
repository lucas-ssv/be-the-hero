import { Switch } from "react-router-dom";
import { List } from "../pages/List";
import Route from "./Route";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Create } from "../pages/Create";

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/list" component={List} isPrivate />
      <Route path="/create" component={Create} isPrivate />
    </Switch>
  );
}
