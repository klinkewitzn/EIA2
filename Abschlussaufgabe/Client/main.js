"use strict";
var zauberbild;
(function (zauberbild) {
    let url = "https://anewbeginning.herokuapp.com/";
    let backgroundImage; //Variable Image Data deklarieren!!!! (für später: get und put imageData)
    let canvasMain;
    let canvasStar;
    let canvasHeart;
    let canvasMoon;
    let canvasEllipse;
    let backgroundColor;
    let imgColor;
    /*  let id: string; */
    let dataPictures = [];
    // let symbols: SuperClass[] = [];
    window.addEventListener("load", handleLoad);
    //handle Load Funktion
    async function handleLoad(_event) {
        console.log("Funktion Handle Load wird ausgeführt");
        let savebutton = document.querySelector("button[type=submit]");
        /*  let resetbutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=reset]");
  
          resetbutton.addEventListener("click", deleteData);*/
        savebutton.addEventListener("click", sendData);
        let format = document.querySelector("div#chooseSize");
        backgroundColor = document.querySelector("#chooseColor");
        canvasMain = document.getElementById("mainCanvasDraw");
        canvasStar = document.querySelector("#canvasStar");
        canvasHeart = document.querySelector("#canvasHeart");
        canvasMoon = document.querySelector("#canvasMoon");
        canvasEllipse = document.querySelector("#canvasEllipse");
        /*         canvasMain.addEventListener("click", drawSymbolOnCanvas);
                canvasStar.addEventListener("click", getID);
                canvasHeart.addEventListener("click", getID);
                canvasMoon.addEventListener("click", getID);
                canvasEllipse.addEventListener("click", getID); */
        zauberbild.crc2 = canvasMain.getContext("2d");
        zauberbild.crcStar = canvasStar.getContext("2d");
        zauberbild.crcHeart = canvasHeart.getContext("2d");
        zauberbild.crcMoon = canvasMoon.getContext("2d");
        zauberbild.crcEllipse = canvasEllipse.getContext("2d");
        createSymbols();
        //drawStar();
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
        zauberbild.crc2.canvas.width = 400;
        zauberbild.crc2.canvas.height = 400;
        zauberbild.crc2.fillStyle = "HSL(249, 100%, 88%)";
        zauberbild.crc2.fill();
        zauberbild.crc2.fillRect(0, 0, 400, 400);
    }
    function canvasSize(_event) {
        console.log("Canvas Größe wurde ausgewählt");
        let target = _event.target;
        let id = target.id;
        switch (id) {
            case "small":
                zauberbild.crc2.canvas.width = 200;
                zauberbild.crc2.canvas.height = 200;
                break;
            case "middle":
                zauberbild.crc2.canvas.width = 300;
                zauberbild.crc2.canvas.height = 300;
                break;
            case "big":
                zauberbild.crc2.canvas.width = 400;
                zauberbild.crc2.canvas.height = 400;
                break;
        }
        zauberbild.crc2.putImageData(backgroundImage, 0, 0); //putImageData -->die gespeicherten Hintergrunddaten werden bei jeder Aktualisierung auf den canvas "gelegt"
    }
    function chooseBackground(_event) {
        console.log("choose color");
        let target = _event.target;
        let value = target.value;
        switch (value) {
            case "lilac":
                zauberbild.crc2.fillStyle = "HSL(249, 100%, 88%)";
                zauberbild.crc2.fill();
                zauberbild.crc2.fillRect(0, 0, zauberbild.crc2.canvas.width, zauberbild.crc2.canvas.height);
                imgColor = "lilac";
                break;
            case "green":
                zauberbild.crc2.fillStyle = "HSL(99, 100%, 81%)";
                zauberbild.crc2.fill();
                zauberbild.crc2.fillRect(0, 0, zauberbild.crc2.canvas.width, zauberbild.crc2.canvas.height);
                imgColor = "green";
                break;
            case "blush":
                zauberbild.crc2.fillStyle = "HSL(0, 80%, 89%)";
                zauberbild.crc2.fill();
                zauberbild.crc2.fillRect(0, 0, zauberbild.crc2.canvas.width, zauberbild.crc2.canvas.height);
                imgColor = "blush";
                break;
            case "skyblue":
                zauberbild.crc2.fillStyle = "lightblue";
                zauberbild.crc2.fill();
                zauberbild.crc2.fillRect(0, 0, zauberbild.crc2.canvas.width, zauberbild.crc2.canvas.height);
                imgColor = "sky blue";
                break;
            case "butterCream":
                zauberbild.crc2.fillStyle = "HSL(53, 100%, 81%)";
                zauberbild.crc2.fill();
                zauberbild.crc2.fillRect(0, 0, zauberbild.crc2.canvas.width, zauberbild.crc2.canvas.height);
                imgColor = "butter cream";
                break;
        }
        backgroundImage = zauberbild.crc2.getImageData(0, 0, canvasMain.width, canvasMain.height);
    }
    async function sendData(_event) {
        console.log("funktion sendData verbunden");
        let nameOfPicture = prompt("Benenne dein Zauberbild: ");
        if (nameOfPicture != null) {
            dataPictures.push(nameOfPicture);
            dataPictures.push(canvasMain.width.toString(), canvasMain.height.toString());
            dataPictures.push(imgColor);
            console.log(dataPictures);
        }
        let dataServer = JSON.stringify(dataPictures); //wandelt Array um, damit der Server es lesen kann 
        let query = new URLSearchParams(dataServer);
        let response = await fetch(url + "?savePicture&name=" + nameOfPicture + "&" + query.toString());
        let responseText = await response.text();
        console.log(responseText);
        alert(responseText);
        /*  console.log("DATA SENT");
     let formData: FormData = new FormData(form);
     let query: URLSearchParams = new URLSearchParams(<any>formData);
     let response: Response = await fetch(url + "?" + query.toString());
     let responseText: string = await response.text();
     alert("Thank you for your order!" + "\n" + "\n" + "Order Details:" + "\n" + responseText); */
    }
    //Abspeichern der ID der Symbole
    /*   function getID(_event: MouseEvent): void {
          let target: HTMLElement = <HTMLElement>_event.target;
          let id = target.id;
          console.log(id);
  
      } */
    //Symbole werden in ihre Canvas gezeichnet
    function createSymbols() {
        for (let i = 0; i < 1; i++) {
            let positionX = 0;
            let positionY = -10;
            let position = new zauberbild.Vector(positionX, positionY);
            let heart = new zauberbild.Heart(position);
            heart.draw(zauberbild.crcHeart);
            console.log("Herz gezeichnet");
        }
        for (let i = 0; i < 1; i++) {
            let positionX = 20;
            let positionY = 5;
            let position = new zauberbild.Vector(positionX, positionY);
            let moon = new zauberbild.Moon(position);
            moon.draw(zauberbild.crcMoon);
            console.log("Mond gezeichnet");
        }
        for (let i = 0; i < 1; i++) {
            let positionX = 20;
            let positionY = 15;
            let position = new zauberbild.Vector(positionX, positionY);
            let star = new zauberbild.Star(position);
            star.draw(zauberbild.crcStar);
            console.log("Stern");
        }
        for (let i = 0; i < 1; i++) {
            let positionX = 120;
            let positionY = 15;
            let position = new zauberbild.Vector(positionX, positionY);
            let ellipse = new zauberbild.Ellipse(position);
            ellipse.draw(zauberbild.crcEllipse);
            console.log("Ellipse gezeichnet");
        }
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
    
        } */ 
})(zauberbild || (zauberbild = {}));
//# sourceMappingURL=main.js.map