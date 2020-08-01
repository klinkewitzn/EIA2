namespace zauberbild {

    export abstract class Symbol {
       /*  color: string; */
        rotation: number;
        velocity: Vector;
        position: Vector;
        active: boolean;
        radius: Vector;

        constructor(_position?: Vector) {
            if (_position)
                this.position = _position.copy();

            this.active = false;
            this.velocity = new Vector(0, 0);
            this.velocity.random(50, 100);
        }

        abstract draw(crc: CanvasRenderingContext2D): void;

        rotate(_factor: number): void {
            this.rotation = _factor;
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