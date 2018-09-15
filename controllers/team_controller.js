const { Team } = require("../models/Team");

module.exports = {
    async createTeam(req, res) {
        // validate the request params to ensure they fir the team requirements
        // check to see if a team of the same name already exits;
        // if so, respond to the client with an error message
        // create and save the team
        // respond with the new team
        return res.send('createTeam')
    },
    async getTeam(req, res){},
    async updateTeam(req, res){
        // validate the request params, and that the user is the teamOwner
        // update and save the team
        // respond with the updated team
    }
}