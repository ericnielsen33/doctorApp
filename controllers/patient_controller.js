const { Patient } = require("../models/Patient");
const _ = require("lodash");


function assignDate(dateString) {
    this.dateOfBirth = new Date(dateString);
}
// Takes a user id, gathers data about the user and assigns data to specifed object properties.
function assignUserProps(id) {
    this.createdBy = id;
}
// will gather data about the team of the user posting a new patient and append data at the specified object propeties
function assignTeamProps(params) {

}

module.exports = {
    async createNewPatient(req, res){
        const { user, body: { patient } } = req;
        let newPatient = new Patient(
            _.assign(
                patient,
                new assignDate(patient.dateOfBirth),
                new assignUserProps(user._id)
            )
        );
        newPatient = await newPatient.save();
        res.send(newPatient);
    },
    async getUserPatients(req, res){
        // the user property of the request is generated from the auth middleware,
        //  which extracts the user id from the auth token
        const { user } = req;
        const patients = await Patient.find({ createdBy: user._id});
        res.send(patients);
    },
    async getPatientById(req, res){},
    async removePatient(req, res){}
}