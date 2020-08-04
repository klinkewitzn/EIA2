"use strict";
var zauberbild;
(function (zauberbild) {
    let url = "https://anewbeginning.herokuapp.com/";
    let backgroundImage;
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
    let colors = ["#FFC0CB", "#FF1493", "#E6E6FA", "#9370DB", "#4B0082", "#FA8072", "#DC143C", "#FF0000", "#FFA500", "#FFD700", "#FFFF00",
        "#FFE4B5", "#32CD32", "#90EE90", "#008000", "#66CDAA", "#48D1CC", "#B0C4DE", "#87CEFA", "#0000FF", "#DCDCDC", "#FFFAFA", "#F5F5DC"];
    let coloring;
    let coloring2;
    let coloring3;
    let list;
    let inputTitle;
    window.addEventListener("load", handleLoad);
    async function handleLoad(_event) {
        console.log("Funktion Handle Load wird ausgeführt");
        let savebutton = document.querySelector("button[type=submit]");
        let deletebutton = document.querySelector("button[type=reset]");
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
        zauberbild.crc2 = canvasMain.getContext("2d");
        zauberbild.crcStar = canvasStar.getContext("2d");
        zauberbild.crcHeart = canvasHeart.getContext("2d");
        zauberbild.crcMoon = canvasMoon.getContext("2d");
        zauberbild.crcEllipse = canvasEllipse.getContext("2d");
        createSymbols();
        drawDefaultCanvas();
        canvasMain.addEventListener("click", drawSymbolOnMainCanvas);
        canvasStar.addEventListener("click", getID);
        canvasHeart.addEventListener("click", getID);
        canvasMoon.addEventListener("click", getID);
        canvasEllipse.addEventListener("click", getID);
        format.addEventListener("change", canvasSize);
        0;
        backgroundColor.addEventListener("change", function () {
            chooseBackground();
        });
        document.getElementById("mainCanvasDraw")?.addEventListener("click", function () { deleteSymbol(event, trash); });
        document.addEventListener("keydown", function () { deletemode(event); });
        backgroundImage = zauberbild.crc2.getImageData(0, 0, canvasMain.width, canvasMain.height);
        setInterval(update, 50);
        colorbutton.addEventListener("click", changeColor);
        deletebutton.addEventListener("click", clearCanvas);
        savebutton.addEventListener("click", sendData);
        getTitles();
        inputTitle.addEventListener("click", chosenTitle);
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
        zauberbild.crc2.putImageData(backgroundImage, 0, 0);
    }
    function chooseBackground(_color) {
        console.log("choose color");
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
    async function sendData(_event) {
        console.log("funktion sendData verbunden");
        let pictureName = prompt("Benenne dein Zauberbild: ");
        if (pictureName == null || pictureName == "") {
            alert("Du musst deinem Bild einen Namen geben, damit es gespeichert werden kann");
            prompt("Benenne dein Zauberbild: ");
        }
        else if (pictureName != null) {
            //dataPictures.push(pictureName); 
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
        let dataServer = JSON.stringify(dataPictures);
        let query = new URLSearchParams(dataServer);
        let response = await fetch(url + "?savePicture&name=" + pictureName + "&" + query.toString());
        let responseText = await response.text();
        alert("Dein Bild wurde gespeichert!");
    }
    async function showTitles(_response) {
        let databaseContent = document.querySelector("#namePicture");
        let replace = _response.replace(/\\|\[|Object|object|{|}|"|name|:|]/g, "eintrag1"); //g-> sonderzeichen von allen Elemten im string entfernt, nicht nur das erste
        let prettyArray = replace.split(",");
        databaseContent.innerHTML = "";
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
        for (let title of prettyArray) {
            if (title == "") {
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
        let response = await fetch(url + "?getTitles&" + _pictureTitle);
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
    function getID(_event) {
        let target = _event.target;
        id = target.id;
        console.log("getting ID of" + id);
    }
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
    function drawSymbolOnMainCanvas(_event) {
        console.log("Symbole werden auf Main Canvas gezeichnet");
        switch (id) {
            case "canvasStar":
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
    }
    function update() {
        console.log("Funktion update wird durchgeführt");
        zauberbild.crc2.putImageData(backgroundImage, 0, 0);
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
    function deleteSymbol(_event, _trash) {
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
    function changeColor(_event) {
        coloring = colors[Math.floor(Math.random() * colors.length)];
        coloring2 = colors[Math.floor(Math.random() * 0.5 * colors.length)];
        coloring3 = colors[Math.floor(Math.random() * 0.7 * colors.length)];
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
})(zauberbild || (zauberbild = {}));
//# sourceMappingURL=main.js.map