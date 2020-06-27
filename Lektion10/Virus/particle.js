"use strict";
var L10_Virus;
(function (L10_Virus) {
    class Particle extends L10_Virus.Cell {
        constructor(_position) {
            super(_position);
            this.velocity.random(20, 50);
        }
        draw() {
            //console.log("Particle draw");
            L10_Virus.crc2.save();
            L10_Virus.crc2.beginPath();
            L10_Virus.crc2.translate(this.position.x, this.position.y);
            let radiusParticle = 9;
            let gradient = L10_Virus.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            L10_Virus.crc2.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(249, 9%, 47%, 0.3)");
            gradient.addColorStop(1, "HSLA(249, 9%, 47%, 0.8)");
            L10_Virus.crc2.fillStyle = gradient;
            L10_Virus.crc2.fill();
            L10_Virus.crc2.closePath();
            L10_Virus.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
        }
    }
    L10_Virus.Particle = Particle;
})(L10_Virus || (L10_Virus = {}));
//# sourceMappingURL=particle.js.map