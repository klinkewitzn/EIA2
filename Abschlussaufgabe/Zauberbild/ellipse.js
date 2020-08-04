"use strict";
var zauberbild;
(function (zauberbild) {
    class Ellipse extends zauberbild.Symbol {
        constructor(_position, _color) {
            super(_position);
            this.size = 10;
            this.color = "HSL(0,53%,58%)";
        }
        draw(crcEllipse) {
            crcEllipse.save();
            crcEllipse.beginPath();
            crcEllipse.translate(this.position.x, this.position.y);
            crcEllipse.ellipse(0, 0, this.size, 20, Math.PI / 4, 0, 2 * Math.PI);
            crcEllipse.closePath();
            crcEllipse.fillStyle = this.color;
            crcEllipse.fill();
            crcEllipse.restore();
        }
        move(_timeslice) {
            let offset = new zauberbild.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += zauberbild.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += zauberbild.crc2.canvas.height;
            if (this.position.x > zauberbild.crc2.canvas.width)
                this.position.x -= zauberbild.crc2.canvas.width;
            if (this.position.y > zauberbild.crc2.canvas.height)
                this.position.y -= zauberbild.crc2.canvas.height;
            //size-code-Prinzip von Jule Heinzmann 
            if (this.size <= 30) {
                this.size += 0.6;
            }
            else {
                this.size = 10;
            }
        }
    }
    zauberbild.Ellipse = Ellipse;
})(zauberbild || (zauberbild = {}));
//# sourceMappingURL=ellipse.js.map