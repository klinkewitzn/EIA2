"use strict";
class Vector {
    constructor(_x, _y) {
        this.x = 0;
        this.y = 0;
        this.set(_x, _y);
    }
    scale(_factor) {
        this.x *= _factor;
        this.y *= _factor;
    }
    add(_addend) {
        this.x += _addend.x;
        this.y += _addend.y;
    }
    set(_x, _y) {
        this.x = _x;
        this.y = _y;
    }
}
let v1 = new Vector(5, 25);
v1.set(5, 7);
v1.scale(2);
console.log(v1);
//# sourceMappingURL=test.js.map