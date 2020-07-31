namespace zauberbild {
    export class Moon extends Symbol {
        position: Vector;
        size: Vector;
        rotation: number;

        constructor(_position: Vector) {
            super(_position);
        }

        draw(crcMoon: CanvasRenderingContext2D): void {
            crcMoon.save();
            crcMoon.scale(1.1, 1.3);
            //cxt.scale(0.4, 0.8);
            //crcMoon.translate(this.position.x, this.position.y);
            //crcMoon.fillStyle = this.color;
            //context.lineWidth = 5;
            crcMoon.beginPath();
            crcMoon.bezierCurveTo(170, 0, -100, 60, 170, 110);
            crcMoon.bezierCurveTo(170, 100, 90, 70, 170, 0);
            crcMoon.closePath();
            crcMoon.fillStyle = "HSL(0,53%,58%)";
            crcMoon.fill();
            crcMoon.restore();
        }
    }
}