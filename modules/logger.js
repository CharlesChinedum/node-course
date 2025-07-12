const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    // Do something
    console.log(message);

    // Raise an event
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

module.exports = Logger;
