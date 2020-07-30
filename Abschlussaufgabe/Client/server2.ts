import * as Http from "http";// * = wildcard; also importiere mir alles aus dem Modul http und nenne es Http
import * as Url from "url";//dazu da den url, der mit der request reinkam weiter zu verarbeiten
import * as Mongo from "mongodb";


export namespace zauberbild {
    /* interface Picture {
        [type: string]: string | string[] | undefined;
    } */
    let pictures: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;
    let mongoClient: Mongo.MongoClient;
    let options: Mongo.MongoClientOptions; 
    //mongodb+srv://Testuser:<password>@eia2-ucdf8.mongodb.net/<dbname>?retryWrites=true&w=majority
    let databaseUrl: string = "mongodb+srv://Testuser:TestuserPassword@eia2-ucdf8.mongodb.net/<Testuser>?retryWrites=true&w=majority";
    // let databaseUrl: string = "mongodb://localhost:27017";

    console.log(process.argv);
    console.log("Hallo " + process.argv[2]);

    startServer(port); //start Server auf Port den wir gefunden haben
    connectToDatabase(databaseUrl);

    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer(); //Server kreieren und in der variable server speichern
        console.log("Server starting on port:" + _port);

        server.listen(_port);
        server.addListener("request", handleRequest);
    }

    //Verbindung zu Datenbank aufbauen
    async function connectToDatabase(_url: string): Promise<void> {
        options= { useNewUrlParser: true, useUnifiedTopology: true }; //mit diesen beiden Dingen Verbindung zur Datenbank aufbauen
        mongoClient = new Mongo.MongoClient(_url, options);//mongoclient erzeugen
        await mongoClient.connect(); //Verbinde dich
        pictures = mongoClient.db("Zauberbild").collection("Bilder");//geh in die Datenbank CocktailBar und hol dir dort aus der Collection Orders
        console.log("Database connection ", pictures != undefined);//hat geklappt oder nicht --> true/false
    }
/*     let allOrders: string[] = []; */
    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

        console.log("What's up?");

        _response.setHeader("content-type", "text/html; charset=utf-8");//Header gibt an, dass die Antwort ein mit utf-8 kodierter Text ist, also text     
        _response.setHeader("Access-Control-Allow-Origin", "*");//und dass sie von jedem geöffnet werden darf (Sicherheitsmechanismen werden ausgeschalten)(Asterisk bedeutet wieder "alles") 

        if (_request.url) { //Haben wir überhaupt einen url da, mit dem wir bearbeiten können? --> if
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true); //dann url übersetzen lassen mit parser und aufrufen --> parser 
            //--> true: macht aus url gut lesbares assoziatives array
            console.log(url.query);
            let splitURL = _request.url.split('&');
            console.log("SPLIT URL" + splitURL[0]);


            if (splitURL[0] == "/?savePicture") {
                (await pictures).insertOne(url.query);
                _response.write("Daten sind in MongoDB angekommen");
 
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
}
