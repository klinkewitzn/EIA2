namespace L09_Virus {
    export class HumanCell {
        position: Vector;
        velocity: Vector;

        constructor(_position?: Vector) {
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(20, 40);
        }

        draw(): void {
            console.log("humanCell drawn" + this.position.x, this.position.y);
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);

            let radiusParticle: number = 50;
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            crc2.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(360, 100%, 22%,1)");
            gradient.addColorStop(0.5, "HSLA(360, 100%, 22%,1)");
            gradient.addColorStop(0.6, "HSLA(360, 100%, 47%,1)");
            gradient.addColorStop(1, "HSLA(360, 100%, 47%, 1)");
            crc2.strokeStyle = "HSL(0, 76%, 47%)";
            crc2.lineWidth = 7;         
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