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
    let trash = false;
    //let rotates: boolean = false;
    let dragDrop = false;
    let objectDragDrop;
    let colors = ["#FFC0CB", "#FF1493", "#E6E6FA", "#9370DB", "#4B0082", "#FA8072", "#DC143C", "#FF0000", "#FFA500", "#FFD700", "#FFFF00",
        "#FFE4B5", "#32CD32", "#90EE90", "#008000", "#66CDAA", "#48D1CC", "#B0C4DE", "#87CEFA", "#0000FF", "#DCDCDC", "#FFFAFA", "#F5F5DC"];
    let coloring;
    let coloring2;
    let coloring3;
    //for get Images back
    let list;
    let inputTitle;
    window.addEventListener("load", handleLoad);
    //handle Load Funktion
    async function handleLoad(_event) {
        console.log("Funktion Handle Load wird ausgeführt");
        let savebutton = document.querySelector("button[type=submit]");
        let deletebutton = document.querySelector("button[type=reset]");
        /* let rotatebutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#rotateSymbol"); */
        let colorbutton = document.querySelector("#colorSymbol");
        list = document.querySelector("datalist#titles");
        inputTitle = document.querySelector("#namePic");
        let format = document.querySelector("div#chooseSize");
        backgroundColor = document.querySelector("#chooseColor");
        canvasMain = document.getElementById("mainCanvasDraw");
        canvasStar = document.querySelector("#canvasStar");
        canvasHeart = document.querySelector("#canvasHeart");
        canvasMoon = document.querySelector("#canvasMoon");
        canvasEllipse = document.querySelector("#canvasEllipse");
        format.addEventListener("change", canvasSize);
        0;
        //backgroundColor.addEventListener("change", chooseBackground);
        backgroundColor.addEventListener("change", function () {
            chooseBackground();
        });
        canvasMain.addEventListener("click", drawSymbolOnMainCanvas);
        canvasStar.addEventListener("click", getID);
        canvasHeart.addEventListener("click", getID);
        canvasMoon.addEventListener("click", getID);
        canvasEllipse.addEventListener("click", getID);
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
        //document.getElementById("mainCanvasDraw")?.addEventListener("click", function (): void {  setInterval(rotateform, 50);(<MouseEvent>event, rotates); });
        //document.addEventListener("keydown", function (): void { rotatemode(<KeyboardEvent>event); });
        // rotatebutton.
        /*  setInterval(rotateform, 50); */
        setInterval(update, 50);
        document.getElementById("mainCanvasDraw")?.addEventListener("click", function () { deleteform(event, trash); });
        document.addEventListener("keydown", function () { deletemode(event); });
        console.log(symbols);
        colorbutton.addEventListener("click", changeColor);
        //rotatebutton.addEventListener("click", changeRotation);
        /*
                canvasMain.addEventListener("mousedown", clickSymbol);
                canvasMain.addEventListener("mouseup", dropSymbol);
                canvasMain.addEventListener("mousemove", dragSymbol); */
        deletebutton.addEventListener("click", clearCanvas);
        savebutton.addEventListener("click", sendData);
        getTitles();
        inputTitle.addEventListener("change", chosenTitle);
    }
    function clearCanvas() {
        symbols = [];
    }
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
                zauberbild.crc2.canvas.width = 600;
                zauberbild.crc2.canvas.height = 600;
                zauberbild.crc2.restore();
                break;
        }
        backgroundImage = zauberbild.crc2.getImageData(0, 0, canvasMain.width, canvasMain.height);
        zauberbild.crc2.putImageData(backgroundImage, 0, 0); //putImageData -->die gespeicherten Hintergrunddaten werden bei jeder Aktualisierung auf den canvas "gelegt"
    }
    function chooseBackground(_color) {
        console.log("choose color");
        //let target: HTMLSelectElement = <HTMLSelectElement>_event.target;
        //let value: string = target.value;
        let colors = document.querySelector("select#chooseColor");
        let color = colors.value;
        switch (color) {
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
    /*    async function sendData(_event: Event): Promise<void> {
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
       } */
    async function sendData(_event) {
        console.log("funktion sendData verbunden");
        let nameOfPicture = prompt("Benenne dein Zauberbild: ");
        if (nameOfPicture == null || nameOfPicture == "") {
            alert("Du musst deinem Bild einen Namen geben, damit es gespeichert werden kann");
            prompt("Benenne dein Zauberbild: ");
        }
        else if (nameOfPicture != null) {
            //dataPictures.push(nameOfPicture); 
            dataPictures.push(canvasMain.width.toString(), canvasMain.height.toString());
            dataPictures.push(imgColor);
            for (let symbol of symbols) {
                dataPictures.push(Math.floor(symbol.position.x).toString(), Math.floor(symbol.position.y).toString());
                dataPictures.push(symbol.color);
                if (symbol instanceof zauberbild.Moon) {
                    dataPictures.push("moon");
                }
                if (symbol instanceof zauberbild.Star) {
                    dataPictures.push("star");
                }
                if (symbol instanceof zauberbild.Ellipse) {
                    dataPictures.push("ellipse");
                }
                if (symbol instanceof zauberbild.Heart) {
                    dataPictures.push("heart");
                }
            }
        }
        let dataServer = JSON.stringify(dataPictures); //wandelt Array um, damit der Server es lesen kann 
        let query = new URLSearchParams(dataServer);
        let response = await fetch(url + "?savePicture&name=" + nameOfPicture + "&" + query.toString());
        let responseText = await response.text();
        console.log(responseText);
        alert("Bild wurde gespeichert");
        //let data: Data = JSON.parse(texte); 
    }
    async function showTitles(_response) {
        let databaseContent = document.querySelector("#namePic");
        let replace = _response.replace(/\\|\[|Object|object|{|}|"|name|:|]/g, ""); //g-> sonderzeichen von allen Elemten im string entfernt, nicht nur das erste
        let prettyArray = replace.split(","); //server antwort aufteilen 
        databaseContent.innerHTML = "";
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
        for (let title of prettyArray) {
            if (title == "") {
                //databaseContent.innerHTML += "<br>"  + title;
            }
            else {
                let option = document.createElement("option");
                option.setAttribute("name", title);
                option.value = title;
                list.appendChild(option);
            }
        }
    }
    async function getTitles() {
        let response = await fetch(url + "?getTitles&");
        let texte = await response.text();
        console.log(texte);
        showTitles(texte);
    }
    async function getImage(_pictureTitle) {
        let response = await fetch(url + "?getImage&" + _pictureTitle);
        let texte = await response.text();
        let replace = texte.replace(/\\|\[|{|}|"|name|:|]/g, "");
        let prettyArray = replace.split(",");
        console.log(prettyArray);
        zauberbild.crc2.canvas.width = parseInt(prettyArray[3]);
        zauberbild.crc2.canvas.height = parseInt(prettyArray[4]);
        imgColor = prettyArray[5];
        chooseBackground(prettyArray[5]);
        let info = [];
        prettyArray.splice(0, 6);
        for (let i = 0; i < prettyArray.length; i++) {
            switch (prettyArray[i]) {
                case "moon":
                    let position = new zauberbild.Vector(parseInt(info[0]), parseInt(info[1]));
                    let moon = new zauberbild.Moon(position, info[2]);
                    moon.draw(zauberbild.crc2);
                    symbols.push(moon);
                    info = [];
                    break;
                case "ellipse":
                    let positionCircle = new zauberbild.Vector(parseInt(info[0]), parseInt(info[1]));
                    let ellipse = new zauberbild.Ellipse(positionCircle, info[2]);
                    ellipse.draw(zauberbild.crc2);
                    symbols.push(ellipse);
                    info = [];
                    break;
                case "heart":
                    let positionHeart = new zauberbild.Vector(parseInt(info[0]), parseInt(info[1]));
                    let heart = new zauberbild.Heart(positionHeart, info[2]);
                    heart.draw(zauberbild.crc2);
                    symbols.push(heart);
                    info = [];
                    break;
                case "star":
                    let positionStar = new zauberbild.Vector(parseInt(info[0]), parseInt(info[1]));
                    let star = new zauberbild.Star(positionStar, info[2]);
                    star.draw(zauberbild.crc2);
                    symbols.push(star);
                    info = [];
                    break;
                default:
                    info.push(prettyArray[i]);
                    break;
            }
        }
    }
    function chosenTitle(_event) {
        let value = inputTitle.value;
        getImage(value);
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
        zauberbild.crcStar.scale(2, 1);
        zauberbild.crcStar.translate(70, 70);
        zauberbild.crcStar.rotate(30 * Math.PI / 150);
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
        zauberbild.crcMoon.scale(2, 1);
        zauberbild.crcMoon.translate(70, 70);
        moon.draw(zauberbild.crcMoon);
    }
    //Symbole auf Canvas zeichnen
    function drawSymbolOnMainCanvas(_event) {
        console.log("Symbole werden auf Main Canvas gezeichnet");
        /* for (let symbol of symbols) {
            //symbol.active = false;
        } */
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
        for (let symbol of symbols) {
            console.log(symbol.position);
        }
        console.log(symbols);
    }
    function update() {
        console.log("Funktion update wird durchgeführt");
        zauberbild.crc2.putImageData(backgroundImage, 0, 0); //putImageData -->die gespeicherten Hintergrunddaten werden bei jeder aktualisierung auf den canvas "gelegt"
        //drag and drop
        if (dragDrop == true) {
            objectDragDrop.draw(zauberbild.crc2);
        }
        //straigt movement
        for (let symbol of symbols) {
            if (symbol instanceof zauberbild.Heart)
                symbol.move(1 / 35);
            else if (symbol instanceof zauberbild.Moon)
                symbol.move(1 / 80);
            else if (symbol instanceof zauberbild.Ellipse)
                symbol.move(1 / 50);
            else if (symbol instanceof zauberbild.Star)
                symbol.move(1 / 40);
            symbol.draw(zauberbild.crc2);
        }
    }
    function deletemode(_event) {
        if (_event.key == "d") {
            trash = true;
            console.log("function deletemode,trash is now" + trash);
        }
    }
    function deleteform(_event, _trash) {
        if (trash == true) {
            console.log("function deleteform, trash is now" + trash);
            let poisitonx = _event.clientX;
            let positiony = _event.clientY;
            let canvasRect = canvasMain.getBoundingClientRect();
            let offsetX = poisitonx - canvasRect.left;
            let offsetY = positiony - canvasRect.top;
            for (let symbol of symbols) {
                if (symbol.position.x - 25 < offsetX &&
                    symbol.position.x + 25 > offsetX &&
                    symbol.position.y - 25 < offsetY &&
                    symbol.position.y + 25 > offsetY) {
                    let index = symbols.indexOf(symbol);
                    symbols.splice(index, 1);
                    trash = false;
                }
            }
        }
    }
    function randomColor() {
        coloring = colors[Math.floor(Math.random() * colors.length)];
        coloring2 = colors[Math.floor(Math.random() * 0.5 * colors.length)];
        coloring3 = colors[Math.floor(Math.random() * 0.7 * colors.length)];
    }
    function changeColor(_event) {
        randomColor();
        for (let symbol of symbols) {
            if (symbol instanceof zauberbild.Star)
                symbol.color = coloring;
            else if (symbol instanceof zauberbild.Ellipse)
                symbol.color = coloring2;
            else if (symbol instanceof zauberbild.Moon)
                symbol.color = coloring3;
            symbol.draw(zauberbild.crc2);
        }
    }
    /* function rotatemode(_event: KeyboardEvent): void {
        if (_event.key == "r") {
            rotates = true;
            console.log("function deletemode,rotates is now" + rotates);
        }
    } */
    /* function rotateform(_event: MouseEvent, _trash: boolean): void {
        rotatemode;
        if (rotates == true) {
            console.log("function deleteform, rotates is now" + rotates);
            let poisitonx: number = _event.clientX;
            let positiony: number = _event.clientY;
            let canvasRect: ClientRect | DOMRect = canvasMain.getBoundingClientRect();
            let offsetX: number = poisitonx - canvasRect.left;
            let offsetY: number = positiony - canvasRect.top;
            for (let symbol of symbols) {
                if (symbol.position.x - 25 < offsetX &&
                    symbol.position.x + 25 > offsetX &&
                    symbol.position.y - 25 < offsetY &&
                    symbol.position.y + 25 > offsetY) {
                    if (symbol instanceof Heart)
                        symbol.rotate(10);
                    else if (symbol instanceof Ellipse)
                        symbol.rotate(10);
                    else if (symbol instanceof Moon)
                        symbol.rotate(10);
                    symbol.draw(crc2);
                }
            }
        }
    } */
    // if(updateSymbolPos){
    //     updateSymbol();
    // }else{
    //     detectSymbol();
    // }
    // console.log("updateSymbolPos: "+updateSymbolPos)
})(zauberbild || (zauberbild = {}));
// function test(_event: MouseEvent):void{
//     let target: HTMLElement = <HTMLElement>_event.target;
//     //console.log(target.id);
// }
/*     function dropSymbol(_event: MouseEvent): void {

        console.log("MouseUp");

        if (dragDrop == true) {
            dragDrop = false;
            symbols.push(objectDragDrop);
        }

    }
    function clickSymbol(_event: MouseEvent): void {
        console.log("Mousedown");

        dragDrop = true;

        let mousePosY: number = _event.clientY;
        let mousePosX: number = _event.clientX;
        let canvasRect: ClientRect | DOMRect = canvasMain.getBoundingClientRect();

        let offsetX: number = mousePosX - canvasRect.left;
        let offsetY: number = mousePosY - canvasRect.top;

        for (let symbol of symbols) {

            if (symbol.position.x - 25 < offsetX &&
                symbol.position.x + 25 > offsetX &&
                symbol.position.y - 25 < offsetY &&
                symbol.position.y + 25 > offsetY) {
                console.log(symbol);
                let index: number = symbols.indexOf(symbol);
                symbols.splice(index, 1);
                objectDragDrop = symbol;
            }
        }
    }
    function dragSymbol(_event: MouseEvent): void {

        //let position: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        if (dragDrop == true) {
            objectDragDrop.position.x = _event.clientX - canvasMain.getBoundingClientRect().left;
            objectDragDrop.position.y = _event.clientY - canvasMain.getBoundingClientRect().top;
        }

    } */
/*  function changeRotation(_event: MouseEvent): void {
     for (let symbol of symbols) {
         if (symbol instanceof Heart)
             symbol.rotate(3);
         else if (symbol instanceof Ellipse)
             symbol.rotate(3);
         else if (symbol instanceof Moon)
             symbol.rotate(3);
         symbol.draw(crc2);
     }
 } */
/* function rotateSymbols(): void {
    console.log("Funktion rotateSymbols wird durchgeführt");


    for (let symbol of symbols) {
        if (symbol instanceof Heart)
            symbol.rotate(1 / 35);
        else if (symbol instanceof Moon)
            symbol.rotate(1 / 80);
        else if (symbol instanceof Ellipse)
            symbol.rotate(1 / 50);
        else if (symbol instanceof Star)
            symbol.rotate(1 / 40);

        symbol.draw(crc2);
    }

    //if (dragDrop == true) {
     //    objectDragDrop.draw(crc2);
     //}
} */
/* function setAnimation(_event: MouseEvent): void {
    let target: HTMLElement = <HTMLElement>_event.target;
    let id: string = target.id;
    for (let symbol of symbols) {
        if (symbol.active == true) {
            switch (id) {
                
                case "rotate":
                    symbol.moveType = FORM_MOVE.ROTATE;
                    break;
            }
        }
    }
} */
//# sourceMappingURL=main.js.map