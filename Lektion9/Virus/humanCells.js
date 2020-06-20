"use strict";
var L09_Virus;
(function (L09_Virus) {
    class HumanCell {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L09_Virus.Vector(0, 0);
            this.velocity = new L09_Virus.Vector(0, 0);
            this.velocity.random(20, 40);
        }
        draw() {
            console.log("humanCell drawn" + this.position.x, this.position.y);
            L09_Virus.crc2.save();
            L09_Virus.crc2.beginPath();
            L09_Virus.crc2.translate(this.position.x, this.position.y);
            let radiusParticle = 50;
            let gradient = L09_Virus.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            L09_Virus.crc2.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(360, 100%, 22%,1)");
            gradient.addColorStop(0.5, "HSLA(360, 100%, 22%,1)");
            gradient.addColorStop(0.6, "HSLA(360, 100%, 47%,1)");
            gradient.addColorStop(1, "HSLA(360, 100%, 47%, 1)");
            L09_Virus.crc2.strokeStyle = "HSL(0, 76%, 47%)";
            L09_Virus.crc2.lineWidth = 7;
            L09_Virus.crc2.fillStyle = gradient;
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
    L09_Virus.HumanCell = HumanCell;
})(L09_Virus || (L09_Virus = {}));
//# sourceMappingURL=humanCells.js.map