"use strict";
var zauberbild;
(function (zauberbild) {
    class Symbol {
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            this.velocity = new zauberbild.Vector(0, 0);
            this.velocity.random(50, 100);
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
        }
    }
    zauberbild.Symbol = Symbol;
})(zauberbild || (zauberbild = {}));
//# sourceMappingURL=symbol.js.map