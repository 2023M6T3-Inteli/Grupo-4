const mqtt = require("mqtt");

// initialize the MQTT client
var client = mqtt.connect("mqtt://mqtt-dashboard.com");

const topic = "Recommendation Generator/g4";

// setup the callbacks
client.on("connect", () => {
  console.log("Conexão com o broker realizada com sucesso");
  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`);
  });
});

client.on("error", function (error) {
  console.log(error);
});

let lastMessage = null
async function publish(topic, message) {
  client.publish(topic, message)
  
  client.on("message", (topic, payload) => {
    lastMessage = payload.toString().replace(/'/g, '"')
  });

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(lastMessage ? lastMessage : "No message received");
    }, 10000);
  });
}

module.exports = {
  publish,
};
