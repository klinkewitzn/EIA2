namespace zauberbild {
    export class Heart extends Symbol {
       
        currentcolor: string;
        i: number;
        colors: Array<string> = ["HSL(0,53%,58%)", "HSL(209, 100%, 72%)", "HSL(209, 70%, 72%)", "HSL(209, 80%, 72%)", "HSL(209, 60%, 72%)", "HSL(0,23%,58%)"/*,  "#FFDF00", "#DFFF00", "#BFFF00" */,
        "HSL(209, 650%, 72%)", "HSL(209, 30%, 72%)", "HSL(209, 20%, 72%)", "HSL(209, 45%, 72%)"];

        constructor(_position: Vector,_color?: string) {
            super(_position);
            this.currentcolor = this.colors[0];
            this.i = 0;
            
        }

        draw(crcHeart: CanvasRenderingContext2D): void {
            crcHeart.save();
          
         
            crcHeart.beginPath();
            crcHeart.translate(this.position.x, this.position.y);
            crcHeart.moveTo(30, -30);
            crcHeart.lineTo(30, 30);
            crcHeart.lineTo(-30, 30);
            crcHeart.lineTo(-30, -30);
            crcHeart.closePath();
            crcHeart.fillStyle = this.currentcolor;
            crcHeart.fill();
     
            crcHeart.restore();
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
            //color-code-Prinzip von Jule Heinzmann 
            if (this.i < this.colors.length) {
                this.currentcolor = this.colors[Math.floor(this.i)];
                this.i += 0.1;
            }
            else {
                this.i = 0;
            }
        }
    }
}   