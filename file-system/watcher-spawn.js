"use striict";
const fs = require('fs'),
    spawn = require('child_process').spawn;
filename = process.argv[2];
if (!filename) {
    throw Error("A file name must be specified");
}
fs.watch(filename, function () {
    let ls = spawn('cat', ['', filename]);
    ls.stdout.pipe(process.stdout);
});
console.log("Now watching " + filename);