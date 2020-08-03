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
    let trash: boolean = false;
    let rotates: boolean = false;

    let dragDrop: boolean = false;
    let objectDragDrop: Symbol;

    let colors: string[] = ["#FFC0CB", "#FF1493", "#E6E6FA", "#9370DB", "#4B0082", "#FA8072", "#DC143C", "#FF0000", "#FFA500", "#FFD700", "#FFFF00",
        "#FFE4B5", "#32CD32", "#90EE90", "#008000", "#66CDAA", "#48D1CC", "#B0C4DE", "#87CEFA", "#0000FF", "#DCDCDC", "#FFFAFA", "#F5F5DC"];
    let coloring: string;
    let coloring2: string;
    let coloring3: string;

    export let xpos: number;
    export let ypos: number;
    export let index: number;

    window.addEventListener("load", handleLoad);
    //handle Load Funktion
    async function handleLoad(_event: Event): Promise<void> {

        console.log("Funktion Handle Load wird ausgeführt");

        let savebutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=submit]");
        let deletebutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=reset]");
        let rotatebutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#rotateSymbol");
        let colorbutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#colorSymbol");
        deletebutton.addEventListener("click", clearCanvas);
        savebutton.addEventListener("click", sendData);

        let format: HTMLDivElement = <HTMLDivElement>document.querySelector("div#chooseSize");
        backgroundColor = <HTMLSelectElement>document.querySelector("#chooseColor");

        canvasMain = <HTMLCanvasElement>document.getElementById("mainCanvasDraw");
        canvasStar = <HTMLCanvasElement>document.querySelector("#canvasStar");
        canvasHeart = <HTMLCanvasElement>document.querySelector("#canvasHeart");
        canvasMoon = <HTMLCanvasElement>document.querySelector("#canvasMoon");
        canvasEllipse = <HTMLCanvasElement>document.querySelector("#canvasEllipse");

        format.addEventListener("change", canvasSize); 0
        backgroundColor.addEventListener("change", chooseBackground);

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

        canvasMain = <HTMLCanvasElement>document.getElementById("mainCanvasDraw");
        crc2 = <CanvasRenderingContext2D>canvasMain.getContext("2d");
        backgroundImage = crc2.getImageData(0, 0, canvasMain.width, canvasMain.height);

        //document.getElementById("mainCanvasDraw")?.addEventListener("click", function (): void {  setInterval(rotateform, 50);(<MouseEvent>event, rotates); });
        //document.addEventListener("keydown", function (): void { rotatemode(<KeyboardEvent>event); });
        // rotatebutton.
        setInterval(update, 50);
        document.getElementById("mainCanvasDraw")?.addEventListener("click", function (): void { deleteform(<MouseEvent>event, trash); });
        document.addEventListener("keydown", function (): void { deletemode(<KeyboardEvent>event); });
        console.log(symbols);
        colorbutton.addEventListener("click", changeColor);
        //rotatebutton.addEventListener("click", changeRotation);

        canvasMain.addEventListener("mousedown", pickSymbol);
        canvasMain.addEventListener("mouseup", placeSymbol);
        canvasMain.addEventListener("mousemove", dragSymbol);

    }
    function clearCanvas() {
        symbols = []
    }
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
                crc2.canvas.width = 600;
                crc2.canvas.height = 800;
                crc2.restore();
                break;
        }
        backgroundImage = crc2.getImageData(0, 0, canvasMain.width, canvasMain.height);
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
        crc2.putImageData(backgroundImage, 0, 0);
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

        let positionstar: Vector = new Vector(0, 0);
        let star: Star = new Star(positionstar);
        crcStar.translate(150, 70);
        star.draw(crcStar);

        let positionellipse: Vector = new Vector(0, 0);
        let ellipse: Ellipse = new Ellipse(positionellipse);
        crcEllipse.scale(3.3, 1.8);
        crcEllipse.translate(50, 40);
        ellipse.draw(crcEllipse);

        let positionheart: Vector = new Vector(0, 0);
        let heart: Heart = new Heart(positionheart);
        crcHeart.translate(90, 80);
        heart.draw(crcHeart);

        let positionmoon: Vector = new Vector(0, 0);
        let moon: Moon = new Moon(positionmoon);
        crcMoon.translate(150, 70);
        moon.draw(crcMoon);
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
                console.log(_event);
                let heartx: number = _event.offsetX;
                let hearty: number = _event.offsetY;
                let heartposition: Vector = new Vector(heartx, hearty);
                let heart: Heart = new Heart(heartposition);
                heart.draw(crc2);
                symbols.push(heart);
                id = "";
                break;
            case "canvasMoon":
                console.log(_event);
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
        for (let symbol of symbols) {
            console.log(symbol.position);
        }
        console.log(symbols);
    }

    function update(): void {
        console.log("Funktion update wird durchgeführt");

        crc2.putImageData(backgroundImage, 0, 0); //putImageData -->die gespeicherten Hintergrunddaten werden bei jeder aktualisierung auf den canvas "gelegt"
       //drag and drop
        if (dragDrop == true) {
            objectDragDrop.draw(crc2);
        }
        //straigt movement
        for (let symbol of symbols) {
            if (symbol instanceof Heart)
                symbol.move(1 / 35);
            else if (symbol instanceof Moon)
                symbol.move(1 / 80);
            else if (symbol instanceof Ellipse)
                symbol.move(1 / 50);
            else if (symbol instanceof Star)
                symbol.move(1 / 40);

            symbol.draw(crc2);
        }
    }

    function deletemode(_event: KeyboardEvent): void {
        if (_event.key == "d") {
            trash = true;
            console.log("function deletemode,trash is now" + trash);
        }
    }

    function deleteform(_event: MouseEvent, _trash: boolean): void {

        if (trash == true) {
            console.log("function deleteform, trash is now" + trash);
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
                    let index: number = symbols.indexOf(symbol);
                    symbols.splice(index, 1);
                    trash = false;
                }
            }
        }
    }

    function randomColor(): void {
        coloring = colors[Math.floor(Math.random() * colors.length)];
        coloring2 = colors[Math.floor(Math.random() * 0.5 * colors.length)];
        coloring3 = colors[Math.floor(Math.random() * 0.7 * colors.length)];
    }

    function changeColor(_event: MouseEvent): void {
        randomColor();

        for (let symbol of symbols) {
            if (symbol instanceof Star)
                symbol.color = coloring;
            else if (symbol instanceof Ellipse)
                symbol.color = coloring2;
            else if (symbol instanceof Moon)
                symbol.color = coloring3;
            symbol.draw(crc2);
        }
    }

    function placeSymbol(_event: MouseEvent): void {

        console.log("MouseUp");

        if (dragDrop == true) {
            dragDrop = false;
            symbols.push(objectDragDrop);
        }

    }
    function pickSymbol(_event: MouseEvent): void {
        console.log("Mousedown");

        dragDrop = true;

        let mousePosY: number = _event.clientY;
        let mousePosX: number = _event.clientX;
        let canvasRect: ClientRect | DOMRect = canvasMain.getBoundingClientRect();

        let offsetX: number = mousePosX - canvasRect.left;
        let offsetY: number = mousePosY - canvasRect.top;

        for (let figur of symbols) {

            if (figur.position.x - 25 < offsetX &&
                figur.position.x + 25 > offsetX &&
                figur.position.y - 25 < offsetY &&
                figur.position.y + 25 > offsetY) {
                console.log(figur);
                let index: number = symbols.indexOf(figur);
                symbols.splice(index, 1);
                objectDragDrop = figur;
            }
        }
    }
    function dragSymbol(_event: MouseEvent): void {

        //let position: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        if (dragDrop == true) {
            objectDragDrop.position.x = _event.clientX - canvasMain.getBoundingClientRect().left;
            objectDragDrop.position.y = _event.clientY - canvasMain.getBoundingClientRect().top;
        }

    }
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

   /*  function rotatemode(_event: KeyboardEvent): void {
        if (_event.key == "r") {
            rotates = true;
            console.log("function deletemode,rotates is now" + rotates);
        }
    }
    function rotateform(_event: MouseEvent, _trash: boolean): void {

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
                        symbol.rotate(3);
                    else if (symbol instanceof Ellipse)
                        symbol.rotate(3);
                    else if (symbol instanceof Moon)
                        symbol.rotate(3);
                    symbol.draw(crc2);
                }
            }
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
        for (let figure of symbols) {
            if (figure.active == true) {
                switch (id) {
                    
                    case "rotate":
                        figure.moveType = FORM_MOVE.ROTATE;
                        break;
                }
            }
        }
    } */

}