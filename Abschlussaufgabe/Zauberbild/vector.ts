namespace zauberbild {
    export class Vector {
        x: number;
        y: number;
        public draggable: true; 

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        copy(): Vector {
            return new Vector(this.x, this.y); 
        }

        random(_minLength: number, _maxLength: number): void {
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = Math.random() * 2 * Math.PI;

            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
            return vector;
        }

        public get length(): number {
            return Math.hypot(this.x, this.y);
        }
        
        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
}