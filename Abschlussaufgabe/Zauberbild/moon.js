"use strict";
var zauberbild;
(function (zauberbild) {
    class Moon extends zauberbild.Symbol {
        constructor(_position) {
            super(_position);
        }
        draw(crcMoon) {
            crcMoon.save();
            crcMoon.scale(1.1, 1.3);
            crcMoon.beginPath();
            crcMoon.bezierCurveTo(170, 0, -100, 60, 170, 110);
            crcMoon.bezierCurveTo(170, 100, 90, 70, 170, 0);
            crcMoon.closePath();
            crcMoon.fillStyle = "HSL(0,53%,58%)";
            crcMoon.fill();
            crcMoon.restore();
        }
    }
    zauberbild.Moon = Moon;
})(zauberbild || (zauberbild = {}));
//# sourceMappingURL=moon.js.map