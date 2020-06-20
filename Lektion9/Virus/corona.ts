namespace L09_Virus {
    export class Corona {
        position: Vector;
        velocity: Vector;

        constructor(_position: Vector) {
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(50, 100);
        }

        draw(): void {
            // console.log("Draw Corona");
            crc2.save();
            crc2.beginPath();
           /*  crc2.translate(_position.x, _position.y); */
    
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
            crc2.save();
            crc2.restore();
    
    
             crc2.save();
            crc2.beginPath();
           /* crc2.translate(_position.x, _position.y);*/
            crc2.restore(); 
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
        }

        // infects(): boolean {
        //     if ()
        //     let hitsize: number = 50 * this.size;
        //     let difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
        //     return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        // }
    }
}