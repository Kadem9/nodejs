const http = require("http");
const fs = require("fs");

http.createServer((httpRequest, httpResponse) => {
    fs.readFile("tp2/fichier.txt", "utf8", (err, data) => {
        if (err) {
            console.error(err);

            httpResponse.statusCode = 500;
            httpResponse.end("an error has occured");
            return;
        }
        httpResponse.setHeader("Content-Type", "text/plain");
        httpResponse.end(data);
    });
}).listen(3000, () => {
    console.log("Server is running on port 3000");
});