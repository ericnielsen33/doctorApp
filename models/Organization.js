const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
    orgName: {
        type: String,
        required:true
    },
    orgTeams: [{
        type: Schema.Types.ObjectId,
        ref: 'team'
    }]
});