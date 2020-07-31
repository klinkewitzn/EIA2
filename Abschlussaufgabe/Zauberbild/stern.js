"use strict";
var zauberbild;
(function (zauberbild) {
    class Star extends zauberbild.Symbol {
        constructor(_position) {
            super(_position);
        }
        draw(crcStar) {
            crcStar.save();
            crcStar.beginPath();
            crcStar.translate(this.position.x, this.position.y);
            crcStar.scale(0.4, 0.6);
            crcStar.beginPath();
            crcStar.moveTo(0, -50);
            crcStar.lineTo(100, 50);
            crcStar.lineTo(-100, 50);
            crcStar.closePath();
            crcStar.fillStyle = "HSL(0,53%,58%)";
            crcStar.fill();
            crcStar.restore();
            /*   crcStar.beginPath();
              crcStar.save();
              crcStar.translate(this.position.y, this.position.y);
             
              crcStar.scale(1.2, 0.6);
              //cxt.scale(0.4, 0.4);
              crcStar.moveTo(108, 0.0);
              crcStar.lineTo(141, 70);
              crcStar.lineTo(218, 78.3);
              crcStar.lineTo(162, 131);
              crcStar.lineTo(175, 205);
              crcStar.lineTo(108, 170);
              crcStar.lineTo(41.2, 205);
              crcStar.lineTo(55, 131);
              crcStar.lineTo(1, 78);
              crcStar.lineTo(75, 68);
              crcStar.lineTo(108, 0);
              crcStar.closePath();
              crcStar.fillStyle = "HSL(0,53%,58%)";
              crcStar.fill();
              crcStar.restore(); */
        }
    }
    zauberbild.Star = Star;
})(zauberbild || (zauberbild = {}));
//# sourceMappingURL=stern.js.map