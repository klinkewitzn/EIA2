"use strict";
var L09_Virus_Animation;
(function (L09_Virus_Animation) {
    class Virus {
        constructor(_size, _position) {
            console.log("Virus Construtor");
            if (_position)
                this.position = _position;
            else
                this.position = new L09_Virus_Animation.Vector(0, 0);
            this.velocity = new L09_Virus_Animation.Vector(0, 0);
            this.velocity.random(20, 50);
            console.log(this.velocity);
            this.size = _size;
        }
        move(_timeslice) {
            //console.log("Virus moving");
            let offset = new L09_Virus_Animation.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_Virus_Animation.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_Virus_Animation.crc2.canvas.height;
            if (this.position.x > L09_Virus_Animation.crc2.canvas.width)
                this.position.x -= L09_Virus_Animation.crc2.canvas.width;
            if (this.position.y > L09_Virus_Animation.crc2.canvas.height)
                this.position.y -= L09_Virus_Animation.crc2.canvas.height;
        }
        draw() {
            //console.log("Virus drawing");
            L09_Virus_Animation.crc2.resetTransform();
            L09_Virus_Animation.crc2.save();
            L09_Virus_Animation.crc2.translate(this.position.x, this.position.y);
            let gradient = L09_Virus_Animation.crc2.createRadialGradient(0, 0, 0, 0, 0, 30);
            gradient.addColorStop(0, "black");
            gradient.addColorStop(1, "red");
            for (let i = 0; i < 9; i++) {
                L09_Virus_Animation.crc2.beginPath();
                L09_Virus_Animation.crc2.rotate(30);
                L09_Virus_Animation.crc2.moveTo(0, 30);
                L09_Virus_Animation.crc2.lineTo(0, 40);
                L09_Virus_Animation.crc2.strokeStyle = "red";
                L09_Virus_Animation.crc2.lineWidth = 3;
                L09_Virus_Animation.crc2.scale(this.size, this.size);
                L09_Virus_Animation.crc2.stroke();
                L09_Virus_Animation.crc2.closePath();
                L09_Virus_Animation.crc2.beginPath();
                L09_Virus_Animation.crc2.arc(0, 40, 5, 0, 1 * Math.PI);
                L09_Virus_Animation.crc2.fillStyle = gradient;
                L09_Virus_Animation.crc2.scale(this.size, this.size);
                L09_Virus_Animation.crc2.fill();
            }
            L09_Virus_Animation.crc2.beginPath();
            L09_Virus_Animation.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            L09_Virus_Animation.crc2.fillStyle = gradient;
            L09_Virus_Animation.crc2.scale(this.size, this.size);
            L09_Virus_Animation.crc2.fill();
            L09_Virus_Animation.crc2.closePath();
            L09_Virus_Animation.crc2.restore();
        }
    }
    L09_Virus_Animation.Virus = Virus;
})(L09_Virus_Animation || (L09_Virus_Animation = {}));
//# sourceMappingURL=virus.js.map