const
    fs = require('fs'),
    net = require('net'),
    filename = process.argv[2],
    server = net.createServer(function (connection) {
        console.log("Subscriber connected");
        connection.write("Now watichin " + filename + " for changes...\n");
        let watcher = fs.watch(filename, function () {
            connection.write("File " + filename + " changed " + Date.now() + " \n");
        });
        connection.on("close", function () {
            console.log("Subscriber disconnected");
            watcher.close();
        });
    });
if (!filename) {
    throw Error("No file exsists");
}
server.listen(5455, function () {
    console.log('Listening for subscriber');
});