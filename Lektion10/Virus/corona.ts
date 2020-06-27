namespace L10_Virus {
    export class Corona extends Cell {

        constructor(_position: Vector) {
            super(_position);
            this.velocity.random(20, 50);
        }

        draw(): void {
            //console.log("corona drawn" + this.position.x, this.position.y);
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            for (let i = 0; i < 6; i++) {
                crc2.beginPath();
                crc2.rotate(45.04);
                crc2.moveTo(0, 5);
                crc2.lineTo(0, 25);
                crc2.strokeStyle = "HSL(0, 76%, 47%)";
                crc2.lineWidth = 4;
                crc2.stroke();
                crc2.closePath();
                crc2.beginPath();
                crc2.arc(0, 30, 6, 0, 2 * Math.PI);
                crc2.fillStyle = "HSL(0, 76%, 47%)";
                crc2.fill();
            }
            crc2.beginPath();
            crc2.arc(0, 0, 19, 0, 2 * Math.PI);
            crc2.fillStyle = "HSL(0, 76%, 47%)";
            crc2.fill();
            crc2.closePath();
            crc2.restore();

        }

        move(_timeslice: number): void {
            super.move(_timeslice);
        }
    }
}