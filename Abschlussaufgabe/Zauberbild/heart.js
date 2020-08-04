"use strict";
var zauberbild;
(function (zauberbild) {
    class Heart extends zauberbild.Symbol {
        constructor(_position, _color) {
            super(_position);
            this.colors = ["HSL(0,53%,58%)", "HSL(209, 100%, 72%)", "HSL(209, 70%, 72%)", "HSL(209, 80%, 72%)", "HSL(209, 60%, 72%)", "HSL(0,23%,58%)" /*,  "#FFDF00", "#DFFF00", "#BFFF00" */,
                "HSL(209, 650%, 72%)", "HSL(209, 30%, 72%)", "HSL(209, 20%, 72%)", "HSL(209, 45%, 72%)"];
            this.currentcolor = this.colors[0];
            this.i = 0;
        }
        draw(crcHeart) {
            crcHeart.save();
            crcHeart.beginPath();
            crcHeart.translate(this.position.x, this.position.y);
            crcHeart.moveTo(30, -30);
            crcHeart.lineTo(30, 30);
            crcHeart.lineTo(-30, 30);
            crcHeart.lineTo(-30, -30);
            crcHeart.closePath();
            crcHeart.fillStyle = this.currentcolor;
            crcHeart.fill();
            crcHeart.restore();
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
            //color-code-Prinzip von Jule Heinzmann 
            if (this.i < this.colors.length) {
                this.currentcolor = this.colors[Math.floor(this.i)];
                this.i += 0.1;
            }
            else {
                this.i = 0;
            }
        }
    }
    zauberbild.Heart = Heart;
})(zauberbild || (zauberbild = {}));
//# sourceMappingURL=heart.js.map