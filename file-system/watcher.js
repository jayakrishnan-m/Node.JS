const fs = require('fs');
fs.watch('target.txt', function () {
    console.log("Change in file");
});
console.log("Now watching file for changes");