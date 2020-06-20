namespace L09_Virus {
    export class Antibody {
        position: Vector;
        velocity: Vector;

        constructor(_position?: Vector) {
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(50, 100);
        }

        draw(): void {
            console.log(console.log("antibody drawn" + this.position.x, this.position.y));
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

            //crc2.save();
            //crc2.beginPath();
            //crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;
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
    }
}