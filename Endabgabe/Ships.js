"use strict";
var Galaxy;
(function (Galaxy) {
    class Ships {
        // velocity: Vector;
        constructor(_x, _y) {
            this.position = new Galaxy.Vector(_x, _y);
        }
        draw() {
            console.log("Tiefighter");
            Galaxy.crc2.save();
            let radiusShip = 10;
            let ship = new Path2D();
            Galaxy.crc2.moveTo(this.x, this.y);
            Galaxy.crc2.lineTo(this.x + 30, this.y);
            Galaxy.crc2.moveTo(this.x + 30, this.y + 20);
            Galaxy.crc2.lineTo(this.x + 30, this.y - 20);
            Galaxy.crc2.moveTo(this.x, this.y);
            Galaxy.crc2.lineTo(this.x - 30, this.y);
            Galaxy.crc2.moveTo(this.x - 30, this.y - 20);
            Galaxy.crc2.lineTo(this.x - 30, this.y + 20);
            Galaxy.crc2.strokeStyle = "grey";
            Galaxy.crc2.lineWidth = 5;
            Galaxy.crc2.stroke();
            Galaxy.crc2.shadowColor = "black";
            Galaxy.crc2.shadowOffsetX = 5;
            Galaxy.crc2.shadowOffsetY = 5;
            Galaxy.crc2.shadowBlur = 5;
            Galaxy.crc2.save();
            Galaxy.crc2.translate(this.x, this.y);
            Galaxy.crc2.translate(-radiusShip, -radiusShip * 2);
            Galaxy.crc2.fillStyle = "grey";
            ship.arc(this.position.x, this.position.y, radiusShip, 0, 2 * Math.PI);
            Galaxy.crc2.fill(ship);
            Galaxy.crc2.restore();
            Galaxy.crc2.closePath();
        }
    }
    Galaxy.Ships = Ships;
})(Galaxy || (Galaxy = {}));
//# sourceMappingURL=Ships.js.map