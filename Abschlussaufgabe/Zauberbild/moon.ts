namespace zauberbild {
    export class Moon extends Symbol {
        position: Vector;
        size: number;
        rotation: number;

        constructor(_position: Vector) {
            super(_position);
            this.size = 40;
            this.color = "HSL(268, 100%, 4%)";
            this.rotation =1;
        }

        draw(crcMoon: CanvasRenderingContext2D): void {
            crcMoon.save();
            crcMoon.beginPath();
            crcMoon.translate(this.position.x, this.position.y);
            crcMoon.scale(0.6, 0.6);
            /* crcMoon.arc(0, 0, 100, 1, Math.PI * 1, false); */
            crcMoon.moveTo(40, 60);
            crcMoon.bezierCurveTo(-91, 60, -91, -60, 40, -60);
            crcMoon.moveTo(40, 60);
           crcMoon.bezierCurveTo(-61, 60, -61, -60, 40, -60); 
           crcMoon.lineWidth = 3;
            /* crcMoon.closePath(); */
            crcMoon.strokeStyle = this.color;
            crcMoon.stroke();
            
           /*  crcMoon.fillStyle = "HSL(0,53%,58%)"
            crcMoon.fill(); */
            crcMoon.restore();
        }
    }
}