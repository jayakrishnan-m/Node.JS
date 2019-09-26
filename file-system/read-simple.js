const fs = require('fs');
fs.readFile('test.mp3', function(err, data){
    if(err) {
        throw err;
    }
    console.log("File Contents :" + data);
});