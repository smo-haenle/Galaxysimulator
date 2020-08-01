"use strict";
var Galaxy;
(function (Galaxy) {
    class Stars {
        // velocity: Vector;
        constructor(_x, _y, _rotation) {
            this.position = new Galaxy.Vector(_x, _y);
            this.rotation = _rotation;
        }
        draw() {
            console.log("draw");
            Galaxy.crc2.save();
            Galaxy.crc2.translate(this.x, this.y);
            Galaxy.crc2.beginPath();
            Galaxy.crc2.translate(-10, -20);
            Galaxy.crc2.lineTo(this.position.x, this.position.y + 10);
            Galaxy.crc2.moveTo(this.position.x, this.position.y);
            Galaxy.crc2.lineTo(this.position.x, this.position.y - 10);
            Galaxy.crc2.moveTo(this.position.x, this.position.y);
            Galaxy.crc2.lineTo(this.position.x + 10, this.position.y);
            Galaxy.crc2.moveTo(this.position.x, this.position.y);
            Galaxy.crc2.lineTo(this.position.x, this.position.y + 10);
            Galaxy.crc2.moveTo(this.position.x, this.position.y);
            Galaxy.crc2.lineTo(this.position.x - 10, this.position.y);
            Galaxy.crc2.moveTo(this.position.x, this.position.y);
            Galaxy.crc2.lineTo(this.position.x - 7, this.position.y + 7);
            Galaxy.crc2.moveTo(this.position.x, this.position.y);
            Galaxy.crc2.lineTo(this.position.x + 7, this.position.y + 7);
            Galaxy.crc2.moveTo(this.position.x, this.position.y);
            Galaxy.crc2.lineTo(this.position.x - 7, this.position.y - 7);
            Galaxy.crc2.moveTo(this.position.x, this.position.y);
            Galaxy.crc2.lineTo(this.position.x + 7, this.position.y - 7);
            Galaxy.crc2.moveTo(this.position.x, this.position.y);
            Galaxy.crc2.shadowOffsetX = 3;
            Galaxy.crc2.shadowOffsetY = 3;
            Galaxy.crc2.shadowBlur = 3;
            Galaxy.crc2.lineWidth = 1;
            Galaxy.crc2.strokeStyle = "yellow";
            Galaxy.crc2.shadowColor = "yellow";
            Galaxy.crc2.stroke();
            Galaxy.crc2.closePath();
            Galaxy.crc2.restore();
        }
        move() {
            //hi
        }
        rotate() {
            //hi
        }
    }
    Galaxy.Stars = Stars;
})(Galaxy || (Galaxy = {}));
//# sourceMappingURL=Stars.js.map