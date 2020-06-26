namespace L10_Virus {
    export class Corona extends Cell {

        constructor(_position: Vector) {
            super(_position);
            this.velocity.random(20, 50);
        }

        draw(): void {
            //console.log("corona drawn" + this.position.x, this.position.y);
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);

            crc2.arc(180, 300, 19, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.strokeStyle = "HSL(0, 76%, 47%)";
            crc2.moveTo(180, 300);
            crc2.lineTo(200, 330);
            crc2.arc(200, 330, 5, 0, 2 * Math.PI);
            crc2.moveTo(180, 300);
            crc2.lineTo(170, 333);
            crc2.arc(170, 333, 5, 0, 2 * Math.PI);
            crc2.moveTo(180, 300);
            crc2.lineTo(149, 318);
            crc2.arc(149, 318, 5, 0, 2 * Math.PI);
            crc2.moveTo(180, 300);
            crc2.lineTo(143, 290);
            crc2.arc(143, 290, 5, 0, 2 * Math.PI);
            crc2.moveTo(180, 300);
            crc2.lineTo(160, 270);
            crc2.arc(160, 270, 5, 0, 2 * Math.PI);
            crc2.moveTo(180, 300);
            crc2.lineTo(188, 266);
            crc2.arc(188, 266, 5, 0, 2 * Math.PI);
            crc2.moveTo(180, 300);
            crc2.lineTo(210, 280);
            crc2.arc(210, 280, 5, 0, 2 * Math.PI);
            crc2.moveTo(180, 300);
            crc2.lineTo(214, 306);
            crc2.arc(214, 306, 5, 0, 2 * Math.PI, true);
            crc2.fillStyle = ("HSL(0, 76%, 47%)");
            crc2.fill();
            crc2.stroke();


            crc2.closePath();

            crc2.restore();

        }

        move(_timeslice: number): void {
            super.move(_timeslice);
        }
    }
}