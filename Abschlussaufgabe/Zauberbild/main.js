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
    let id;
    let dataPictures = [];
    let symbols = [];
    window.addEventListener("load", handleLoad);
    //handle Load Funktion
    async function handleLoad(_event) {
        console.log("Funktion Handle Load wird ausgeführt");
        let savebutton = document.querySelector("button[type=submit]");
        let deletebutton = document.querySelector("button[type=reset]");
        /* deletebutton.addEventListener("click", deleteData); */
        savebutton.addEventListener("click", sendData);
        let format = document.querySelector("div#chooseSize");
        backgroundColor = document.querySelector("#chooseColor");
        canvasMain = document.getElementById("mainCanvasDraw");
        canvasStar = document.querySelector("#canvasStar");
        canvasHeart = document.querySelector("#canvasHeart");
        canvasMoon = document.querySelector("#canvasMoon");
        canvasEllipse = document.querySelector("#canvasEllipse");
        var domRect = canvasMain.getBoundingClientRect();
        console.log(domRect);
        let a = canvasMain.getBoundingClientRect().left;
        console.log(a);
        let b = canvasMain.getBoundingClientRect().top;
        console.log(b);
        canvasMain.addEventListener("click", drawSymbolOnMainCanvas);
        canvasStar.addEventListener("click", getID);
        canvasHeart.addEventListener("click", getID);
        canvasMoon.addEventListener("click", getID);
        canvasEllipse.addEventListener("click", getID);
        /*  canvasMain.addEventListener("click", deleteSymbol); */
        zauberbild.crc2 = canvasMain.getContext("2d");
        zauberbild.crcStar = canvasStar.getContext("2d");
        zauberbild.crcHeart = canvasHeart.getContext("2d");
        zauberbild.crcMoon = canvasMoon.getContext("2d");
        zauberbild.crcEllipse = canvasEllipse.getContext("2d");
        createSymbols();
        drawDefaultCanvas();
        canvasMain = document.getElementById("mainCanvasDraw");
        zauberbild.crc2 = canvasMain.getContext("2d");
        backgroundImage = zauberbild.crc2.getImageData(0, 0, canvasMain.width, canvasMain.height);
        format.addEventListener("change", canvasSize);
        0;
        backgroundColor.addEventListener("change", chooseBackground);
        console.log(symbols);
    }
    /*  function deleteSymbol();
     function deleteData(): void {
 
         let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
         order.innerHTML = "";
     } */
    function drawDefaultCanvas() {
        zauberbild.crc2.save();
        zauberbild.crc2.canvas.width = 400;
        zauberbild.crc2.canvas.height = 400;
        zauberbild.crc2.fillStyle = "HSL(249, 100%, 88%)";
        zauberbild.crc2.fill();
        zauberbild.crc2.fillRect(0, 0, 400, 400);
        zauberbild.crc2.restore();
    }
    function canvasSize(_event) {
        console.log("Canvas Größe wurde ausgewählt");
        let target = _event.target;
        let id = target.id;
        switch (id) {
            case "small":
                zauberbild.crc2.save();
                zauberbild.crc2.canvas.width = 300;
                zauberbild.crc2.canvas.height = 300;
                zauberbild.crc2.restore();
                break;
            case "middle":
                zauberbild.crc2.save();
                zauberbild.crc2.canvas.width = 400;
                zauberbild.crc2.canvas.height = 400;
                zauberbild.crc2.restore();
                break;
            case "big":
                zauberbild.crc2.save();
                zauberbild.crc2.canvas.width = 700;
                zauberbild.crc2.canvas.height = 800;
                zauberbild.crc2.restore();
                break;
        }
        backgroundImage = zauberbild.crc2.getImageData(0, 0, canvasMain.width, canvasMain.height);
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
        zauberbild.crc2.putImageData(backgroundImage, 0, 0);
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
    }
    //Abspeichern der ID der Symbole
    function getID(_event) {
        let target = _event.target;
        id = target.id;
        console.log("getting ID of" + id);
    }
    //Symbole werden in ihre Canvas gezeichnet
    function createSymbols() {
        let positionstar = new zauberbild.Vector(0, 0);
        let star = new zauberbild.Star(positionstar);
        zauberbild.crcStar.translate(150, 70);
        star.draw(zauberbild.crcStar);
        let positionellipse = new zauberbild.Vector(0, 0);
        let ellipse = new zauberbild.Ellipse(positionellipse);
        zauberbild.crcEllipse.scale(3.3, 1.8);
        zauberbild.crcEllipse.translate(50, 40);
        ellipse.draw(zauberbild.crcEllipse);
        let positionheart = new zauberbild.Vector(0, 0);
        let heart = new zauberbild.Heart(positionheart);
        zauberbild.crcHeart.translate(90, 80);
        heart.draw(zauberbild.crcHeart);
        let positionmoon = new zauberbild.Vector(0, 0);
        let moon = new zauberbild.Moon(positionmoon);
        zauberbild.crcMoon.translate(150, 70);
        moon.draw(zauberbild.crcMoon);
        /* for (let i: number = 0; i < 1; i++) {
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
        } */
    }
    //Symbole auf Canvas zeichnen
    function drawSymbolOnMainCanvas(_event) {
        console.log("Symbole werden auf Main Canvas gezeichnet");
        for (let symbol of symbols) {
            symbol.active = false;
        }
        switch (id) {
            case "canvasStar":
                console.log(_event);
                let starx = _event.offsetX;
                let stary = _event.offsetY;
                let starposition = new zauberbild.Vector(starx, stary);
                let star = new zauberbild.Star(starposition);
                star.draw(zauberbild.crc2);
                symbols.push(star);
                id = "";
                break;
            case "canvasHeart":
                console.log(_event);
                let heartx = _event.offsetX;
                let hearty = _event.offsetY;
                let heartposition = new zauberbild.Vector(heartx, hearty);
                let heart = new zauberbild.Heart(heartposition);
                heart.draw(zauberbild.crc2);
                symbols.push(heart);
                id = "";
                break;
            case "canvasMoon":
                console.log(_event);
                let moonx = _event.offsetX;
                let moony = _event.offsetY;
                let moonposition = new zauberbild.Vector(moonx, moony);
                let moon = new zauberbild.Moon(moonposition);
                moon.draw(zauberbild.crc2);
                symbols.push(moon);
                id = "";
                break;
            case "canvasEllipse":
                let ellipsex = _event.offsetX;
                let ellipsey = _event.offsetY;
                let ellipseposition = new zauberbild.Vector(ellipsex, ellipsey);
                let ellipse = new zauberbild.Ellipse(ellipseposition);
                ellipse.draw(zauberbild.crc2);
                symbols.push(ellipse);
                id = "";
                break;
        }
        console.log(symbols);
        update();
    }
    function update() {
        console.log("Funktion update wird durchgeführt");
        zauberbild.crc2.putImageData(backgroundImage, 0, 0); //putImageData -->die gespeicherten Hintergrunddaten werden bei jeder aktualisierung auf den canvas "gelegt"
        for (let symbol of symbols) { //mittels "if instance of corona/antibody/humancell/part." wäre auch möglich verschiedene Geschwindigkeiten anzugeben
            symbol.move(1 / 30);
        }
    }
})(zauberbild || (zauberbild = {}));
//# sourceMappingURL=main.js.map