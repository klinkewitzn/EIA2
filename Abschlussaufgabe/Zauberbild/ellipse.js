"use strict";
var zauberbild;
(function (zauberbild) {
    class Ellipse extends zauberbild.Symbol {
        constructor(_position) {
            super(_position);
            this.size = 80;
            this.color = "HSL(0,53%,58%)";
            this.rotation = 0;
        }
        draw(crcEllipse) {
            crcEllipse.save();
            crcEllipse.beginPath();
            crcEllipse.translate(this.position.x, this.position.y);
            crcEllipse.scale(0.2, 0.2);
            crcEllipse.arc(0, 0, this.size, 0, Math.PI * 2, true);
            crcEllipse.closePath();
            crcEllipse.fillStyle = this.color;
            //crcEllipse.rotate(this.rotation);
            crcEllipse.fill();
            crcEllipse.restore();
        }
        move(_timeslice) {
            //crcStar.rotate(this.rotation * Math.PI / 150);
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
            //color-code von Jule Heinzmann 
            if (this.size <= 90) {
                this.size += 0.6;
            }
            else {
                this.size = 50;
            }
        }
    }
    zauberbild.Ellipse = Ellipse;
})(zauberbild || (zauberbild = {}));
//# sourceMappingURL=ellipse.js.map