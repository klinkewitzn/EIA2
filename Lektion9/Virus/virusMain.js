"use strict";
var L09_Virus;
(function (L09_Virus) {
    window.addEventListener("load", handleLoad);
    L09_Virus.canvas = document.querySelector("canvas");
    L09_Virus.crc2 = L09_Virus.canvas.getContext("2d");
    //export let particle: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
    L09_Virus.coronaCells = [];
    L09_Virus.antibodyCells = [];
    L09_Virus.particleCells = [];
    L09_Virus.humanCells = [];
    let backgroudnImage; //Variable Image Data deklarieren!!!! (für später: get und put imageData)
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Virus.crc2 = canvas.getContext("2d");
        drawBackground();
        drawVirus(25);
        drawAntibody(10);
        drawHumanCell(9);
        drawParticle(80);
        window.setInterval(update, 35);
    }
    function drawBackground() {
        console.log("unspezifisches Zellgewebe");
        //Hintergrundfarbe: Gradient
        let gradient = L09_Virus.crc2.createLinearGradient(0, 0, 0, L09_Virus.crc2.canvas.height);
        gradient.addColorStop(0, "HSL(261, 97%, 89%)");
        gradient.addColorStop(.55, "HSL(360, 97%, 84%)");
        gradient.addColorStop(1, "white");
        L09_Virus.crc2.fillStyle = gradient;
        L09_Virus.crc2.fillRect(0, 0, L09_Virus.crc2.canvas.width, L09_Virus.crc2.canvas.height);
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
        L09_Virus.crc2.fillStyle = L09_Virus.crc2.createPattern(pattern.canvas, "repeat");
        L09_Virus.crc2.fillRect(0, 0, L09_Virus.crc2.canvas.width, L09_Virus.crc2.canvas.height);
        //Bloodvessel
        L09_Virus.crc2.beginPath();
        L09_Virus.crc2.moveTo(1350, 0);
        L09_Virus.crc2.lineTo(1300, 800);
        L09_Virus.crc2.lineWidth = 80;
        L09_Virus.crc2.strokeStyle = "HSLA(360, 100%, 72%, 1)";
        L09_Virus.crc2.stroke();
        L09_Virus.crc2.closePath();
        L09_Virus.crc2.save();
        L09_Virus.crc2.beginPath();
        L09_Virus.crc2.moveTo(1325, 500);
        L09_Virus.crc2.lineTo(1140, 800);
        L09_Virus.crc2.moveTo(1325, 200);
        L09_Virus.crc2.lineTo(1500, 800);
        L09_Virus.crc2.moveTo(1325, 200);
        L09_Virus.crc2.lineTo(1500, 800);
        L09_Virus.crc2.moveTo(1325, -170);
        L09_Virus.crc2.lineTo(1580, 800);
        L09_Virus.crc2.lineWidth = 20;
        L09_Virus.crc2.strokeStyle = "HSLA(360, 100%, 72%, 1)";
        L09_Virus.crc2.stroke();
        L09_Virus.crc2.closePath();
        L09_Virus.crc2.save();
        L09_Virus.crc2.beginPath();
        L09_Virus.crc2.moveTo(1224, 650);
        L09_Virus.crc2.lineTo(1300, 800);
        L09_Virus.crc2.lineWidth = 2;
        L09_Virus.crc2.strokeStyle = "HSLA(360, 100%, 72%, 1)";
        L09_Virus.crc2.stroke();
        backgroudnImage = L09_Virus.crc2.getImageData(0, 0, L09_Virus.canvas.width, L09_Virus.canvas.height); //getImage Data diese Daten werden als Hintergrund gespeichert
    }
    /* Corona Viren werden erstellt */
    function drawVirus(_nVirus) {
        for (let i = 0; i < _nVirus; i++) {
            let positionX = Math.random() * L09_Virus.crc2.canvas.width;
            let positionY = Math.random() * L09_Virus.canvas.height;
            let postion = new L09_Virus.Vector(positionX, positionY);
            let corona = new L09_Virus.Corona(postion);
            corona.draw();
            L09_Virus.coronaCells.push(corona);
        }
    }
    /*   antibodys werden erstellt */
    function drawAntibody(_nAntibody) {
        for (let i = 0; i < _nAntibody; i++) {
            let positionX = Math.random() * L09_Virus.canvas.width;
            let positionY = Math.random() * L09_Virus.canvas.height;
            let postion = new L09_Virus.Vector(positionX, positionY);
            let antibody = new L09_Virus.Antibody(postion);
            antibody.draw();
            L09_Virus.antibodyCells.push(antibody);
        }
    }
    /* partikel werden erstellt */
    function drawParticle(_nParticle) {
        for (let drawn = 0; drawn < _nParticle; drawn++) {
            L09_Virus.crc2.save();
            let positionX = Math.random() * L09_Virus.canvas.width;
            let positionY = Math.random() * L09_Virus.canvas.height;
            let postion = new L09_Virus.Vector(positionX, positionY);
            let particle = new L09_Virus.Particle(postion);
            particle.draw();
            L09_Virus.particleCells.push(particle);
        }
    }
    /* human Cells werden erstellt */
    function drawHumanCell(_nhumanCell) {
        for (let i = 0; i < _nhumanCell; i++) {
            let positionX = Math.random() * L09_Virus.canvas.width;
            let positionY = Math.random() * L09_Virus.canvas.height;
            let postion = new L09_Virus.Vector(positionX, positionY);
            let humanCell = new L09_Virus.HumanCell(postion);
            humanCell.draw();
            L09_Virus.humanCells.push(humanCell);
        }
    }
    /* update/animation für alle zellenklassen*/
    function update() {
        L09_Virus.crc2.putImageData(backgroudnImage, 0, 0); //putImageData -->die gespeicherten Hintergrunddaten werden bei jeder aktualisierung auf den canvas "gelegt"
        for (let corona of L09_Virus.coronaCells) {
            corona.move(1 / 20);
            corona.draw();
        }
        for (let antibody of L09_Virus.antibodyCells) {
            antibody.move(1 / 20);
            antibody.draw();
        }
        for (let particle of L09_Virus.particleCells) {
            particle.move(1 / 20);
            particle.draw();
        }
        for (let humanCell of L09_Virus.humanCells) {
            humanCell.move(1 / 20);
            humanCell.draw();
        }
    }
})(L09_Virus || (L09_Virus = {}));
//# sourceMappingURL=virusMain.js.map