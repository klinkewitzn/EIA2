namespace zauberbild {

    export abstract class Symbol {
        color: string;
        velocity: Vector;
        position: Vector;


        constructor(_position?: Vector) {
            if (_position)
                this.position = _position.copy();
            this.velocity = new Vector(0, 0);
            this.velocity.random(50, 100);
        }

        abstract draw(crc2: CanvasRenderingContext2D): void;

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