"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zauberbild = void 0;
const Http = require("http"); // * = wildcard; also importiere mir alles aus dem Modul http und nenne es Http
const Url = require("url"); //dazu da den url, der mit der request reinkam weiter zu verarbeiten
const Mongo = require("mongodb");
var zauberbild;
(function (zauberbild) {
    let pictures;
    let allPictures = [];
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    let mongoClient;
    let options;
    let databaseUrl = "mongodb+srv://Testuser:TestuserPassword@eia2-ucdf8.mongodb.net/<Testuser>?retryWrites=true&w=majority";
    console.log(process.argv);
    console.log("Hallo " + process.argv[2]);
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Server starting on port:" + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function connectToDatabase(_url) {
        options = { useNewUrlParser: true, useUnifiedTopology: true };
        mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        pictures = mongoClient.db("Zauberbild").collection("Bilder");
    }
    async function handleRequest(_request, _response) {
        console.log("What's up?");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            console.log(url.query);
            let spliturl = _request.url.split('&');
            console.log("SPLIT URL" + spliturl[0]);
            if (spliturl[0] == "/?savePicture") {
                pictures = mongoClient.db("Zauberbild").collection("Bilder");
                (await pictures).insertOne(url.query);
                _response.write("Dein Bild wurde gespeichert!");
                allPictures = [];
            }
            if (spliturl[0] == "/?getImage") {
                let picture = pictures.find({ name: spliturl[1] });
                await picture.forEach(showOrders);
                let jsonString = JSON.stringify(allPictures);
                jsonString.toString();
                _response.write(jsonString);
                allPictures = [];
            }
            if (spliturl[0] == "/?getTitles") {
                let names = pictures.find({}, { projection: { _id: 0, name: true } });
                await names.forEach(showOrders);
                let jsonString = JSON.stringify(allPictures);
                jsonString.toString();
                _response.write(jsonString);
                _response.write(names.toString());
                allPictures = [];
                console.log(names);
            }
        }
        _response.end();
    }
    function showOrders(_item) {
        let jsonString = JSON.stringify(_item);
        allPictures.push(jsonString);
    }
})(zauberbild = exports.zauberbild || (exports.zauberbild = {}));
//# sourceMappingURL=server2.js.map