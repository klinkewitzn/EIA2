namespace zauberbild {
    export class Moon extends Symbol {
     

        constructor(_position: Vector,_color?: string) {
            super(_position);
            this.color = "HSL(268, 100%, 4%)";
        }

        draw(crcMoon: CanvasRenderingContext2D): void {
            crcMoon.save();
            crcMoon.beginPath();
            crcMoon.translate(this.position.x, this.position.y);
            crcMoon.scale(0.6, 0.6);
            crcMoon.moveTo(40, 60);
            crcMoon.bezierCurveTo(-91, 60, -91, -60, 40, -60);
            crcMoon.moveTo(40, 60);
            crcMoon.bezierCurveTo(-61, 60, -61, -60, 40, -60);
            crcMoon.lineWidth = 3;
            crcMoon.strokeStyle = this.color;
            crcMoon.stroke();
            crcMoon.restore();
        }
    }
}