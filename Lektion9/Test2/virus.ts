namespace L09_Virus_Animation {

    export class Virus {
        position: Vector;
        velocity: Vector;
        type: number;
        size: number;

        constructor (_size: number, _position?: Vector) {
            console.log("Virus Construtor");
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);
                
            this.velocity = new Vector(0, 0);
            this.velocity.random(20, 50);
            console.log(this.velocity);

            this.size = _size;
        }

        move(_timeslice: number): void {
            //console.log("Virus moving");
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

        draw(): void {
            //console.log("Virus drawing");

            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 30);
            gradient.addColorStop(0, "black");
            gradient.addColorStop(1, "red");
    
            for (let i: number = 0; i < 9; i++) {
                crc2.beginPath();
                crc2.rotate(30);
                crc2.moveTo(0, 30);
                crc2.lineTo(0, 40);
                crc2.strokeStyle = "red";
                crc2.lineWidth = 3;
                crc2.scale(this.size, this.size);
                crc2.stroke();
                crc2.closePath();
                crc2.beginPath();
                crc2.arc(0, 40, 5, 0, 1 * Math.PI);
                crc2.fillStyle = gradient;
                crc2.scale(this.size, this.size);
                crc2.fill();
            }
            crc2.beginPath();
            crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            crc2.fillStyle = gradient;
            crc2.scale(this.size, this.size);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
    }
}