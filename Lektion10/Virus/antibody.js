"use strict";
var L10_Virus;
(function (L10_Virus) {
    class Antibody extends L10_Virus.Cell {
        constructor(_position) {
            super(_position);
            this.velocity.random(20, 50);
        }
        draw() {
            //console.log("antibody drawn" + this.position.x, this.position.y);
            L10_Virus.crc2.save();
            L10_Virus.crc2.beginPath();
            L10_Virus.crc2.translate(this.position.x, this.position.y);
            let radiusParticle = 50;
            let gradient = L10_Virus.crc2.createRadialGradient(0, 0, 1, 30, 70, radiusParticle);
            L10_Virus.crc2.arc(100, 90, 15, 1.2, 1.6 * Math.PI);
            L10_Virus.crc2.stroke();
            L10_Virus.crc2.strokeStyle = "green";
            L10_Virus.crc2.moveTo(45, 90);
            L10_Virus.crc2.lineTo(86, 90);
            L10_Virus.crc2.stroke();
            L10_Virus.crc2.stroke();
            L10_Virus.crc2.closePath();
            L10_Virus.crc2.beginPath();
            L10_Virus.crc2.arc(130, 120, 15, 0.5, 1.3 * Math.PI);
            L10_Virus.crc2.stroke();
            L10_Virus.crc2.strokeStyle = "green";
            L10_Virus.crc2.moveTo(120, 130);
            L10_Virus.crc2.lineTo(86, 160);
            L10_Virus.crc2.stroke();
            L10_Virus.crc2.stroke();
            L10_Virus.crc2.closePath();
            L10_Virus.crc2.strokeStyle = "HSL(0, 76%, 47%)";
            L10_Virus.crc2.lineWidth = 2;
            L10_Virus.crc2.fillStyle = gradient;
            L10_Virus.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
        }
    }
    L10_Virus.Antibody = Antibody;
})(L10_Virus || (L10_Virus = {}));
//# sourceMappingURL=antibody.js.map