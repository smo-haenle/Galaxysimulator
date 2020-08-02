"use strict";
var Galaxy;
(function (Galaxy) {
    class Stars {
        // velocity: Vector;
        constructor(_x, _y, _rotation) {
            this.position = new Galaxy.Vector(_x, _y);
            this.radius = 10;
        }
        draw() {
            console.log("draw");
            let radiusStar = 10;
            this.radius = radiusStar;
            this.radius += 4;
            let star = new Path2D();
            console.log(this.radius, radiusStar);
            Galaxy.crc2.save();
            Galaxy.crc2.beginPath();
            Galaxy.crc2.translate(this.x, this.y);
            Galaxy.crc2.translate(-radiusStar, -radiusStar * 2);
            Galaxy.crc2.fillStyle = "HSL(60, 80% , 10%)";
            star.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
            Galaxy.crc2.fill(star);
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
        pulse() {
            let temporaryRadius = this.radius;
            this.position.scale(temporaryRadius);
            this.radius += 4;
            Galaxy.crc2.restore();
        }
    }
    Galaxy.Stars = Stars;
})(Galaxy || (Galaxy = {}));
//# sourceMappingURL=Stars.js.map