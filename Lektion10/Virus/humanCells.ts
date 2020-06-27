namespace L10_Virus {
    export class HumanCell extends Cell {

        constructor(_position?: Vector) {
            super(_position);
            this.velocity.random(20, 50);
        }

        draw(): void {
            //console.log("humanCell drawn" + this.position.x, this.position.y);
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);

            let radiusParticle: number = 16;
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            crc2.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(360, 100%, 22%,1)");
            gradient.addColorStop(0.5, "HSLA(360, 100%, 22%,1)");
            gradient.addColorStop(0.6, "HSLA(360, 100%, 47%,1)");
            gradient.addColorStop(1, "HSLA(360, 100%, 47%, 1)");
            crc2.strokeStyle = "HSL(0, 76%, 47%)";
            crc2.lineWidth = 7;         
            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.stroke();

            crc2.restore();
        }

        move(_timeslice: number): void {
            super.move(_timeslice);
        }
    }
}