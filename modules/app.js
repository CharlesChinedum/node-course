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

// File System module

// const fs = require("fs");

// // const files = fs.readdirSync("./modules");

// fs.readdir("./", (err, files) => {
//   if (err) console.log("Error", err);
//   else console.log("Files:", files);
// });

// console.log("Files:", files);

// Event

const EventEmitter = require("events");

const emitter = new EventEmitter();

// Register a listener
emitter.on("messageLogged", (event) => {
  console.log("Listener called", event);
});

// Raise an event
emitter.emit("messageLogged", { id: 3, url: "http://" });
