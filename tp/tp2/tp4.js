const fs = require("fs");

fs.readdir("tp2", "utf-8", (err, files) => {
    console.log(files);
});