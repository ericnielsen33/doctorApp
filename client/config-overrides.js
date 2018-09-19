const rewireMobX = require("react-app-rewire-mobx");
const { compose } = require("react-app-rewired");

module.exports = function override(config, env) {
    const rewires = compose( rewireMobX );
    //do stuff with the webpack config...
    return rewires(config, env);
}