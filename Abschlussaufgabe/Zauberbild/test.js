"use strict";
/* namespace zBlauberbild {

    //export let crc2: CanvasRenderingContext2D;
    export let crc3: CanvasRenderingContext2D;
    export let crc4: CanvasRenderingContext2D;
    export let crc5: CanvasRenderingContext2D;
    export let crc6: CanvasRenderingContext2D;
    let backgroundImage: ImageData; //Variable Image Data deklarieren!!!! (für später: get und put imageData)

    /*     let url: string = "https://haushaltshilfe-app.herokuapp.com/";  */
/*  let mainCanvas: HTMLCanvasElement;  */
/*     let dragDrop: boolean = false;
    let objectDragDrop: Form;
    let saveButton: HTMLButtonElement;
   
    let deleteButton: HTMLButtonElement; */
/*   let backgroundColor: HTMLSelectElement; */
/*     let circleDiv: HTMLDivElement;
    let starDiv: HTMLDivElement;
    let triangleDiv: HTMLDivElement;
    let heartDiv: HTMLDivElement;  */
/*     let backgroundColorSafe: string; */
/*   let symbols: Form[] = [];
  let dataPictures: string[] = [];   */
/*  window.addEventListener("load", handleLoad);

 async function handleLoad(_event: Event): Promise<void> {

     console.log("Funktion Handle Load wird ausgeführt");

     let format: HTMLDivElement = <HTMLDivElement>document.querySelector("div#chooseFormat");
     backgroundColor = <HTMLSelectElement>document.querySelector("#chooseColor"); */
/* circleDiv = <HTMLDivElement>document.getElementById("symbolOne");
starDiv = <HTMLDivElement>document.getElementById("symbolTwo");
triangleDiv = <HTMLDivElement>document.getElementById("symbolThree");
heartDiv = <HTMLDivElement>document.getElementById("symbolFour");  */
/*    mainCanvas = <HTMLCanvasElement>document.getElementById("mainCanvasDraw");
   crc2 = <CanvasRenderingContext2D>mainCanvas.getContext("2d"); */
/* let canvasCircle: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("circle");
crc3 = <CanvasRenderingContext2D>canvasCircle.getContext("2d");

let canvasStar: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("star");
crc4 = <CanvasRenderingContext2D>canvasStar.getContext("2d");

let canvasTriangle: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("triangle");
crc5 = <CanvasRenderingContext2D>canvasTriangle.getContext("2d");

let canvasHeart: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("heart");
crc6 = <CanvasRenderingContext2D>canvasHeart.getContext("2d");


deleteButton = <HTMLButtonElement>document.getElementById("buttonDelete");
saveButton = <HTMLButtonElement>document.getElementById("buttonSafe");  */
/*
        format.addEventListener("change", canvasSize);
        backgroundColor.addEventListener("change", chooseBackground);

 */
/*   circleDiv.addEventListener("click", drawSymbolInMainCanvas);
  starDiv.addEventListener("click", drawSymbolInMainCanvas);
  triangleDiv.addEventListener("click", drawSymbolInMainCanvas);
  heartDiv.addEventListener("click", drawSymbolInMainCanvas);
  deleteButton.addEventListener("click", clearCanvas);
  saveButton.addEventListener("click", saveImage);  */
/*  chooseBackground(_event); */
/*    setInterval(animate, 100);
   createForms();  */
/*
        mainCanvas.addEventListener("dblclick", deleteSymbol);
        mainCanvas.addEventListener("mousedown", mooveSymbol);
        mainCanvas.addEventListener("mouseup", placeSymbol);
        mainCanvas.addEventListener("mousemove", dragSymbol);  */
