"use strict";
var zauberbild;
(function (zauberbild) {
    class Heart extends zauberbild.Symbol {
        constructor(_position) {
            super(_position);
            this.color = "red";
        }
        draw(context) {
            context.save();
            zauberbild.crcHeart.scale(2, 1.2);
            zauberbild.crc2.scale(0.5, 0.6);
            context.translate(this.position.x, this.position.y);
            context.fillStyle = this.color;
            context.beginPath();
            context.moveTo(75, 40);
            context.bezierCurveTo(75, 37, 70, 25, 50, 25);
            context.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
            context.bezierCurveTo(20, 80, 40, 102, 75, 120);
            context.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
            context.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
            context.bezierCurveTo(85, 25, 75, 37, 75, 40);
            context.fill();
            context.restore();
        }
    }
    zauberbild.Heart = Heart;
})(zauberbild || (zauberbild = {}));
//# sourceMappingURL=heart.js.map