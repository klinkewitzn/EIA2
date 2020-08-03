"use strict";
var zauberbild;
(function (zauberbild) {
    class Vector {
        //public draggable: true; 
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
        get length() {
            return Math.hypot(this.x, this.y);
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    zauberbild.Vector = Vector;
})(zauberbild || (zauberbild = {}));
//# sourceMappingURL=vector.js.map