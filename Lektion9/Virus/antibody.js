"use strict";
var L09_Virus;
(function (L09_Virus) {
    class Antibody {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L09_Virus.Vector(0, 0);
            this.velocity = new L09_Virus.Vector(0, 0);
            this.velocity.random(50, 100);
        }
        draw() {
            console.log("Antibodys");
            let radiusParticle = 50;
            let gradient = L09_Virus.crc2.createRadialGradient(0, 0, 1, 30, 70, radiusParticle);
            L09_Virus.crc2.beginPath();
            L09_Virus.crc2.arc(100, 90, 15, 1.2, 1.6 * Math.PI);
            L09_Virus.crc2.stroke();
            L09_Virus.crc2.strokeStyle = "green";
            L09_Virus.crc2.moveTo(45, 90);
            L09_Virus.crc2.lineTo(86, 90);
            L09_Virus.crc2.stroke();
            L09_Virus.crc2.stroke();
            L09_Virus.crc2.closePath();
            L09_Virus.crc2.beginPath();
            L09_Virus.crc2.arc(130, 120, 15, 0.5, 1.3 * Math.PI);
            L09_Virus.crc2.stroke();
            L09_Virus.crc2.strokeStyle = "green";
            L09_Virus.crc2.moveTo(120, 130);
            L09_Virus.crc2.lineTo(86, 160);
            L09_Virus.crc2.stroke();
            L09_Virus.crc2.stroke();
            L09_Virus.crc2.closePath();
            L09_Virus.crc2.strokeStyle = "HSL(0, 76%, 47%)";
            L09_Virus.crc2.lineWidth = 2;
            //crc2.save();
            //crc2.beginPath();
            //crc2.translate(_position.x, _position.y);
            L09_Virus.crc2.fillStyle = gradient;
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
    L09_Virus.Antibody = Antibody;
})(L09_Virus || (L09_Virus = {}));
//# sourceMappingURL=antibody.js.map