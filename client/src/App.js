import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "./views/Dashboard";
import Register from "./views/Register";
import Signin from "./views/Signin";

class App extends Component {
  render() {
    return <BrowserRouter>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
      </BrowserRouter>;
  }
}

export default App;
