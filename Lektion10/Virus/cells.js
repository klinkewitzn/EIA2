"use strict";
var L10_Virus;
(function (L10_Virus) {
    class Cell {
        constructor(_position) {
            // console.log("Moveable constructor");
            if (_position)
                this.position = _position;
            else
                this.position = new L10_Virus.Vector(0, 0);
            this.velocity = new L10_Virus.Vector(0, 0);
        }
        draw() {
            // console.log("Cell draw");
        }
        move(_timeslice) {
            // console.log("Moveable move");
            let offset = new L10_Virus.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L10_Virus.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_Virus.crc2.canvas.height;
            if (this.position.x > L10_Virus.crc2.canvas.width)
                this.position.x -= L10_Virus.crc2.canvas.width;
            if (this.position.y > L10_Virus.crc2.canvas.height)
                this.position.y -= L10_Virus.crc2.canvas.height;
        }
    }
    L10_Virus.Cell = Cell;
})(L10_Virus || (L10_Virus = {}));
//# sourceMappingURL=cells.js.map