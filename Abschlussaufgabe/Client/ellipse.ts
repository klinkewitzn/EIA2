namespace zauberbild {
    export class Ellipse extends Symbol {
        position: Vector;
        size: Vector;
        rotation: number;

        constructor(_position: Vector) {
            super(_position);
        }

        draw(crcEllipse: CanvasRenderingContext2D): void {
            crcEllipse.beginPath();
            crcEllipse.translate(150, 73)
            crcEllipse.scale(0.7, 0.6)
            crcEllipse.arc(0, 0, 100, 0, Math.PI * 2, true);
            crcEllipse.closePath();
            crcEllipse.fillStyle = "HSL(0,53%,58%)"
            crcEllipse.fill();
        }
    }
}