/* async function saveImage(_event: MouseEvent): Promise<void> {

    let nameOfPicture: string | null = prompt("Bennene dein Zauberbild: ");

    dataPictures.push(mainCanvas.width.toString(), mainCanvas.height.toString());
    dataPictures.push(backgroundColorSafe);

    if (nameOfPicture != null) {

        dataPictures.push(nameOfPicture);
    }
    

    for (let figur of symbols) {
        dataPictures.push(figur.position.x.toString(), figur.position.y.toString());

        if (figur instanceof Triangle) {
            dataPictures.push("triangle");

        }

        if (figur instanceof Star) {
            dataPictures.push("star");

        }

        if (figur instanceof Circle) {
            dataPictures.push("circle");

        }

        if (figur instanceof Heart) {
            dataPictures.push("heart");

        }

    }

    JSON.stringify(dataPictures); //wandelt Arraxy um, damit der Server es lesen kann
    let response: Response = await fetch(url + "?" + dataPictures);
    let texte: string = await response.text();
    console.log(texte);
    //let data: Data = JSON.parse(texte);

} */
/*   function canvasSize(_event: Event): void {

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
*/
/*        console.log(symbols);  */
/*  let target: HTMLSelectElement = <HTMLSelectElement>_event.target;
 let value: string = target.value;


 switch (value) {

     case "lilac":
         crc2.fillStyle = "HSL(249, 100%, 93%)";
         crc2.fill();
         crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
         backgroundColorSafe = "lightpurple";

         break;
     case "green":
         crc2.fillStyle = "HSL(99, 100%, 81%)";
         crc2.fill();
         crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
         backgroundColorSafe = "lightgreen";

         break;
     case "blush":
         crc2.fillStyle = "HSL(0, 80%, 89%)";
         crc2.fill();
         crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
         backgroundColorSafe = "lightpink";


         break;
     case "skyblue":

         crc2.fillStyle = "lightblue";
         crc2.fill();
         crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
         backgroundColorSafe = "lightblue";

         break;
     case "butterCream":

         crc2.fillStyle = "HSL(53, 100%, 81%)";
         crc2.fill();
         crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
         backgroundColorSafe = "lightyellow";

         break;

 }
 backgroundImage = crc2.getImageData(0, 0, mainCanvas.width, mainCanvas.height);

} */
/*function animation() {
    return setInterval(createForms, 50);
}*/
/*  function createForms (): void {
    
     let symbol: number = 1;
    //Stern
  
     let x: number = 80;
     let y: number = 20;
     let position: Vector = new Vector(x, y);

     let star: Star = new Star(position);
     star.draw(crc4);
     //symbols.push(star);

     //Circle
     for (let i: number = 0; i < symbol; i++) {
     let x: number = 35;
     let y: number = 35;
     let position: Vector = new Vector(x, y);
     let circle:  Circle = new Circle(position);
     circle.draw(crc3);
     //symbols.push(circle);
     }

     //Dreieck
     for (let i: number = 0; i < symbol; i++) {
         let x: number = 50;
         let y: number = 47;
         let position: Vector = new Vector(x, y);
         let triangle:  Triangle = new Triangle(position);
         triangle.draw(crc5);
         //symbols.push(triangle);
         }
 
 
     //Herz
     for (let i: number = 0; i < symbol; i++) {
         let x: number = 30;
         let y: number = 20;
         let position: Vector = new Vector(x, y);
         let heart:  Heart = new Heart (position);
         heart.draw(crc6);
         //symbols.push(heart);
         }

 }
*/
/*  export function drawSymbolInMainCanvas(_event: MouseEvent): void {


     console.log("Ein Symbol wurde geklickt");
     
      
     let target: HTMLElement = <HTMLElement>_event.target;
     let id: string = target.id;

     //if (target.id) {
     //    drawSymbol = true;
     //}

     let x: number = 50;
     let y: number = 50;
     


     switch (id) {
         case "star":
     
             
             let positionStar: Vector = new Vector(x, y);
             let star:  Star = new Star(positionStar);
             
             star.draw(crc2);
             symbols.push(star);
                     

             break;
         case "circle":

            
             let positionCircle: Vector = new Vector(x, y);
             let circle:  Circle = new Circle(positionCircle);
             circle.draw(crc2);
             symbols.push(circle);
             
           
             
             break;
         case "heart":

         
             let positionHeart: Vector = new Vector(x, y);
             let heart:  Heart = new Heart(positionHeart);
             heart.draw(crc2);
             symbols.push(heart);
             
            
             
             break;
         case "triangle":
                 
             let position: Vector = new Vector(x, y);
             let triangle:  Triangle = new Triangle(position);
             triangle.draw(crc2);
             symbols.push(triangle);
             break;

     }


 } */
