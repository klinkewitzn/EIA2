"use strict";
var L10_Virus;
(function (L10_Virus) {
    class Corona extends L10_Virus.Cell {
        constructor(_position) {
            super(_position);
            this.velocity.random(20, 50);
        }
        draw() {
            //console.log("corona drawn" + this.position.x, this.position.y);
            L10_Virus.crc2.save();
            L10_Virus.crc2.beginPath();
            L10_Virus.crc2.translate(this.position.x, this.position.y);
            L10_Virus.crc2.arc(180, 300, 19, 0, 2 * Math.PI);
            L10_Virus.crc2.stroke();
            L10_Virus.crc2.strokeStyle = "HSL(0, 76%, 47%)";
            L10_Virus.crc2.moveTo(180, 300);
            L10_Virus.crc2.lineTo(200, 330);
            L10_Virus.crc2.arc(200, 330, 5, 0, 2 * Math.PI);
            L10_Virus.crc2.moveTo(180, 300);
            L10_Virus.crc2.lineTo(170, 333);
            L10_Virus.crc2.arc(170, 333, 5, 0, 2 * Math.PI);
            L10_Virus.crc2.moveTo(180, 300);
            L10_Virus.crc2.lineTo(149, 318);
            L10_Virus.crc2.arc(149, 318, 5, 0, 2 * Math.PI);
            L10_Virus.crc2.moveTo(180, 300);
            L10_Virus.crc2.lineTo(143, 290);
            L10_Virus.crc2.arc(143, 290, 5, 0, 2 * Math.PI);
            L10_Virus.crc2.moveTo(180, 300);
            L10_Virus.crc2.lineTo(160, 270);
            L10_Virus.crc2.arc(160, 270, 5, 0, 2 * Math.PI);
            L10_Virus.crc2.moveTo(180, 300);
            L10_Virus.crc2.lineTo(188, 266);
            L10_Virus.crc2.arc(188, 266, 5, 0, 2 * Math.PI);
            L10_Virus.crc2.moveTo(180, 300);
            L10_Virus.crc2.lineTo(210, 280);
            L10_Virus.crc2.arc(210, 280, 5, 0, 2 * Math.PI);
            L10_Virus.crc2.moveTo(180, 300);
            L10_Virus.crc2.lineTo(214, 306);
            L10_Virus.crc2.arc(214, 306, 5, 0, 2 * Math.PI, true);
            L10_Virus.crc2.fillStyle = ("HSL(0, 76%, 47%)");
            L10_Virus.crc2.fill();
            L10_Virus.crc2.stroke();
            L10_Virus.crc2.closePath();
            L10_Virus.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
        }
    }
    L10_Virus.Corona = Corona;
})(L10_Virus || (L10_Virus = {}));
//# sourceMappingURL=corona.js.map