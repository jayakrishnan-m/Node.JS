const fs = require('fs'), filename = process.argv[2];
if (!filename) {
    throw Error("A file to watch must be specified!");
}
if (!fs.existsSync(filename)) {
    throw Error("A file to watch is invalid!");
}
fs.watch(filename, function () {
    console.log("File " + filename + " Just changed");
});
console.log("File " + filename + " under watch");