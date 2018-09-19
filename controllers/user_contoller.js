const _ = require("lodash");
const { User, hashPassword, validateUser } = require("../models/User");

module.exports = {
  async createUser(req, res) {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already exists");
    const hashedPassowrd = await hashPassword(req.body.password);
    user = new User({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: hashedPassowrd
    });
    user = await user.save();
    const token = user.generateAuthToken();
    res
      .header("Authorization", token)
      .send(_.pick(user, ["_id", "firstName", "lastName", "email"]));
  },
  async getCurrentUser(req, res) {
    const user = await User.findById(req.user._id);
    console.log(req.user);
    res.send(_.pick(user, ["_id", "firstName", "lastName", "email"]));
  },
  async updateUserProperties(req, res) {
    const { id } = req.params;
    const updates = _.pick(req.body, ["firstName", "lastName", "team", "job"]);
    let user = await User.findByIdAndUpdate(id, updates, { new: true });
    res.send(user);
  }
};
