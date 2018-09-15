const mongoose = require("mongoose");

module.exports = function() {
  const options = { useNewUrlParser: true };
  mongoose.Promise = global.Promise;
  mongoose
    .connect( process.env.MONGO_URI, options )
    .then(() => console.log(`Connected to mongoDB`));

};
