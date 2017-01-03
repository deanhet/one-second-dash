var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState;

var config = require("./config.js");
var host = config.hostAddress,
    username = config.hueUsername,
    api = new HueApi(host, username),
    state = lightState.create();

var displayResult = function(result) {
    console.log("Set bedroom light");
};

var displayError = function(err) {
    console.error(err);
};

function toggleSwitch(status){
  api.setLightState(3, {"on": !status.state.on})
    .then(displayResult)
    .fail(displayError)
    .done();
}

api.lightStatus(3)
  .then(toggleSwitch)
  .done();
