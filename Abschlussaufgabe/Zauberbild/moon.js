"use strict";
var zauberbild;
(function (zauberbild) {
    class Moon extends zauberbild.Symbol {
        constructor(_position, _color) {
            super(_position);
            this.color = "HSL(268, 100%, 4%)";
        }
        draw(crcMoon) {
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
    zauberbild.Moon = Moon;
})(zauberbild || (zauberbild = {}));
//# sourceMappingURL=moon.js.map