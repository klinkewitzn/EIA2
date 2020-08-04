namespace zauberbild {
    let url: string = "https://anewbeginning.herokuapp.com/";
 
    export let crc2: CanvasRenderingContext2D;
    export let crcHeart: CanvasRenderingContext2D;
    export let crcStar: CanvasRenderingContext2D;
    export let crcEllipse: CanvasRenderingContext2D;
    export let crcMoon: CanvasRenderingContext2D;

    let backgroundImage: ImageData; 
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

    let colors: string[] = ["#FFC0CB", "#FF1493", "#E6E6FA", "#9370DB", "#4B0082", "#FA8072", "#DC143C", "#FF0000", "#FFA500", "#FFD700", "#FFFF00",
        "#FFE4B5", "#32CD32", "#90EE90", "#008000", "#66CDAA", "#48D1CC", "#B0C4DE", "#87CEFA", "#0000FF", "#DCDCDC", "#FFFAFA", "#F5F5DC"];
    let coloring: string;
    let coloring2: string;
    let coloring3: string;

   
    let list: HTMLDataListElement;
    let inputTitle: HTMLInputElement;

    window.addEventListener("load", handleLoad);
    async function handleLoad(_event: Event): Promise<void> {

        console.log("Funktion Handle Load wird ausgeführt");

        let savebutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=submit]");
        let deletebutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=reset]");
        let colorbutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#colorSymbol");
       

        list = <HTMLDataListElement>document.querySelector("datalist#titles");
        inputTitle = <HTMLInputElement>document.querySelector("#namePic");
      
        let format: HTMLDivElement = <HTMLDivElement>document.querySelector("div#chooseSize");
        backgroundColor = <HTMLSelectElement>document.querySelector("#chooseColor");

        canvasMain = <HTMLCanvasElement>document.getElementById("mainCanvasDraw");
        canvasStar = <HTMLCanvasElement>document.querySelector("#canvasStar");
        canvasHeart = <HTMLCanvasElement>document.querySelector("#canvasHeart");
        canvasMoon = <HTMLCanvasElement>document.querySelector("#canvasMoon");
        canvasEllipse = <HTMLCanvasElement>document.querySelector("#canvasEllipse");

        crc2 = <CanvasRenderingContext2D>canvasMain.getContext("2d");
        crcStar = <CanvasRenderingContext2D>canvasStar.getContext("2d");
        crcHeart = <CanvasRenderingContext2D>canvasHeart.getContext("2d");
        crcMoon = <CanvasRenderingContext2D>canvasMoon.getContext("2d");
        crcEllipse = <CanvasRenderingContext2D>canvasEllipse.getContext("2d");

        createSymbols();
        drawDefaultCanvas();

        canvasMain.addEventListener("click", drawSymbolOnMainCanvas);
        canvasStar.addEventListener("click", getID);
        canvasHeart.addEventListener("click", getID);
        canvasMoon.addEventListener("click", getID);
        canvasEllipse.addEventListener("click", getID);
        
        format.addEventListener("change", canvasSize); 0
        backgroundColor.addEventListener("change", function (): void {
            chooseBackground();
        });
        
        document.getElementById("mainCanvasDraw")?.addEventListener("click", function (): void { deleteSymbol(<MouseEvent>event, trash); });
        document.addEventListener("keydown", function (): void { deletemode(<KeyboardEvent>event); });

        backgroundImage = crc2.getImageData(0, 0, canvasMain.width, canvasMain.height);

        setInterval(update, 50);
       
        colorbutton.addEventListener("click", changeColor);
      
        deletebutton.addEventListener("click", clearCanvas);
        savebutton.addEventListener("click", sendData);
        getTitles();
        inputTitle.addEventListener("click", chosenTitle);
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
                crc2.canvas.height = 600;
                crc2.restore();
                break;
        }
        backgroundImage = crc2.getImageData(0, 0, canvasMain.width, canvasMain.height);
        crc2.putImageData(backgroundImage, 0, 0); 
    }

    function chooseBackground(_color?: string): void {

        console.log("choose color");

        let colors: HTMLInputElement = <HTMLInputElement>document.querySelector("select#chooseColor");
        let color: string = colors.value;

        switch (color) {

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


   async function sendData(_event: MouseEvent): Promise<void> {
        console.log("funktion sendData verbunden");
        let pictureName: string | null = prompt("Benenne dein Zauberbild: ");
        if (pictureName == null || pictureName == "") {
            alert("Du musst deinem Bild einen Namen geben, damit es gespeichert werden kann");
            prompt("Benenne dein Zauberbild: ");
        } else

            if (pictureName != null) {

                //dataPictures.push(pictureName); 
                dataPictures.push(canvasMain.width.toString(), canvasMain.height.toString());
                dataPictures.push(imgColor);

                for (let symbol of symbols) {
                    dataPictures.push(Math.floor(symbol.position.x).toString(), Math.floor(symbol.position.y).toString());
                    dataPictures.push(symbol.color);

                    if (symbol instanceof Moon) {
                        dataPictures.push("moon");
                    }

                    if (symbol instanceof Star) {
                        dataPictures.push("star");
                    }

                    if (symbol instanceof Ellipse) {
                        dataPictures.push("ellipse");
                    }

                    if (symbol instanceof Heart) {
                        dataPictures.push("heart");
                    }
                }
            }
        let dataServer: string = JSON.stringify(dataPictures); 
        let query: URLSearchParams = new URLSearchParams(dataServer);
        let response: Response = await fetch(url + "?savePicture&name=" + pictureName + "&" + query.toString());
        let responseText: string = await response.text();
       
        alert("Dein Bild wurde gespeichert!");
    
    } 

    async function showTitles(_response: string): Promise<void> { 
        let databaseContent: HTMLInputElement = <HTMLInputElement>document.querySelector("#namePicture");
        let replace: string = _response.replace(/\\|\[|Object|object|{|}|"|name|:|]/g, "eintrag1"); //g-> sonderzeichen von allen Elemten im string entfernt, nicht nur das erste
        let prettyArray: string[] = replace.split(",");
        databaseContent.innerHTML = "";
        while (list.firstChild) {
            list.removeChild(list.firstChild);

        }
        for (let title of prettyArray) {
            if (title == "") {
            }
            else {
                let option: HTMLOptionElement = document.createElement("option");
                option.setAttribute("name", title);
                option.value = title;
                list.appendChild(option);
            }
        }
    }

    async function getTitles(): Promise<void> { 
        let response: Response = await fetch(url + "?getTitles&" + _pictureTitle);
        let texte: string = await response.text();
        console.log(texte);
        showTitles(texte);
    }

    async function getImage(_pictureTitle: String): Promise<void> { 
        let response: Response = await fetch(url + "?getImage&" + _pictureTitle);
        let texte: string = await response.text();
        let replace: string = texte.replace(/\\|\[|{|}|"|name|:|]/g, "");
        let prettyArray: string[] = replace.split(",");
        console.log(prettyArray);
        crc2.canvas.width = parseInt(prettyArray[3]);
        crc2.canvas.height = parseInt(prettyArray[4]);
        imgColor = prettyArray[5];
        chooseBackground(prettyArray[5]);
        let info: string[] = [];
        prettyArray.splice(0, 6);

        for (let i: number = 0; i < prettyArray.length; i++) {

            switch (prettyArray[i]) {
                case "moon":
                    let position: Vector = new Vector(parseInt(info[0]), parseInt(info[1]));
                    let moon: Moon = new Moon(position, info[2]);
                    moon.draw(crc2);
                    symbols.push(moon);
                    info = [];                   
                    break;
                case "ellipse":
                    let positionCircle: Vector = new Vector(parseInt(info[0]), parseInt(info[1]));
                    let ellipse: Ellipse = new  Ellipse(positionCircle, info[2]);
                    ellipse.draw(crc2);
                    symbols.push(ellipse);
                    info = [];                   
                    break;
                case "heart":
                    let positionHeart: Vector = new Vector(parseInt(info[0]), parseInt(info[1]));
                    let heart: Heart = new Heart(positionHeart, info[2]);
                    heart.draw(crc2);
                    symbols.push(heart);
                    info = [];                   
                    break;
                case "star":
                    let positionStar: Vector = new Vector(parseInt(info[0]), parseInt(info[1]));
                    let star: Star = new Star (positionStar, info[2]);
                    star.draw(crc2);
                    symbols.push(star); 
                    info = [];                   
                    break;
                default:
                    info.push(prettyArray[i]);
                    break;
            }
        }
    }

    function chosenTitle(_event: Event): void {
        let value: string = inputTitle.value;
        getImage(value);
    }

  
    function getID(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        id = target.id;
        console.log("getting ID of" + id);
    }
   
    function createSymbols(): void {

        let positionstar: Vector = new Vector(0, 0);
        let star: Star = new Star(positionstar);
        crcStar.scale(2, 1);
        crcStar.translate(70, 70);
        crcStar.rotate(30 * Math.PI / 150)
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
        crcMoon.scale(2, 1);
        crcMoon.translate(70, 70);
        moon.draw(crcMoon);
    }

   
    function drawSymbolOnMainCanvas(_event: MouseEvent): void {
        console.log("Symbole werden auf Main Canvas gezeichnet");
       
        switch (id) {
            case "canvasStar":
             
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
    }

    function update(): void {
        console.log("Funktion update wird durchgeführt");

        crc2.putImageData(backgroundImage, 0, 0); 
       
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

    function deleteSymbol(_event: MouseEvent, _trash: boolean): void {

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


    function changeColor(_event: MouseEvent): void {
     
        coloring = colors[Math.floor(Math.random() * colors.length)];
        coloring2 = colors[Math.floor(Math.random() * 0.5 * colors.length)];
        coloring3 = colors[Math.floor(Math.random() * 0.7 * colors.length)];


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
}



