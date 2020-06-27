namespace L10_Virus {
    export class Antibody extends Cell {

        rotation: number;
        constructor(_position: Vector) {
            super(_position);
            this.velocity.random(20, 50);
            this.rotation = Math.random() * 360
        }
        draw(): void {
            //console.log("antibody drawn" + this.position.x, this.position.y);
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.rotate(this.rotation);
            crc2.moveTo(0, 0);
            crc2.lineTo(0, 30);
            crc2.strokeStyle = "green"
            crc2.lineWidth = 2.3;
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(0, 46, 15, 0, 1 * Math.PI, true);
            crc2.stroke();
            crc2.restore();
        }


        move(_timeslice: number): void {
            super.move(_timeslice);
        }
    }
}
