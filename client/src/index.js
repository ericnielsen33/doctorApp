import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import PatientStore from "./stores/Patients";
import UserStore from "./stores/User";

ReactDOM.render(
  <Provider userStore={UserStore} patientStore={PatientStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
