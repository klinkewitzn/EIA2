namespace L10_Virus {
    export class Antibody extends Cell {
        position: Vector;
        velocity: Vector;

        constructor(_position: Vector) {
            super(_position);
            this.velocity.random(20, 50);
        }
        draw(): void {
            //console.log("antibody drawn" + this.position.x, this.position.y);
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            let radiusParticle: number = 50;
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 1, 30, 70, radiusParticle);


            crc2.arc(100, 90, 15, 1.2, 1.6 * Math.PI);
            crc2.stroke();
            crc2.strokeStyle = "green";
            crc2.moveTo(45, 90);
            crc2.lineTo(86, 90);
            crc2.stroke();
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(130, 120, 15, 0.5, 1.3 * Math.PI);
            crc2.stroke();
            crc2.strokeStyle = "green";
            crc2.moveTo(120, 130);
            crc2.lineTo(86, 160);
            crc2.stroke();
            crc2.stroke();
            crc2.closePath();

            crc2.strokeStyle = "HSL(0, 76%, 47%)";
            crc2.lineWidth = 2;

            crc2.fillStyle = gradient;
            crc2.restore();
        }


        move(_timeslice: number): void {
            super.move(_timeslice);
        }
    }
}
