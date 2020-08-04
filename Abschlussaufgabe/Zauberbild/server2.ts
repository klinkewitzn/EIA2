import * as Http from "http";// * = wildcard; also importiere mir alles aus dem Modul http und nenne es Http
import * as Url from "url";//dazu da den url, der mit der request reinkam weiter zu verarbeiten
import * as Mongo from "mongodb";


export namespace zauberbild {
 
    let pictures: Mongo.Collection;
    let allPictures: string[] = [];
    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;
    let mongoClient: Mongo.MongoClient;
    let options: Mongo.MongoClientOptions; 
 
    let databaseUrl: string = "mongodb+srv://Testuser:TestuserPassword@eia2-ucdf8.mongodb.net/<Testuser>?retryWrites=true&w=majority";

    console.log(process.argv);
    console.log("Hallo " + process.argv[2]);

    startServer(port); 
    connectToDatabase(databaseUrl);

    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer(); 
        console.log("Server starting on port:" + _port);

        server.listen(_port);
        server.addListener("request", handleRequest);
    }


    async function connectToDatabase(_url: string): Promise<void> {
        options= { useNewUrlParser: true, useUnifiedTopology: true }; 
        mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        pictures = mongoClient.db("Zauberbild").collection("Bilder");
        
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

        console.log("What's up?");

        _response.setHeader("content-type", "text/html; charset=utf-8"); 
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) { 
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

            console.log(url.query);
            let spliturl: string[] = _request.url.split('&');
            console.log("SPLIT URL" + spliturl[0]);

             if (spliturl[0] == "/?savePicture") {
                pictures = mongoClient.db("Zauberbild").collection("Bilder"); 
                (await pictures).insertOne(url.query);
                _response.write("Dein Bild wurde gespeichert!");
                allPictures = [];
            }
            if (spliturl[0] == "/?getImage") {
              
                let picture: Mongo.Cursor<any> = pictures.find({name: spliturl[1]});
                await picture.forEach(showOrders); 
                let jsonString: String = JSON.stringify(allPictures);
                jsonString.toString();
                _response.write(jsonString);
                allPictures = [];
            }
            if (spliturl[0] == "/?getTitles") {
                let names: Mongo.Cursor<any> = pictures.find({}, { projection: { _id: 0, name: true }});
                await names.forEach(showOrders); 
                let jsonString: String = JSON.stringify(allPictures);
                jsonString.toString();
                _response.write(jsonString); 
                _response.write(names.toString()); 
                allPictures = [];
                console.log(names);
            }
        }
        _response.end();
    }
    function showOrders(_item: Object): void {
        let jsonString: string = JSON.stringify(_item);
        allPictures.push(jsonString);
    }
}
