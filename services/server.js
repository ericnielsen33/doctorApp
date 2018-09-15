const express = require("express");
// const morgan = require("morgan");
// TODO: configure morgan for dev mode
const app = express();
// app.use(morgan('default'));

require("../routes")(app);
if (process.env.NODE_ENV == "production") {
  // serve prod assets
  app.use(express.static("client/build"));
  // serve index.html if it doesnt recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
