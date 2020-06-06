import * as Http from "http";// * = wildcard; also importiere mir alles aus dem Modul http und nenne es Http
import * as Url from "url";//dazu da den url, der mit der request reinkam weiter zu verarbeiten
import * as Mongo from "mongodb";

export namespace A07_Haushaltshilfe {
    interface Order {
        [type: string]: string | string[] | undefined;
    }

    let orders: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;
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
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true}; //mit diesen beiden Dingen Verbindung zur Datenbank aufbauen
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);//mongoclient erzeugen
        await mongoClient.connect(); //Verbinde dich
        orders = mongoClient.db("Haushaltshilfe").collection("Orders");//geh in die Datenbank CocktailBar und hol dir dort aus der Collection Orders
        console.log("Database connection ", orders != undefined);//hat geklappt oder nicht --> true/false
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
/*IncomingMessage: liefert Informationen zur eingegangenen Request, z.B URL als String. 
                            parse: interpretiert den URL und erzeugt daraus ein neues Objekt, dessen Eigenschaft query nun wieder ein assoziatives Array darstellt.
        ServerResponse: Objekt, welches Informationen für die Antwort sammelt.  
                        diese Information wird in zwei grundlegende Kategorien aufgeteilt
                            --> Header: Information zur eigentlichen Nachricht 
                                Body: die Nachricht selbst.*/

        console.log("What's up?");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            } 

            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString); //schreiben wir
            storeOrder(url.query); //übergeben wir //query Objekt wird gebastelt, (Json String wird zu Objekt geparst)
        }

        _response.end();
    }


    function storeOrder(_order: Order): void {//siehe Interface Order
        orders.insert(_order);
    }
}