/*     function animate(_event: MouseEvent): void {

        
        crc2.putImageData(backgroundImage, 0, 0);

        for (let symbol of symbols) {
            if (symbol instanceof Heart)
            symbol.move(1 / 20);
            else if (symbol instanceof Triangle)
            symbol.move(1 / 20);
            else if (symbol instanceof Circle)
            symbol.move (1 / 50 );
            else if (symbol instanceof Star)
            symbol.move (1 / 20 );
            symbol.draw(crc2);
        }

        if (dragDrop == true) {
            objectDragDrop.draw(crc2);
        }

        
    }
 */
/*  function dragSymbol(_event: MouseEvent): void {

     if (dragDrop == true) {
         objectDragDrop.position.x = _event.clientX;
         objectDragDrop.position.y = _event.clientY;

     }

 }

 function mooveSymbol(_event: MouseEvent): void {
     console.log("Mousedowm");


     dragDrop = true;

     let mousePosY: number = _event.clientY;
     let mousePosX: number = _event.clientX;
     let canvasRect: ClientRect | DOMRect = mainCanvas.getBoundingClientRect();

     let offsetX: number = mousePosX - canvasRect.left;
     let offsetY: number = mousePosY - canvasRect.top;

     console.log(offsetX, offsetY);

     for (let figur of symbols) {

         if (figur.position.x - figur.radius < offsetX &&
             figur.position.x + figur.radius > offsetX &&
             figur.position.y - figur.radius < offsetY &&
             figur.position.y + figur.radius > offsetY) {

             let index: number = symbols.indexOf(figur);
             symbols.splice(index, 1);

             objectDragDrop = figur;

             

             
         }
           

         
     }

     
           
     

 }

 function placeSymbol(_event: MouseEvent): void {

     console.log("MouseUp");

    
     if (dragDrop == true) {

         dragDrop = false;
         symbols.push(objectDragDrop);

     }
     


 }

 function deleteSymbol(_event: MouseEvent): void {

     let mousePosY: number = _event.clientY;
     let mousePosX: number = _event.clientX;
     let canvasRect: ClientRect | DOMRect = mainCanvas.getBoundingClientRect();

     let offsetX: number = mousePosX - canvasRect.left;
     let offsetY: number = mousePosY - canvasRect.top;

     console.log(offsetX, offsetY);

     for (let figur of symbols) {

         if (figur.position.x - figur.radius < offsetX &&
             figur.position.x + figur.radius > offsetX &&
             figur.position.y - figur.radius < offsetY &&
             figur.position.y + figur.radius > offsetY) {

             let index: number = symbols.indexOf(figur);
             symbols.splice(index, 1);

             console.log("Es funktioniert");

             console.log(index);
         }
             
             
           

         
     }
 }



 function clearCanvas(): void {

    crc2.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
    symbols = [];
    crc2.save();
    
    crc2.fillStyle = "white";
    crc2.fill();
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    crc2.restore();

       
 } */
//function selectSymbol(_event: MouseEvent): void {
//console.log("Der MainCanvas wurde geklickt"); 
/*let target: HTMLElement = <HTMLElement>_event.target;
let symbol  = target.appendChild;

if (symbol) {
    let newSymbol: Triangle = new Triangle();
    newSymbol.draw(crc2);
}*/
//}
//# sourceMappingURL=test.js.map