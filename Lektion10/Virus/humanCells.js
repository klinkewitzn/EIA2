"use strict";
var L10_Virus;
(function (L10_Virus) {
    class HumanCell extends L10_Virus.Cell {
        constructor(_position) {
            super(_position);
            this.velocity.random(20, 50);
        }
        draw() {
            //console.log("humanCell drawn" + this.position.x, this.position.y);
            L10_Virus.crc2.save();
            L10_Virus.crc2.beginPath();
            L10_Virus.crc2.translate(this.position.x, this.position.y);
            let radiusParticle = 16;
            let gradient = L10_Virus.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            L10_Virus.crc2.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(360, 100%, 22%,1)");
            gradient.addColorStop(0.5, "HSLA(360, 100%, 22%,1)");
            gradient.addColorStop(0.6, "HSLA(360, 100%, 47%,1)");
            gradient.addColorStop(1, "HSLA(360, 100%, 47%, 1)");
            L10_Virus.crc2.strokeStyle = "HSL(0, 76%, 47%)";
            L10_Virus.crc2.lineWidth = 7;
            L10_Virus.crc2.fillStyle = gradient;
            L10_Virus.crc2.fill();
            L10_Virus.crc2.stroke();
            L10_Virus.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
        }
    }
    L10_Virus.HumanCell = HumanCell;
})(L10_Virus || (L10_Virus = {}));
//# sourceMappingURL=humanCells.js.map