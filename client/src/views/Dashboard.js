import React, { Component } from "react";
import withRoot from "../withRoot";
import Header from "../components/Layout/Header";
import PatientList from "../components/PatientList";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header />
                <PatientList />
            </div>
        );
    }
}

export default withRoot(Dashboard);