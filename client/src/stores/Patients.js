import { observable, action } from "mobx";

class PatientStore {
    // constructor(rootStore) {
    //     this.rootStore = rootStore
    // }
    @observable patients = [
        { id: '001', firstName: "Eric"},
        { id: '002', firstName: "Ryan" }
    ];

    @action getPatientById(id) {
        return this.patients.filter(patient => {
            return patient.id === id;
        })
    }

    @action addPatient(patient) {
        this.patients.push(patient);
    }
}

export default new PatientStore();