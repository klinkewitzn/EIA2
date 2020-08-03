namespace zauberbild {

    export abstract class Symbol {
        /*  color: string; */
        rotation: number;
        velocity: Vector;
        position: Vector;
        active: boolean;
        radius: number;
        size: number;
        color: string;

        constructor(_position?: Vector) {
            if (_position)
                this.position = _position.copy();

            this.active = false;
           // this.color = "green";
            this.velocity = new Vector(0, 0);
            this.velocity.random(50, 100);
            this.rotation =1;
            this.radius = 25;
            this.size = 27;
        }

        abstract draw(crc: CanvasRenderingContext2D): void;

        changeColor(_color: string): void {
            this.color = _color;
        }

        rotate(_factor: number): void {
            this.rotation += _factor;
            crc2.rotate(0);
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

        /* isHit(_hotspot: Vector): boolean {
            let hitsize: number = 50 * this.size;
            let difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        } */
    }


}