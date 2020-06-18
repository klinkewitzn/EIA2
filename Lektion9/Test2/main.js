"use strict";
var L09_Virus_Animation;
(function (L09_Virus_Animation) {
    window.addEventListener("load", handleLoad);
    let viruss = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Virus_Animation.crc2 = canvas.getContext("2d");
        drawBackground();
        createVirus(20);
        window.setInterval(update, 20);
        /*let virus: Virus = new Virus(1);
        virus.draw();*/
    }
    function createVirus(_nVirus) {
        console.log("Create Virus");
        for (let i = 0; i < _nVirus; i++) {
            let virus = new L09_Virus_Animation.Virus(1);
            viruss.push(virus);
        }
    }
    function update() {
        drawBackground();
        for (let virus of viruss) {
            virus.move(1 / 50);
            virus.draw();
        }
        drawVisusLogo();
    }
    function drawBackground() {
        let background = [
            { r1: 309, r2: 23, x: 187, y: 513 },
            { r1: 136, r2: 27, x: 140, y: 413 },
            { r1: 86, r2: 24, x: 4, y: 507 },
            { r1: 181, r2: 4, x: 160, y: 546 },
            { r1: 167, r2: 14, x: 271, y: 432 },
            { r1: 61, r2: 11, x: 244, y: 350 },
            { r1: 132, r2: 30, x: 98, y: 41 },
            { r1: 170, r2: 11, x: 80, y: 285 }
        ];
        L09_Virus_Animation.crc2.resetTransform();
        //crc2.translate(0, 0);
        let gradient = L09_Virus_Animation.crc2.createLinearGradient(0, 0, 0, L09_Virus_Animation.crc2.canvas.height);
        gradient.addColorStop(0, "HSL(60, 100%, 50%, 1)");
        gradient.addColorStop(0.5, "lightblue");
        gradient.addColorStop(1, "HSL(60, 100%, 50%, 1)");
        L09_Virus_Animation.crc2.fillStyle = gradient;
        L09_Virus_Animation.crc2.fillRect(0, 0, L09_Virus_Animation.crc2.canvas.width, L09_Virus_Animation.crc2.canvas.height);
        for (let index = 0; index < 8; index++) {
            let r1 = background[index].r1;
            let r2 = background[index].r2;
            let position = { x: background[index].x, y: background[index].y };
            let gradient = L09_Virus_Animation.crc2.createRadialGradient(0, 0, r2, 0, 0, r1);
            L09_Virus_Animation.crc2.save();
            gradient.addColorStop(0, "lightgreen");
            gradient.addColorStop(1, "HSL(60, 100%, 50%, 0)");
            L09_Virus_Animation.crc2.translate(position.x, position.y);
            L09_Virus_Animation.crc2.fillStyle = gradient;
            L09_Virus_Animation.crc2.arc(0, 0, r1, 0, 2 * Math.PI);
            L09_Virus_Animation.crc2.fill();
            L09_Virus_Animation.crc2.restore();
        }
        //drawVisusLogo();
    }
    function drawVisusLogo() {
        console.log("Virus Logo");
        L09_Virus_Animation.crc2.resetTransform();
        L09_Virus_Animation.crc2.translate(150, 275);
        L09_Virus_Animation.crc2.beginPath();
        L09_Virus_Animation.crc2.arc(0, 0, 45, 0, 2 * Math.PI);
        L09_Virus_Animation.crc2.strokeStyle = "black";
        L09_Virus_Animation.crc2.lineWidth = 13;
        L09_Virus_Animation.crc2.stroke();
        L09_Virus_Animation.crc2.closePath();
        L09_Virus_Animation.crc2.beginPath();
        L09_Virus_Animation.crc2.arc(50, 40, 50, 1.5, 2 * Math.PI);
        L09_Virus_Animation.crc2.strokeStyle = "black";
        L09_Virus_Animation.crc2.lineWidth = 15;
        L09_Virus_Animation.crc2.lineCap = "round";
        L09_Virus_Animation.crc2.stroke();
        L09_Virus_Animation.crc2.closePath();
        L09_Virus_Animation.crc2.beginPath();
        L09_Virus_Animation.crc2.arc(-50, 40, 50, 3.2, 2.5 * Math.PI);
        L09_Virus_Animation.crc2.strokeStyle = "black";
        L09_Virus_Animation.crc2.lineWidth = 15;
        L09_Virus_Animation.crc2.lineCap = "round";
        L09_Virus_Animation.crc2.stroke();
        L09_Virus_Animation.crc2.closePath();
        L09_Virus_Animation.crc2.beginPath();
        L09_Virus_Animation.crc2.arc(0, -50, 50, -0.75, 1.23 * Math.PI);
        L09_Virus_Animation.crc2.strokeStyle = "black";
        L09_Virus_Animation.crc2.lineWidth = 15;
        L09_Virus_Animation.crc2.lineCap = "round";
        L09_Virus_Animation.crc2.stroke();
        L09_Virus_Animation.crc2.closePath();
    }
})(L09_Virus_Animation || (L09_Virus_Animation = {}));
//# sourceMappingURL=main.js.map