const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const patientSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    datOfBirth: {
        type: Date,
    },
    room: {
        type: String
    },
    primaryTeam: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    consultTeams: [{
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }]
});

const Patient = mongoose.model('patient', patientSchema);
exports.Patient = Patient;