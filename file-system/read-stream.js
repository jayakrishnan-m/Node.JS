const fs = require('fs'), stream = fs.createReadStream(process.argv[2]);
console.log(stream.on());
stream.on('data', function(chunk) {
    process.stdout.write(chunk);
});
stream.on('error', function(err) {
    process.stderr.write("Error Occured" + err);
});