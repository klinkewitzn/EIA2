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
            L10_Virus.crc2.translate(this.position.x, this.position.y);
            for (let i = 0; i < 6; i++) {
                L10_Virus.crc2.beginPath();
                L10_Virus.crc2.rotate(45.04);
                L10_Virus.crc2.moveTo(0, 5);
                L10_Virus.crc2.lineTo(0, 25);
                L10_Virus.crc2.strokeStyle = "HSL(0, 76%, 47%)";
                L10_Virus.crc2.lineWidth = 4;
                L10_Virus.crc2.stroke();
                L10_Virus.crc2.closePath();
                L10_Virus.crc2.beginPath();
                L10_Virus.crc2.arc(0, 30, 6, 0, 2 * Math.PI);
                L10_Virus.crc2.fillStyle = "HSL(0, 76%, 47%)";
                L10_Virus.crc2.fill();
            }
            L10_Virus.crc2.beginPath();
            L10_Virus.crc2.arc(0, 0, 19, 0, 2 * Math.PI);
            L10_Virus.crc2.fillStyle = "HSL(0, 76%, 47%)";
            L10_Virus.crc2.fill();
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