"use strict";
var zauberbild;
(function (zauberbild) {
    class Heart extends zauberbild.Symbol {
        constructor(_position) {
            super(_position);
        }
        draw(crcHeart) {
            crcHeart.save();
            //crcHeart.scale(0.4, 0.2);
            crcHeart.translate(this.position.x, this.position.y);
            crcHeart.beginPath();
            crcHeart.moveTo(30, -30);
            crcHeart.lineTo(30, 30);
            crcHeart.lineTo(-30, 30);
            crcHeart.lineTo(-30, -30);
            /*  crcHeart.arc(0, 0, 5, 0, Math.PI * 2, true);
             crcHeart.moveTo(-30, -80);
             crcHeart.arc(0, 0, 5, 0, Math.PI * 2, true); */
            /*  crcHeart.moveTo(75, 40);
             crcHeart.bezierCurveTo(75, 37, 70, 25, 50, 25);
             crcHeart.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
             crcHeart.bezierCurveTo(20, 80, 40, 102, 75, 120);
             crcHeart.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
             crcHeart.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
             crcHeart.bezierCurveTo(85, 25, 75, 37, 75, 40);
             crcHeart.closePath(); */
            crcHeart.fillStyle = "HSL(0,53%,58%)";
            crcHeart.fill();
            crcHeart.restore();
        }
    }
    zauberbild.Heart = Heart;
})(zauberbild || (zauberbild = {}));
//# sourceMappingURL=heart.js.map