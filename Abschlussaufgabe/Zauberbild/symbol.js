"use strict";
var zauberbild;
(function (zauberbild) {
    class Symbol {
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            this.active = false;
            // this.color = "green";
            this.velocity = new zauberbild.Vector(0, 0);
            this.velocity.random(50, 100);
            this.rotation = 1;
        }
        changeColor(_color) {
            this.color = _color;
        }
        rotate(_factor) {
            this.rotation += _factor;
            zauberbild.crc2.rotate(0);
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
        isHit(_hotspot) {
            let hitsize = 50 * this.size;
            let difference = new zauberbild.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
    zauberbild.Symbol = Symbol;
})(zauberbild || (zauberbild = {}));
//# sourceMappingURL=symbol.js.map