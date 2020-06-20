"use strict";
var L09_Virus;
(function (L09_Virus) {
    class Corona {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L09_Virus.Vector(0, 0);
            this.velocity = new L09_Virus.Vector(0, 0);
            this.velocity.random(20, 50);
        }
        draw() {
            console.log("corona drawn" + this.position.x, this.position.y);
            L09_Virus.crc2.save();
            L09_Virus.crc2.beginPath();
            L09_Virus.crc2.translate(this.position.x, this.position.y);
            L09_Virus.crc2.arc(180, 300, 19, 0, 2 * Math.PI);
            L09_Virus.crc2.stroke();
            L09_Virus.crc2.strokeStyle = "HSL(0, 76%, 47%)";
            L09_Virus.crc2.moveTo(180, 300);
            L09_Virus.crc2.lineTo(200, 330);
            L09_Virus.crc2.arc(200, 330, 5, 0, 2 * Math.PI);
            L09_Virus.crc2.moveTo(180, 300);
            L09_Virus.crc2.lineTo(170, 333);
            L09_Virus.crc2.arc(170, 333, 5, 0, 2 * Math.PI);
            L09_Virus.crc2.moveTo(180, 300);
            L09_Virus.crc2.lineTo(149, 318);
            L09_Virus.crc2.arc(149, 318, 5, 0, 2 * Math.PI);
            L09_Virus.crc2.moveTo(180, 300);
            L09_Virus.crc2.lineTo(143, 290);
            L09_Virus.crc2.arc(143, 290, 5, 0, 2 * Math.PI);
            L09_Virus.crc2.moveTo(180, 300);
            L09_Virus.crc2.lineTo(160, 270);
            L09_Virus.crc2.arc(160, 270, 5, 0, 2 * Math.PI);
            L09_Virus.crc2.moveTo(180, 300);
            L09_Virus.crc2.lineTo(188, 266);
            L09_Virus.crc2.arc(188, 266, 5, 0, 2 * Math.PI);
            L09_Virus.crc2.moveTo(180, 300);
            L09_Virus.crc2.lineTo(210, 280);
            L09_Virus.crc2.arc(210, 280, 5, 0, 2 * Math.PI);
            L09_Virus.crc2.moveTo(180, 300);
            L09_Virus.crc2.lineTo(214, 306);
            L09_Virus.crc2.arc(214, 306, 5, 0, 2 * Math.PI, true);
            L09_Virus.crc2.fillStyle = ("HSL(0, 76%, 47%)");
            L09_Virus.crc2.fill();
            L09_Virus.crc2.stroke();
            L09_Virus.crc2.closePath();
            L09_Virus.crc2.restore();
        }
        move(_timeslice) {
            let offset = new L09_Virus.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_Virus.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_Virus.crc2.canvas.height;
            if (this.position.x > L09_Virus.crc2.canvas.width)
                this.position.x -= L09_Virus.crc2.canvas.width;
            if (this.position.y > L09_Virus.crc2.canvas.height)
                this.position.y -= L09_Virus.crc2.canvas.height;
        }
    }
    L09_Virus.Corona = Corona;
})(L09_Virus || (L09_Virus = {}));
//# sourceMappingURL=corona.js.map