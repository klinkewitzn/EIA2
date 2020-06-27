"use strict";
var L10_Virus;
(function (L10_Virus) {
    class Antibody extends L10_Virus.Cell {
        constructor(_position) {
            super(_position);
            this.velocity.random(20, 50);
            this.rotation = Math.random() * 360;
        }
        draw() {
            //console.log("antibody drawn" + this.position.x, this.position.y);
            L10_Virus.crc2.save();
            L10_Virus.crc2.beginPath();
            L10_Virus.crc2.translate(this.position.x, this.position.y);
            L10_Virus.crc2.rotate(this.rotation);
            L10_Virus.crc2.moveTo(0, 0);
            L10_Virus.crc2.lineTo(0, 30);
            L10_Virus.crc2.strokeStyle = "green";
            L10_Virus.crc2.lineWidth = 2.3;
            L10_Virus.crc2.stroke();
            L10_Virus.crc2.closePath();
            L10_Virus.crc2.beginPath();
            L10_Virus.crc2.arc(0, 46, 15, 0, 1 * Math.PI, true);
            L10_Virus.crc2.stroke();
            L10_Virus.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
        }
    }
    L10_Virus.Antibody = Antibody;
})(L10_Virus || (L10_Virus = {}));
//# sourceMappingURL=antibody.js.map