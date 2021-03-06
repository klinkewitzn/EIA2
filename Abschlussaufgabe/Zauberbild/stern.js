"use strict";
var zauberbild;
(function (zauberbild) {
    class Star extends zauberbild.Symbol {
        constructor(_position, _color) {
            super(_position);
            this.rotation = 0;
            this.color = "HSL(0,53%,58%)";
        }
        draw(crcStar) {
            crcStar.save();
            crcStar.beginPath();
            crcStar.translate(this.position.x, this.position.y);
            crcStar.rotate(this.rotation * Math.PI / 150);
            crcStar.beginPath();
            crcStar.moveTo(0, -20);
            for (let i = 0; i < 5; i++) {
                crcStar.rotate(Math.PI / 5);
                crcStar.lineTo(0, -20 * 2);
                crcStar.rotate(Math.PI / 5);
                crcStar.lineTo(0, -20);
            }
            crcStar.closePath();
            crcStar.fillStyle = this.color;
            crcStar.fill();
            crcStar.restore();
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
            this.rotation += 1;
        }
    }
    zauberbild.Star = Star;
})(zauberbild || (zauberbild = {}));
//# sourceMappingURL=stern.js.map