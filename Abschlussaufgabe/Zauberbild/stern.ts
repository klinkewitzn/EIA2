namespace zauberbild {
    export class Star extends Symbol {
        position: Vector;
        size: number;
        rotation: number;

        constructor(_position: Vector) {
            super(_position);
            this.size = 40;
            this.rotation = 0;
            this.color = "HSL(0,53%,58%)";
        }

        draw(crcStar: CanvasRenderingContext2D): void {

            crcStar.save();
            crcStar.beginPath();
            crcStar.translate(this.position.x, this.position.y);
            crcStar.rotate(this.rotation * Math.PI / 150);
            crcStar.scale(0.4, 0.6)
            crcStar.beginPath();
            crcStar.moveTo(0, -50);
            crcStar.lineTo(100, 50);
            crcStar.lineTo(-100, 50);
            crcStar.closePath();
            crcStar.fillStyle = this.color;//"HSL(0,53%,58%)"
            crcStar.fill();
            crcStar.restore();
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
            this.rotation += 1;

            //if (this.isHit = true) this.size +=30;
        }
        
        
    }
}