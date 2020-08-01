namespace zauberbild {
    export class Ellipse extends Symbol {
        position: Vector;
        size: Vector;
        rotation: number;

        constructor(_position: Vector) {
            super(_position);
        }

        draw(crcEllipse: CanvasRenderingContext2D): void {
            crcEllipse.save();
            crcEllipse.beginPath();
            crcEllipse.translate(this.position.x, this.position.y);
            crcEllipse.scale(0.2, 0.2)
            crcEllipse.arc(0, 0, 100, 0, Math.PI * 2, true);
            crcEllipse.closePath();
            crcEllipse.fillStyle = "HSL(0,53%,58%)"
            crcEllipse.fill();
            crcEllipse.restore();
        }
    }
}