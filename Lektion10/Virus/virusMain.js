"use strict";
var L10_Virus;
(function (L10_Virus) {
    window.addEventListener("load", handleLoad);
    L10_Virus.canvas = document.querySelector("canvas");
    L10_Virus.crc2 = L10_Virus.canvas.getContext("2d");
    //export let particle: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
    let cells = [];
    let backgroudnImage; //Variable Image Data deklarieren!!!! (für später: get und put imageData)
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L10_Virus.crc2 = canvas.getContext("2d");
        drawBackground();
        createVirus(12);
        createAntibody(10);
        createHumanCell(9);
        createParticle(80);
        window.setInterval(update, 35);
    }
    function drawBackground() {
        //console.log("unspezifisches Zellgewebe");
        //Hintergrundfarbe: Gradient
        let gradient = L10_Virus.crc2.createLinearGradient(0, 0, 0, L10_Virus.crc2.canvas.height);
        gradient.addColorStop(0, "HSL(261, 97%, 89%)");
        gradient.addColorStop(.55, "HSL(360, 97%, 84%)");
        gradient.addColorStop(1, "white");
        L10_Virus.crc2.fillStyle = gradient;
        L10_Virus.crc2.fillRect(0, 0, L10_Virus.crc2.canvas.width, L10_Virus.crc2.canvas.height);
        //Gittermuster als Zellgewebe-Muster
        let pattern = document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 50;
        pattern.canvas.height = 30;
        pattern.fillStyle = "#97a0db3a";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 10);
        pattern.lineTo(10, 10);
        pattern.lineTo(20, 0);
        pattern.lineTo(30, 0);
        pattern.lineTo(50, 10);
        pattern.lineTo(30, 30);
        pattern.lineTo(20, 30);
        pattern.lineTo(10, 10);
        pattern.stroke();
        pattern.strokeStyle = "HSL(249, 9%, 72%)";
        pattern.stroke();
        pattern.closePath();
        //nucleus
        pattern.beginPath();
        pattern.arc(25, 12, 2, 0, 2 * Math.PI);
        pattern.fillStyle = "HSLA(137, 47%, 56%, 0.4)";
        pattern.fill();
        pattern.beginPath();
        pattern.arc(2, 22, 2, 0, 2 * Math.PI);
        pattern.fillStyle = "HSLA(137, 47%, 56%, 0.4)";
        pattern.fill();
        L10_Virus.crc2.fillStyle = L10_Virus.crc2.createPattern(pattern.canvas, "repeat");
        L10_Virus.crc2.fillRect(0, 0, L10_Virus.crc2.canvas.width, L10_Virus.crc2.canvas.height);
        //Bloodvessel
        L10_Virus.crc2.beginPath();
        L10_Virus.crc2.moveTo(1350, 0);
        L10_Virus.crc2.lineTo(1300, 800);
        L10_Virus.crc2.lineWidth = 80;
        L10_Virus.crc2.strokeStyle = "HSLA(360, 100%, 72%, 1)";
        L10_Virus.crc2.stroke();
        L10_Virus.crc2.closePath();
        L10_Virus.crc2.save();
        L10_Virus.crc2.beginPath();
        L10_Virus.crc2.moveTo(1325, 500);
        L10_Virus.crc2.lineTo(1140, 800);
        L10_Virus.crc2.moveTo(1325, 200);
        L10_Virus.crc2.lineTo(1500, 800);
        L10_Virus.crc2.moveTo(1325, 200);
        L10_Virus.crc2.lineTo(1500, 800);
        L10_Virus.crc2.moveTo(1325, -170);
        L10_Virus.crc2.lineTo(1580, 800);
        L10_Virus.crc2.lineWidth = 20;
        L10_Virus.crc2.strokeStyle = "HSLA(360, 100%, 72%, 1)";
        L10_Virus.crc2.stroke();
        L10_Virus.crc2.closePath();
        L10_Virus.crc2.save();
        L10_Virus.crc2.beginPath();
        L10_Virus.crc2.moveTo(1224, 650);
        L10_Virus.crc2.lineTo(1300, 800);
        L10_Virus.crc2.lineWidth = 2;
        L10_Virus.crc2.strokeStyle = "HSLA(360, 100%, 72%, 1)";
        L10_Virus.crc2.stroke();
        backgroudnImage = L10_Virus.crc2.getImageData(0, 0, L10_Virus.canvas.width, L10_Virus.canvas.height); //getImage Data diese Daten werden als Hintergrund gespeichert
    }
    /* Corona Viren werden erstellt */
    function createVirus(_nVirus) {
        for (let i = 0; i < _nVirus; i++) {
            let positionX = Math.random() * L10_Virus.crc2.canvas.width;
            let positionY = Math.random() * L10_Virus.canvas.height;
            let postion = new L10_Virus.Vector(positionX, positionY);
            let corona = new L10_Virus.Corona(postion);
            corona.draw();
            cells.push(corona);
        }
    }
    /*   antibodys werden erstellt */
    function createAntibody(_nAntibody) {
        for (let i = 0; i < _nAntibody; i++) {
            let positionX = Math.random() * L10_Virus.canvas.width;
            let positionY = Math.random() * L10_Virus.canvas.height;
            let postion = new L10_Virus.Vector(positionX, positionY);
            let antibody = new L10_Virus.Antibody(postion);
            antibody.draw();
            cells.push(antibody);
        }
    }
    /* partikel werden erstellt */
    function createParticle(_nParticle) {
        for (let drawn = 0; drawn < _nParticle; drawn++) {
            L10_Virus.crc2.save();
            let positionX = Math.random() * L10_Virus.canvas.width;
            let positionY = Math.random() * L10_Virus.canvas.height;
            let postion = new L10_Virus.Vector(positionX, positionY);
            let particle = new L10_Virus.Particle(postion);
            particle.draw();
            cells.push(particle);
        }
    }
    /* human Cells werden erstellt */
    function createHumanCell(_nhumanCell) {
        for (let i = 0; i < _nhumanCell; i++) {
            let positionX = Math.random() * L10_Virus.canvas.width;
            let positionY = Math.random() * L10_Virus.canvas.height;
            let postion = new L10_Virus.Vector(positionX, positionY);
            let humanCell = new L10_Virus.HumanCell(postion);
            humanCell.draw();
            cells.push(humanCell);
        }
    }
    /* update/animation für alle zellenklassen*/
    function update() {
        L10_Virus.crc2.putImageData(backgroudnImage, 0, 0); //putImageData -->die gespeicherten Hintergrunddaten werden bei jeder aktualisierung auf den canvas "gelegt"
        for (let cell of cells) { //mittels "if instance of corona/antibody/humancell/part." wäre auch möglich verschiedene Geschwindigkeiten anzugeben
            cell.move(1 / 20);
            cell.draw();
        }
    }
})(L10_Virus || (L10_Virus = {}));
//# sourceMappingURL=virusMain.js.map