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
    /*  let id: string; */
    let dataPictures: string[] = [];

    // let symbols: SuperClass[] = [];

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
        canvasEllipse = <HTMLCanvasElement>document.querySelector("#canvasFlash");

        /*         canvasMain.addEventListener("click", drawSymbolOnCanvas);
                canvasStar.addEventListener("click", getID);
                canvasHeart.addEventListener("click", getID);
                canvasMoon.addEventListener("click", getID);
                canvasEllipse.addEventListener("click", getID); */

        crc2 = <CanvasRenderingContext2D>canvasMain.getContext("2d");
        crcStar = <CanvasRenderingContext2D>canvasStar.getContext("2d");
        crcHeart = <CanvasRenderingContext2D>canvasHeart.getContext("2d");
        crcMoon = <CanvasRenderingContext2D>canvasMoon.getContext("2d");
        crcEllipse = <CanvasRenderingContext2D>canvasEllipse.getContext("2d");

        drawStar();
        drawMoon();
        drawHeart();
        drawEllipse();
        drawDefaultCanvas();

        format.addEventListener("change", canvasSize);
        backgroundColor.addEventListener("change", chooseBackground);
        /*         createSymbols(); */

    }

    /*
        function deleteData(): void {
    
            let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
            order.innerHTML = "";
        } */

    function drawDefaultCanvas() {
        crc2.canvas.width = 400;
        crc2.canvas.height = 400;
        crc2.fillStyle = "HSL(249, 100%, 88%)";
        crc2.fill();
        crc2.fillRect(0, 0, 400, 400);

    }
    function drawEllipse() {
        crcEllipse.beginPath();
        crcEllipse.translate(150, 73)
        crcEllipse.scale(0.7, 0.6)
        crcEllipse.arc(0, 0, 100, 0, Math.PI * 2, true);
        crcEllipse.fillStyle = "HSL(0,53%,58%)"
        crcEllipse.fill();
    }
    function drawStar() {
        crcStar.beginPath();
        crcStar.save();
        crcStar.translate(20, 10);
        crcStar.scale(1.2, 0.6);
        //cxt.scale(0.4, 0.4);
        crcStar.moveTo(108, 0.0);
        crcStar.lineTo(141, 70);
        crcStar.lineTo(218, 78.3);
        crcStar.lineTo(162, 131);
        crcStar.lineTo(175, 205);
        crcStar.lineTo(108, 170);
        crcStar.lineTo(41.2, 205);
        crcStar.lineTo(55, 131);
        crcStar.lineTo(1, 78);
        crcStar.lineTo(75, 68);
        crcStar.lineTo(108, 0);
        crcStar.closePath();
        crcStar.fillStyle = "HSL(0,53%,58%)";
        crcStar.fill();
        crcStar.restore();
    }
    function drawMoon() {
        crcMoon.save();
        crcMoon.scale(1.1, 1.3);
        //cxt.scale(0.4, 0.8);
        //crcMoon.translate(this.position.x, this.position.y);
        //crcMoon.fillStyle = this.color;
        //context.lineWidth = 5;
        crcMoon.beginPath();
        crcMoon.bezierCurveTo(170, 0, -100, 60, 170, 110);
        crcMoon.bezierCurveTo(170, 100, 90, 70, 170, 0);
        crcMoon.fillStyle = "HSL(0,53%,58%)";
        crcMoon.fill();
        crcMoon.restore();
    }
    function drawHeart() {
        crcHeart.save();
        crcHeart.scale(1.2, 1.2);
        /*  crcHeart.translate(this.position.x, this.position.y); */
        crcHeart.beginPath();
        crcHeart.moveTo(75, 40);
        crcHeart.bezierCurveTo(75, 37, 70, 25, 50, 25);
        crcHeart.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        crcHeart.bezierCurveTo(20, 80, 40, 102, 75, 120);
        crcHeart.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        crcHeart.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        crcHeart.bezierCurveTo(85, 25, 75, 37, 75, 40);
        crcHeart.fillStyle = "HSL(0,53%,58%)";
        crcHeart.fill();

        crcHeart.restore();
    }






    function canvasSize(_event: Event): void {

        console.log("Canvas Größe wurde ausgewählt");
        let target: HTMLElement = <HTMLElement>_event.target;
        let id: string = target.id;

        switch (id) {

            case "small":
                crc2.canvas.width = 200;
                crc2.canvas.height = 200;

                break;
            case "middle":
                crc2.canvas.width = 300;
                crc2.canvas.height = 300;

                break;
            case "big":
                crc2.canvas.width = 400;
                crc2.canvas.height = 400;

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

    //Abspeichern der ID der Symbole
    /*   function getID(_event: MouseEvent): void {
          let target: HTMLElement = <HTMLElement>_event.target;
          let id = target.id;
          console.log(id);
  
      } */

    /*     function createSymbols(): void {
            for (let i: number = 0; i < 1; i++) {
                let positionX: number = 20;
                let positionY: number = 15;
                let position: Vector = new Vector(positionX, positionY);
                let star: Star = new Star(position);
                star.draw(crcStar);
                // console.log("Sternchen ist hier!");
            }
            for (let i: number = 0; i < 1; i++) {
                let positionX: number = 0;
                let positionY: number = -10;
                let position: Vector = new Vector(positionX, positionY);
                let heart: Heart = new Heart(position);
                heart.draw(crcHeart);
                // console.log("Herzchen auch :)");
            }
            for (let i: number = 0; i < 1; i++) {
                let positionX: number = 20;
                let positionY: number = 5;
                let position: Vector = new Vector(positionX, positionY);
                let moon: Moon = new Moon(position);
                moon.draw(crcMoon);
                // console.log("Mond ebenfalls!");
            }
            for (let i: number = 0; i < 1; i++) {
                let positionX: number = 120;
                let positionY: number = 15;
                let position: Vector = new Vector(positionX, positionY);
                let ellipse: Ellipse = new Ellipse(position);
                ellipse.draw(crcEllipse);
                // console.log("Blitz anwesend :D");
            } */

    async function sendData(_event: Event): Promise<void> {
        console.log("funktion sendData verbunden");
        let nameOfPicture: string | null = prompt("Bennene dein Zauberbild: ");
        if (nameOfPicture != null) {

            dataPictures.push(nameOfPicture);
            dataPictures.push(canvasMain.width.toString(), canvasMain.height.toString());
            dataPictures.push(imgColor);
            console.log(dataPictures);
        }
        let dataServer: string = JSON.stringify(dataPictures); //wandelt Arraxy um, damit der Server es lesen kann 
        let query: URLSearchParams = new URLSearchParams(dataServer);
        let response: Response = await fetch(url + "?safeImage&name=" + "A" + nameOfPicture + "&" + query.toString());
        let responseText: string = await response.text();
        console.log(responseText);
        alert(responseText);
        /*  console.log("DATA SENT");
     let formData: FormData = new FormData(form);
     let query: URLSearchParams = new URLSearchParams(<any>formData);
     let response: Response = await fetch(url + "?" + query.toString());
     let responseText: string = await response.text();
     alert("Thank you for your order!" + "\n" + "\n" + "Order Details:" + "\n" + responseText); */

    }
    //Symbole auf Canvas zeichnen
/*   function drawSymbolOnCanvas(_event: MouseEvent): void { */
/*  for (let symbol of symbols) {
     symbol.active = false;
 } */
/*
        switch (id) {
            case "canvasStar":
                let starx: number = _event.offsetX;
                let stary: number = _event.offsetY;
                let starposition: Vector = new Vector(starx, stary);
                let star: Star = new Star(starposition);
                star.draw(crc2);
                //symbols.push(star);
                id = "";
                break;
            case "canvasHeart":
                let heartx: number = _event.offsetX;
                let hearty: number = _event.offsetY;
                let heartposition: Vector = new Vector(heartx, hearty);
                let heart: Heart = new Heart(heartposition);
                heart.draw(crc2);
                // symbols.push(heart);
                id = "";
                break;
            case "canvasMoon":
                let moonx: number = _event.offsetX;
                let moony: number = _event.offsetY;
                let moonposition: Vector = new Vector(moonx, moony);
                let moon: Moon = new Moon(moonposition);
                moon.draw(crc2);
                //symbols.push(moon);
                id = "";
                break;
            case "canvasEllipse":
                let ellipsex: number = _event.offsetX;
                let ellipsey: number = _event.offsetY;
                let ellipseposition: Vector = new Vector(ellipsex, ellipsey);
                let ellipse: Ellipse = new Ellipse(ellipseposition);
                ellipse.draw(crc2);
                // symbols.push(flash);
                id = "";
                break;
        }

    } */}