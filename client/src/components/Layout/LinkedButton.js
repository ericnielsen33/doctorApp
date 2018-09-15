import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

@inject(["userStore"])
@observer
class LinkedButton extends Component {
  renderLink = itemProps => {
    return <Link to="/signin" {...itemProps} />;
  };
  handleLogout = () => {
      if (this.props.userStore.user) {
          console.log("loggingout")
          this.props.userStore.logoutUser()
      }
      console.log("handlelogout");
  }
  render() {
    return (
      <Button onClick={this.handleLogout} component={this.renderLink} color="inherit">
        {this.props.userStore.user ? "Logout" : "Login"}
      </Button>
    );
  }
}

export default LinkedButton;
