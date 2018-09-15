//  days of the week
// time of day
//  count: minimum # residents required to do the job during a time of day
// max hours per week
// ACGME rules
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    minResidents: Number
});

const Job = mongoose.model('job', jobSchema);
exports.Job = Job;