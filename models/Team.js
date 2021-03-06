const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    teamName: {
        type: String,
        required: true
    },
    teamOwner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    patients: [{
        type: Schema.Types.ObjectId,
        ref: 'patient'
    }]
});

const Team = mongoose.model('team', teamSchema);
exports.Team = Team;