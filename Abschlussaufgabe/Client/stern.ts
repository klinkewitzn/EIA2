namespace zauberbild {
    export class Star extends Symbol {
        position: Vector;
        size: Vector;
        rotation: number;

        constructor(_position: Vector) {
            super(_position);
        }

        draw(crcStar: CanvasRenderingContext2D): void {
            crcStar.beginPath();
            crcStar.save();
            crcStar.translate(20, 10);
            crcStar.scale(1.2, 0.6);
            //cxt.scale(0.4, 0.4);
            crcStar.moveTo(108, 0.0);
            crcStar.lineTo(141, 70);
            crcStar.lineTo(218, 78.3);
            crcStar.lineTo(162, 131);
            crcStar.lineTo(175, 205);
            crcStar.lineTo(108, 170);
            crcStar.lineTo(41.2, 205);
            crcStar.lineTo(55, 131);
            crcStar.lineTo(1, 78);
            crcStar.lineTo(75, 68);
            crcStar.lineTo(108, 0);
            crcStar.closePath();
            crcStar.fillStyle = "HSL(0,53%,58%)";
            crcStar.fill();
            crcStar.restore();
        }
    }
}