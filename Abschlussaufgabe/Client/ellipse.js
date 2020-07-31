"use strict";
var zauberbild;
(function (zauberbild) {
    class Ellipse extends zauberbild.Symbol {
        constructor(_position) {
            super(_position);
        }
        draw(crcEllipse) {
            crcEllipse.save();
            crcEllipse.beginPath();
            crcEllipse.translate(150, 73);
            crcEllipse.scale(0.7, 0.6);
            crcEllipse.arc(0, 0, 100, 0, Math.PI * 2, true);
            crcEllipse.closePath();
            crcEllipse.fillStyle = "HSL(0,53%,58%)";
            crcEllipse.fill();
            crcEllipse.restore();
        }
    }
    zauberbild.Ellipse = Ellipse;
})(zauberbild || (zauberbild = {}));
//# sourceMappingURL=ellipse.js.map