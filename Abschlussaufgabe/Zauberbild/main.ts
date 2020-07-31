namespace zauberbild {
    let url: string = "https://anewbeginning.herokuapp.com/";
    //Variablen deklarieren
    export let crc2: CanvasRenderingContext2D;
    export let crcHeart: CanvasRenderingContext2D;
    export let crcStar: CanvasRenderingContext2D;
    export let crcEllipse: CanvasRenderingContext2D;
    export let crcMoon: CanvasRenderingContext2D;

    let backgroundImage: ImageData; //Variable Image Data deklarieren!!!! (für später: get und put imageData)
    let canvasMain: HTMLCanvasElement;
    let canvasStar: HTMLCanvasElement;
    let canvasHeart: HTMLCanvasElement;
    let canvasMoon: HTMLCanvasElement;
    let canvasEllipse: HTMLCanvasElement;
    let backgroundColor: HTMLSelectElement;
    let imgColor: string;
    let id: string;
    let dataPictures: string[] = [];
    let symbols: Symbol[] = [];

    window.addEventListener("load", handleLoad);
    //handle Load Funktion
    async function handleLoad(_event: Event): Promise<void> {

        console.log("Funktion Handle Load wird ausgeführt");

        let savebutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=submit]");
        /*  let resetbutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=reset]");
  
          resetbutton.addEventListener("click", deleteData);*/
        savebutton.addEventListener("click", sendData);

        let format: HTMLDivElement = <HTMLDivElement>document.querySelector("div#chooseSize");
        backgroundColor = <HTMLSelectElement>document.querySelector("#chooseColor");

        canvasMain = <HTMLCanvasElement>document.getElementById("mainCanvasDraw");
        canvasStar = <HTMLCanvasElement>document.querySelector("#canvasStar");
        canvasHeart = <HTMLCanvasElement>document.querySelector("#canvasHeart");
        canvasMoon = <HTMLCanvasElement>document.querySelector("#canvasMoon");
        canvasEllipse = <HTMLCanvasElement>document.querySelector("#canvasEllipse");

        canvasMain.addEventListener("click", drawSymbolOnMainCanvas);
        canvasStar.addEventListener("click", getID);
        canvasHeart.addEventListener("click", getID);
        canvasMoon.addEventListener("click", getID);
        canvasEllipse.addEventListener("click", getID);

        crc2 = <CanvasRenderingContext2D>canvasMain.getContext("2d");
        crcStar = <CanvasRenderingContext2D>canvasStar.getContext("2d");
        crcHeart = <CanvasRenderingContext2D>canvasHeart.getContext("2d");
        crcMoon = <CanvasRenderingContext2D>canvasMoon.getContext("2d");
        crcEllipse = <CanvasRenderingContext2D>canvasEllipse.getContext("2d");

        createSymbols();
        drawDefaultCanvas();

        format.addEventListener("change", canvasSize);
        backgroundColor.addEventListener("change", chooseBackground);


    }

    /*
        function deleteData(): void {
    
            let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
            order.innerHTML = "";
        } */

    function drawDefaultCanvas() {
        crc2.save();
        crc2.canvas.width = 400;
        crc2.canvas.height = 400;
        crc2.fillStyle = "HSL(249, 100%, 88%)";
        crc2.fill();
        crc2.fillRect(0, 0, 400, 400);
        crc2.restore();

    }

    function canvasSize(_event: Event): void {

        console.log("Canvas Größe wurde ausgewählt");
        let target: HTMLElement = <HTMLElement>_event.target;
        let id: string = target.id;

        switch (id) {

            case "small":
                crc2.save();
                crc2.canvas.width = 300;
                crc2.canvas.height = 300;
                crc2.restore();
                break;
            case "middle":
                crc2.save();
                crc2.canvas.width = 400;
                crc2.canvas.height = 400;
                crc2.restore();
                break;
            case "big":
                crc2.save();
                crc2.canvas.width = 700;
                crc2.canvas.height = 800;
                crc2.restore();
                break;
        }
        crc2.putImageData(backgroundImage, 0, 0); //putImageData -->die gespeicherten Hintergrunddaten werden bei jeder Aktualisierung auf den canvas "gelegt"
    }

    function chooseBackground(_event: Event): void {

        console.log("choose color");



        let target: HTMLSelectElement = <HTMLSelectElement>_event.target;
        let value: string = target.value;


        switch (value) {

            case "lilac":
                crc2.fillStyle = "HSL(249, 100%, 88%)";
                crc2.fill();
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
                imgColor = "lilac"

                break;
            case "green":
                crc2.fillStyle = "HSL(99, 100%, 81%)";
                crc2.fill();
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
                imgColor = "green"

                break;
            case "blush":
                crc2.fillStyle = "HSL(0, 80%, 89%)";
                crc2.fill();
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
                imgColor = "blush"

                break;
            case "skyblue":

                crc2.fillStyle = "lightblue";
                crc2.fill();
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
                imgColor = "sky blue"

                break;
            case "butterCream":

                crc2.fillStyle = "HSL(53, 100%, 81%)";
                crc2.fill();
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
                imgColor = "butter cream"

                break;

        }
        backgroundImage = crc2.getImageData(0, 0, canvasMain.width, canvasMain.height);

    }
    async function sendData(_event: Event): Promise<void> {
        console.log("funktion sendData verbunden");
        let nameOfPicture: string | null = prompt("Benenne dein Zauberbild: ");
        if (nameOfPicture != null) {

            dataPictures.push(nameOfPicture);
            dataPictures.push(canvasMain.width.toString(), canvasMain.height.toString());
            dataPictures.push(imgColor);
            console.log(dataPictures);
        }
        let dataServer: string = JSON.stringify(dataPictures); //wandelt Array um, damit der Server es lesen kann 
        let query: URLSearchParams = new URLSearchParams(dataServer);
        let response: Response = await fetch(url + "?savePicture&name=" + nameOfPicture + "&" + query.toString());
        let responseText: string = await response.text();
        console.log(responseText);
        alert(responseText);

    }
    //Abspeichern der ID der Symbole
    function getID(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        id = target.id;
        console.log("getting ID of" + id);
    }

    //Symbole werden in ihre Canvas gezeichnet
    function createSymbols(): void {

        for (let i: number = 0; i < 1; i++) {
            let positionX: number = 0;
            let positionY: number = -10;
            let position: Vector = new Vector(positionX, positionY);
            let heart: Heart = new Heart(position);
            heart.draw(crcHeart);
            //console.log("Herz gezeichnet");
        }

        for (let i: number = 0; i < 1; i++) {
            let positionX: number = 20;
            let positionY: number = 5;
            let position: Vector = new Vector(positionX, positionY);
            let moon: Moon = new Moon(position);
            moon.draw(crcMoon);
           // console.log("Mond gezeichnet");
        }

        for (let i: number = 0; i < 1; i++) {
            let positionX: number = 20;
            let positionY: number = 15;
            let position: Vector = new Vector(positionX, positionY);
            let star: Star = new Star(position);
            star.draw(crcStar);
            //console.log("Stern");
        }

        for (let i: number = 0; i < 1; i++) {
            let positionX: number = 120;
            let positionY: number = 15;
            let position: Vector = new Vector(positionX, positionY);
            let ellipse: Ellipse = new Ellipse(position);
            ellipse.draw(crcEllipse);
           // console.log("Ellipse gezeichnet");
        }

    }

    //Symbole auf Canvas zeichnen
    function drawSymbolOnMainCanvas(_event: MouseEvent): void {
        console.log("Symbole werden auf Main Canvas gezeichnet");
        for (let symbol of symbols) {
            symbol.active = false;
        }
        switch (id) {
            case "canvasStar":
                console.log(_event);
                let starx: number = _event.offsetX;
                let stary: number = _event.offsetY;
                let starposition: Vector = new Vector(starx, stary);
                let star: Star = new Star(starposition);
                star.draw(crc2);
                symbols.push(star);
                id = "";
                break;
            case "canvasHeart":
                let heartx: number = _event.offsetX;
                let hearty: number = _event.offsetY;
                let heartposition: Vector = new Vector(heartx, hearty);
                let heart: Heart = new Heart(heartposition);
                heart.draw(crc2);
                symbols.push(heart);
                id = "";
                break;
            case "canvasMoon":
                let moonx: number = _event.offsetX;
                let moony: number = _event.offsetY;
                let moonposition: Vector = new Vector(moonx, moony);
                let moon: Moon = new Moon(moonposition);
                moon.draw(crc2);
                symbols.push(moon);
                id = "";
                break;
            case "canvasEllipse":
                let ellipsex: number = _event.offsetX;
                let ellipsey: number = _event.offsetY;
                let ellipseposition: Vector = new Vector(ellipsex, ellipsey);
                let ellipse: Ellipse = new Ellipse(ellipseposition);
                ellipse.draw(crc2);
                symbols.push(ellipse);
                id = "";
                break;
        }

    }
}