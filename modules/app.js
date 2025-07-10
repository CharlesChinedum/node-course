const path = require("path");
const os = require("os");

const pathName = path.parse(__filename);
const totalMemory = os.totalmem();
const freeMemory = os.freemem();

// console.log(pathName);
console.log(`Total Memory: ${totalMemory / 1024 / 1024 / 1024} GB`);
console.log(`Free memory: ${freeMemory / 1024 / 1024 / 1024} GB`);
console.log(`Free memory: ${freeMemory / 1024 / 1024} MB`);
console.log(`Free memory: ${freeMemory}`);
