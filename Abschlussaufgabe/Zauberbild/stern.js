"use strict";
var zauberbild;
(function (zauberbild) {
    class Star extends zauberbild.Symbol {
        constructor(_position) {
            super(_position);
            this.size = 40;
            this.rotation = 0;
            this.color = "HSL(0,53%,58%)";
        }
        draw(crcStar) {
            crcStar.save();
            crcStar.beginPath();
            crcStar.translate(this.position.x, this.position.y);
            crcStar.rotate(this.rotation * Math.PI / 150);
            crcStar.scale(0.4, 0.6);
            crcStar.beginPath();
            crcStar.moveTo(0, -50);
            crcStar.lineTo(100, 50);
            crcStar.lineTo(-100, 50);
            crcStar.closePath();
            crcStar.fillStyle = this.color; //"HSL(0,53%,58%)"
            crcStar.fill();
            crcStar.restore();
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
            this.rotation += 1;
            //if (this.isHit = true) this.size +=30;
        }
    }
    zauberbild.Star = Star;
})(zauberbild || (zauberbild = {}));
//# sourceMappingURL=stern.js.map