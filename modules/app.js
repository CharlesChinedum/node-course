// @: Modules

//@: Path and Os

// const path = require("path");
// const os = require("os");
// const pathName = path.parse(__filename);
// const totalMemory = os.totalmem();
// const freeMemory = os.freemem();
// const release = os.release();
// const osType = os.type();
// const platform = os.platform();
// const userInfo = os.userInfo();
// const uptime = os.uptime();

// // console.log(pathName);
// console.log(`Total Memory: ${totalMemory / 1024 / 1024 / 1024} GB`);
// console.log(`Free memory: ${freeMemory / 1024 / 1024 / 1024} GB`);
// console.log(`Free memory: ${freeMemory / 1024 / 1024} MB`);
// console.log(`Free memory: ${freeMemory}`);
// console.log(`OS: ${osType}`);
// console.log(`Release: ${release}`);
// console.log(`Platform: ${platform}`);
// console.log(`User Info: ${JSON.stringify(userInfo)}`);
// console.log(`Uptime: ${uptime} seconds`);
// console.log(`Uptime: ${uptime / 60} minutes`);
// console.log(`Uptime: ${uptime / 60 / 60} hours`);
// console.log(`Uptime: ${uptime / 60 / 60 / 24} days`);

//@: File System module

// const fs = require("fs");

// // const files = fs.readdirSync("./modules");

// fs.readdir("./", (err, files) => {
//   if (err) console.log("Error", err);
//   else console.log("Files:", files);
// });

// console.log("Files:", files);

//@: Event

// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// Raise an event
// emitter.emit("messageLogged", { id: 3, url: "http://" });

// const Logger = require("./logger");
// const logger = new Logger();

// // Register a listener
// logger.on("messageLogged", (event) => {
//   console.log("Listener called", event);
// });

// logger.log("message");

//@: HTTP

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello chief");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3, 4, { 1: "test" }]));
    res.end();
  }
});

// server.on("connection", (socket) => {
//   console.log("New connection...");
// });

server.listen(3000);

console.log("Hi, chief, listening on port 3000...");
