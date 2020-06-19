"use strict";
var L09_Virus;
(function (L09_Virus) {
    //export let coronaViren: Corona[] = [];
    //export let antiViren: Anti[] = [];
    //export let blood: Blood[] = [];
    let imgData;
    L09_Virus.particles = [];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Particles starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Virus.crc2 = canvas.getContext("2d");
        drawBackground();
        //createParticles(20);
        for (let i = 0; i < 5; i++)
            L09_Virus.particles.push(new L09_Virus.Particle(5));
        imgData = L09_Virus.crc2.getImageData(0, 0, L09_Virus.crc2.canvas.width, L09_Virus.crc2.canvas.height);
        /*  for (let i: number = 0; i < 10; i++)
           coronaViren.push(new Corona());
     
         for (let i: number = 0; i < 5; i++)
           blood.push(new Blood());
     
         for (let i: number = 0; i < 20; i++)
           antiViren.push(new Anti());
     
         for (let i: number = 0; i < 5; i++)
           blood.push(new Blood()); */
        window.setInterval(update, 20);
    }
    /* function createParticles (_nParticles: number): void {
        console.log("Create Particles");
        for (let i: number = 0; i < _nParticles; i++) {
            let particle: Particle = new Particle(1);
            particles.push(particle);
        }
    }

    function update(): void {
        drawBackground();
        for (let particle of particles) {
            let newPosition: Vector = new Vector(particle.position.x, particle.position.y);
            particle.move(1 / 50);
            particle.draw(newPosition, newPosition);
        }
    } */
    function drawBackground() {
        console.log("drawBackground");
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
        L09_Virus.crc2.lineWidth = 10;
        L09_Virus.crc2.strokeStyle = "HSLA(360, 100%, 72%, 1)";
        L09_Virus.crc2.stroke();
    }
    function update(_timeslice) {
        //console.log("update in main")
        L09_Virus.crc2.putImageData(imgData, 0, 0);
        for (let particle of L09_Virus.particles)
            particle.update(1 / 50);
        /*  for (let anti of antiViren)
           anti.update(1 / 50);
     
         for (let bloodPiece of blood)
           bloodPiece.update(1 / 50); */
    }
})(L09_Virus || (L09_Virus = {}));
;
//# sourceMappingURL=virusMain.js.map