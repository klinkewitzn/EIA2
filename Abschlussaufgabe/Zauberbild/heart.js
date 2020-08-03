"use strict";
var zauberbild;
(function (zauberbild) {
    class Heart extends zauberbild.Symbol {
        constructor(_position, _color) {
            super(_position);
            this.colors = ["HSL(0,53%,58%)", "HSL(209, 100%, 72%)", "HSL(209, 70%, 72%)", "HSL(209, 80%, 72%)", "HSL(209, 60%, 72%)", "HSL(0,23%,58%)" /*,  "#FFDF00", "#DFFF00", "#BFFF00" */,
                "HSL(209, 650%, 72%)", "HSL(209, 30%, 72%)", "HSL(209, 20%, 72%)", "HSL(209, 45%, 72%)"];
            //this.size = 40;
            this.currentcolor = this.colors[0];
            this.i = 0;
            //this.rotation += 0;
            //this.radius = 25;
            /* if (_position)
            this.position = _position.copy();
            else
            this.velocity = new Vector(0, 0); */
            //this.size = 25;
        }
        draw(crcHeart) {
            crcHeart.save();
            //crcHeart.scale(0.4, 0.2);
            crcHeart.translate(this.position.x, this.position.y);
            //zum Drehen bei Klick
            //crc2.rotate(this.rotation * Math.PI / 180); 
            crcHeart.beginPath();
            crcHeart.moveTo(30, -30);
            crcHeart.lineTo(30, 30);
            crcHeart.lineTo(-30, 30);
            crcHeart.lineTo(-30, -30);
            crcHeart.fillStyle = this.currentcolor;
            crcHeart.fill();
            //crc2.rotate(3);
            crcHeart.restore();
        }
        move(_timeslice) {
            //crcHeart.rotate(this.rotation * Math.PI / 150);
            let offset = new zauberbild.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            // crcHeart.rotate(this.rotation);
            if (this.position.x < 0)
                this.position.x += zauberbild.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += zauberbild.crc2.canvas.height;
            if (this.position.x > zauberbild.crc2.canvas.width)
                this.position.x -= zauberbild.crc2.canvas.width;
            if (this.position.y > zauberbild.crc2.canvas.height)
                this.position.y -= zauberbild.crc2.canvas.height;
            //color-code von Jule Heinzmann 
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
})(zauberbild || (zauberbild = {})); /*  crcHeart.arc(0, 0, 5, 0, Math.PI * 2, true);
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
//crcHeart.fillStyle = "HSL(0,53%,58%)";
//# sourceMappingURL=heart.js.map