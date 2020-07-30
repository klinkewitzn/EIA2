import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
// benötigten module importieren


export namespace zauberbild {
    interface Picture {
        [type: string]: string | string[] | undefined;
    }

    let pictures: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;
    let mongoClient: Mongo.MongoClient;
    let options: Mongo.MongoClientOptions;

    let databaseUrl: string = "mongodb+srv://HelenS:hollywood@clustereia2-hgdoe.mongodb.net/test?retryWrites=true&w=majority";
    // link von MondoDB zur Verbindung 

    startServer(port);
    connectToDatabase(databaseUrl);

    //hallo


    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer(); //Server wird erstellt auf bestimmten Port

        console.log("Server starting on port:" + _port);
        server.listen(_port); //server hört auf diesem Port -> öffnet sich 
        server.addListener("request", handleRequest); //wenn Server eine Request erhält soll handleRequest ausgeführt werden
    }
    async function connectToDatabase(_url: string): Promise<void> { //Verbindung zwischen Server und Datenbank herstellen
        options = { useNewUrlParser: true, useUnifiedTopology: true };
        mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        pictures = mongoClient.db("Haushalt").collection("Pictures");
        
        console.log("Database is connected", pictures != undefined);
        

    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {  //requests aufteilen und unterscheiden 
        console.log("Whats up");
        console.log(_request.url);

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true); //umschreiben der request für datenbank ???
            let spliturl: string[] = _request.url.split("&");  //url aufteilen

            if (spliturl[0] == "/?saveImage") {
               pictures = mongoClient.db("Haushalt").collection("Pictures"); //Daten der collection zuordnen
               await(pictures).insertOne(url.query);
               _response.write("Picture saved");
            
            }

            if (spliturl[0] == "/?getImage") {               //ausgewählter Titel mit Titel in Datenbank abgleichen und die richtigen
                                                             //Bilddaten anfordern, raussuchen
            

            }

            if (spliturl[0] == "/?getTitles") {   //alle Titel aus Datenbank raussuchen

                let names: Mongo.Cursor<any> = pictures.find({name: "A"});
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
    function storeOrder(_picture: Picture): void {
        pictures.insert(_picture);
    }

    let allPictures: string[] = [];

    function showOrders(_item: Object): void {
        let jsonString: string = JSON.stringify(_item);
        allPictures.push(jsonString);
    }
}