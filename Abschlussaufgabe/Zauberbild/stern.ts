namespace zauberbild {
    export class Star extends Symbol {
       
        rotation: number;
        

        constructor(_position: Vector,_color?: string) {
            super(_position);
         
            this.rotation = 0;
            this.color = "HSL(0,53%,58%)";
        }

        draw(crcStar: CanvasRenderingContext2D): void {

            crcStar.save();
            crcStar.beginPath();
          
            crcStar.translate(this.position.x, this.position.y);
            crcStar.rotate(this.rotation * Math.PI / 150);
        
            crcStar.beginPath();

            crcStar.moveTo(0, -20);
            for (let i: number = 0; i < 5; i++) {
                crcStar.rotate(Math.PI / 5);
                crcStar.lineTo(0, - 20 * 2);
                crcStar.rotate(Math.PI / 5);
                crcStar.lineTo(0, - 20);
            }
            
           
            crcStar.closePath();
            crcStar.fillStyle = this.color;
            crcStar.fill();
            crcStar.restore();
        }
        move(_timeslice: number): void {
            
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

          
        }

        
    }
}