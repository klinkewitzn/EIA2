"use strict";
var L09_Virus;
(function (L09_Virus) {
    class Particle {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L09_Virus.Vector(0, 0);
            this.velocity = new L09_Virus.Vector(0, 0);
            this.velocity.random(50, 100);
        }
        draw() {
            console.log("Particle draw");
            L09_Virus.crc2.save();
            // Mit Math.random werden zufällige Positionen erzeugt
            let radiusParticle = 19;
            let particle = new Path2D();
            let gradient = L09_Virus.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(249, 9%, 47%, 0.3)");
            gradient.addColorStop(1, "HSLA(249, 9%, 47%, 0.8)");
            L09_Virus.crc2.save();
            L09_Virus.crc2.beginPath();
            //crc2.translate(_position.x, _position.y);
            L09_Virus.crc2.fillStyle = gradient;
            L09_Virus.crc2.restore();
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
    L09_Virus.Particle = Particle;
})(L09_Virus || (L09_Virus = {}));
//# sourceMappingURL=particle.js.map