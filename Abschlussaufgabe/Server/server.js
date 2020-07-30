"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zauberbild = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
// benötigten module importieren
var zauberbild;
(function (zauberbild) {
    let pictures;
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    let mongoClient;
    let options;
    let databaseUrl = "mongodb+srv://HelenS:hollywood@clustereia2-hgdoe.mongodb.net/test?retryWrites=true&w=majority";
    // link von MondoDB zur Verbindung 
    startServer(port);
    connectToDatabase(databaseUrl);
    //hallo
    function startServer(_port) {
        let server = Http.createServer(); //Server wird erstellt auf bestimmten Port
        console.log("Server starting on port:" + _port);
        server.listen(_port); //server hört auf diesem Port -> öffnet sich 
        server.addListener("request", handleRequest); //wenn Server eine Request erhält soll handleRequest ausgeführt werden
    }
    async function connectToDatabase(_url) {
        options = { useNewUrlParser: true, useUnifiedTopology: true };
        mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        pictures = mongoClient.db("Haushalt").collection("Pictures");
        console.log("Database is connected", pictures != undefined);
    }
    async function handleRequest(_request, _response) {
        console.log("Whats up");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true); //umschreiben der request für datenbank ???
            let spliturl = _request.url.split("&"); //url aufteilen
            if (spliturl[0] == "/?saveImage") {
                pictures = mongoClient.db("Haushalt").collection("Pictures"); //Daten der collection zuordnen
                await (pictures).insertOne(url.query);
                _response.write("Picture saved");
            }
            if (spliturl[0] == "/?getImage") { //ausgewählter Titel mit Titel in Datenbank abgleichen und die richtigen
                //Bilddaten anfordern, raussuchen
            }
            if (spliturl[0] == "/?getTitles") { //alle Titel aus Datenbank raussuchen
                let names = pictures.find({ name: "A" });
                console.log(names);
            }
            //let jsonString: string = JSON.stringify(url.query);
            //_response.write(jsonString);
            storeOrder(url.query);
        }
        /* async function retrieveOrders (_picture: Picture): Promise<void> {
             let cursor: Mongo.Cursor<any> = await pictures.find();
             await cursor.forEach(showOrders);
           
     
         } */
        // _response.write("This is my response");
        _response.end();
    }
    function storeOrder(_picture) {
        pictures.insert(_picture);
    }
    let allPictures = [];
    function showOrders(_item) {
        let jsonString = JSON.stringify(_item);
        allPictures.push(jsonString);
    }
})(zauberbild = exports.zauberbild || (exports.zauberbild = {}));
//# sourceMappingURL=server.js.map