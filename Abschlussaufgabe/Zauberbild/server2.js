"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zauberbild = void 0;
const Http = require("http"); // * = wildcard; also importiere mir alles aus dem Modul http und nenne es Http
const Url = require("url"); //dazu da den url, der mit der request reinkam weiter zu verarbeiten
const Mongo = require("mongodb");
var zauberbild;
(function (zauberbild) {
    /* interface Picture {
        [type: string]: string | string[] | undefined;
    } */
    let pictures;
    let allPictures = [];
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    let mongoClient;
    let options;
    //mongodb+srv://Testuser:<password>@eia2-ucdf8.mongodb.net/<dbname>?retryWrites=true&w=majority
    let databaseUrl = "mongodb+srv://Testuser:TestuserPassword@eia2-ucdf8.mongodb.net/<Testuser>?retryWrites=true&w=majority";
    // let databaseUrl: string = "mongodb://localhost:27017";
    console.log(process.argv);
    console.log("Hallo " + process.argv[2]);
    startServer(port); //start Server auf Port den wir gefunden haben
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer(); //Server kreieren und in der variable server speichern
        console.log("Server starting on port:" + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    //Verbindung zu Datenbank aufbauen
    async function connectToDatabase(_url) {
        options = { useNewUrlParser: true, useUnifiedTopology: true }; //mit diesen beiden Dingen Verbindung zur Datenbank aufbauen
        mongoClient = new Mongo.MongoClient(_url, options); //mongoclient erzeugen
        await mongoClient.connect(); //Verbinde dich
        pictures = mongoClient.db("Zauberbild").collection("Bilder"); //geh in die Datenbank CocktailBar und hol dir dort aus der Collection Orders
        console.log("Database connection ", pictures != undefined); //hat geklappt oder nicht --> true/false
    }
    /*     let allOrders: string[] = []; */
    async function handleRequest(_request, _response) {
        console.log("What's up?");
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Header gibt an, dass die Antwort ein mit utf-8 kodierter Text ist, also text     
        _response.setHeader("Access-Control-Allow-Origin", "*"); //und dass sie von jedem geöffnet werden darf (Sicherheitsmechanismen werden ausgeschalten)(Asterisk bedeutet wieder "alles") 
        if (_request.url) { //Haben wir überhaupt einen url da, mit dem wir bearbeiten können? --> if
            let url = Url.parse(_request.url, true); //dann url übersetzen lassen mit parser und aufrufen --> parser 
            //--> true: macht aus url gut lesbares assoziatives array
            console.log(url.query);
            let spliturl = _request.url.split('&');
            console.log("SPLIT URL" + spliturl[0]);
            //Bild wird in MongoDB Collection gespeichert
            /* if (splitURL[0] == "/?savePicture") {//ausgewählter Titel mit Titel in Datenbank abgleichen und die richtigen
                //Bilddaten anfordern, raussuchen
                (await pictures).insertOne(url.query);
                _response.write("Dein Bild wurde gespeichert!");
 
             } */
            if (spliturl[0] == "/?savePicture") {
                pictures = mongoClient.db("Zauberbild").collection("Bilder"); //Daten der collection zuordnen
                (await pictures).insertOne(url.query);
                _response.write("Dein Bild wurde gespeichert!");
                allPictures = [];
            }
            if (spliturl[0] == "/?getImage") { //ausgewählter Titel mit Titel in Datenbank abgleichen und die richtigen
                //Bilddaten anfordern, raussuchen
                let picture = pictures.find({ name: spliturl[1] });
                await picture.forEach(showOrders);
                let jsonString = JSON.stringify(allPictures);
                jsonString.toString();
                _response.write(jsonString);
                allPictures = [];
            }
            if (spliturl[0] == "/?getTitles") { //alle Titel aus Datenbank raussuchen
                let names = pictures.find({}, { projection: { _id: 0, name: true } });
                await names.forEach(showOrders);
                let jsonString = JSON.stringify(allPictures);
                jsonString.toString();
                _response.write(jsonString);
                _response.write(names.toString());
                allPictures = [];
                console.log(names);
            }
            /* //Daten aus Datenbank zurückholen
             if (_request.url == "/?getPicture=yes") {
                let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
                let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(databaseUrl, options);
                await mongoClient.connect();
                let orders: Mongo.Collection = mongoClient.db("Zauberbild").collection("Bilder");
                let mongoCursor: Mongo.Cursor<any> = orders.find();
                await mongoCursor.forEach(retrieveOrder);
                let jsonString: string = JSON.stringify(allOrders);
                let answer: string = jsonString.toString();
                _response.write(answer);
                allOrders = [];
            } else {
                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString);
                storeOrder(url.query);
            }  */
        }
        _response.end();
    }
    function showOrders(_item) {
        let jsonString = JSON.stringify(_item);
        allPictures.push(jsonString);
    }
    /* function storeOrder(_order: Order): void {//siehe Interface Order
        orders.insert(_order);
    }

    function retrieveOrder(_item: object): void {  //Funktion von Valentina Schwan kopiert
        let jsonString: string = JSON.stringify(_item);
        allOrders.push(jsonString);
    } */
    /*  let allPictures: string[] = [];
 
     function showOrders(_item: Object): void {
         let jsonString: string = JSON.stringify(_item);
         allPictures.push(jsonString);
     } */
})(zauberbild = exports.zauberbild || (exports.zauberbild = {}));
//# sourceMappingURL=server2.js.map