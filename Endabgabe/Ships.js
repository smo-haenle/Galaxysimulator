"use strict";
var Galaxy;
(function (Galaxy) {
    class Ships {
        constructor(_x, _y) {
            this.position = new Galaxy.Vector(_x, _y);
            this.velocity = new Galaxy.Vector((Math.random() * -2), (Math.random() * -1)); // -0.5 - 0.5 || 2 - 3
        }
        draw() {
            let radiusShip = 10;
            let ship = new Path2D();
            Galaxy.crc2.save();
            Galaxy.crc2.beginPath();
            Galaxy.crc2.shadowColor = "black";
            Galaxy.crc2.shadowOffsetX = 5;
            Galaxy.crc2.shadowOffsetY = 5;
            Galaxy.crc2.shadowBlur = 5;
            Galaxy.crc2.translate(this.x, this.y);
            Galaxy.crc2.translate(-radiusShip, -radiusShip * 2);
            Galaxy.crc2.fillStyle = "grey";
            ship.arc(this.position.x, this.position.y, radiusShip, 0, 2 * Math.PI);
            Galaxy.crc2.fill(ship);
            Galaxy.crc2.moveTo(this.position.x, this.position.y);
            Galaxy.crc2.lineTo(this.position.x + 20, this.position.y);
            Galaxy.crc2.moveTo(this.position.x + 20, this.position.y + 20);
            Galaxy.crc2.lineTo(this.position.x + 20, this.position.y - 20);
            Galaxy.crc2.moveTo(this.position.x, this.position.y);
            Galaxy.crc2.lineTo(this.position.x - 20, this.position.y);
            Galaxy.crc2.moveTo(this.position.x - 20, this.position.y - 20);
            Galaxy.crc2.lineTo(this.position.x - 20, this.position.y + 20);
            Galaxy.crc2.strokeStyle = "grey";
            Galaxy.crc2.lineWidth = 3;
            Galaxy.crc2.stroke();
            Galaxy.crc2.restore();
            Galaxy.crc2.closePath();
        }
        move() {
            let temporaryVelocity = this.velocity;
            this.position.add(temporaryVelocity);
            if (this.position.x < 0) {
                this.position.x += Galaxy.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += Galaxy.crc2.canvas.height;
            }
            if (this.position.x > Galaxy.crc2.canvas.width) {
                this.position.x -= Galaxy.crc2.canvas.width;
            }
            if (this.position.y > Galaxy.crc2.canvas.height) {
                this.position.y -= Galaxy.crc2.canvas.height;
            }
        }
    }
    Galaxy.Ships = Ships;
})(Galaxy || (Galaxy = {}));
//# sourceMappingURL=Ships.js.map