"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A07_Haushaltshilfe = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var A07_Haushaltshilfe;
(function (A07_Haushaltshilfe) {
    let orders;
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    //mongodb+srv://Testuser:<password>@eia2-ucdf8.mongodb.net/<dbname>?retryWrites=true&w=majority
    let databaseUrl = "mongodb+srv://Testuser:TestuserPassword@eia2-ucdf8.mongodb.net/<Testuser>?retryWrites=true&w=majority";
    startServer(port); //start Server auf Port den wir gefunden haben
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Server starting on port:" + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true }; //mit diesen beiden Dingen Verbindung zur Datenbank aufbauen
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect(); //Verbinde dich
        orders = mongoClient.db("Haushaltshilfe").collection("Orders"); //geh in die Datenbank CocktailBar und hol dir dort aus der Collection Orders
        console.log("Database connection ", orders != undefined);
    }
    function handleRequest(_request, _response) {
        console.log("What's up?");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString); //schreiben wir
            storeOrder(url.query); //übergeben wir //query Objekt wird gebastelt, (Json String wird zu Objekt geparst)
        }
        _response.end();
    }
    function storeOrder(_order) {
        orders.insert(_order);
    }
})(A07_Haushaltshilfe = exports.A07_Haushaltshilfe || (exports.A07_Haushaltshilfe = {}));
//# sourceMappingURL=Server.js.map