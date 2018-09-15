const rewireMobX = require("react-app-rewire-mobx");
const rewireScss = require("react-app-rewire-scss");
const { compose } = require("react-app-rewired");

module.exports = function override(config, env) {
    const rewires = compose( rewireMobX, rewireScss );
    //do stuff with the webpack config...
    return rewires(config, env);
}