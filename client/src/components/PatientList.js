import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject(["patientStore"])
@observer class PatientList extends Component {

  constructor(props){
    super(props)
    this.renderPatients = this.renderPatients.bind(this)
  }
  renderPatients(patientStore) {
    return patientStore.patients.map(patient => {
      return <li key={patient.id}>{patient.firstName}</li>;
    });
  }

  render() {
    const { patientStore } = this.props;
    return <div>{this.renderPatients(patientStore)}</div>;
  }
}

export default PatientList;
