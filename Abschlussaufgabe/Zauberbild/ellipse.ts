namespace zauberbild {
    export class Ellipse extends Symbol {
        //position: Vector;
        size: number;
        //rotation: number;

        constructor(_position: Vector,_color?: string) {
            super(_position);
            this.size = 10;
            this.color = "HSL(0,53%,58%)";
            // this.rotation = 0;
        }

        draw(crcEllipse: CanvasRenderingContext2D): void {
            crcEllipse.save();
            crcEllipse.beginPath();
            crcEllipse.translate(this.position.x, this.position.y);
            //crcEllipse.scale(0.2, 0.2)
            crcEllipse.ellipse(0, 0, this.size, 20, Math.PI / 4, 0, 2 * Math.PI);
            //crcEllipse.arc(0, 0, this.size, 0, Math.PI * 2, true);
            crcEllipse.closePath();
            crcEllipse.fillStyle = this.color;
            //crcEllipse.rotate(this.rotation);
            crcEllipse.fill();
            crcEllipse.restore();
        }
        move(_timeslice: number): void {
            //crcStar.rotate(this.rotation * Math.PI / 150);
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
            //color-code von Jule Heinzmann 
            if (this.size <= 30) {
                this.size += 0.6;
            }
            else {
                this.size = 10;
            }
        }
    }
}