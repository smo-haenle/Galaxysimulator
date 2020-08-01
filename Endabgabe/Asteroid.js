"use strict";
var Galaxy;
(function (Galaxy) {
    class Asteroid {
        // velocity: Vector;
        constructor(_x, _y) {
            this.position = new Galaxy.Vector(_x, _y);
            this.velocity = new Galaxy.Vector((Math.random() * +2), (Math.random() * +1)); // -0.5 - 0.5 || 2 - 3
        }
        draw() {
            Galaxy.crc2.beginPath();
            Galaxy.crc2.save();
            Galaxy.crc2.translate(this.x, this.y);
            Galaxy.crc2.translate(-10, -50);
            Galaxy.crc2.moveTo(this.position.x, this.position.y);
            Galaxy.crc2.lineTo(this.position.x + 15, this.position.y + 20);
            Galaxy.crc2.lineTo(this.position.x + 5, this.position.y + 30);
            Galaxy.crc2.lineTo(this.position.x + 10, this.position.y + 40);
            Galaxy.crc2.lineTo(this.position.x - 5, this.position.y + 50);
            Galaxy.crc2.lineTo(this.position.x - 20, this.position.y + 50);
            Galaxy.crc2.lineTo(this.position.x - 30, this.position.y + 30);
            Galaxy.crc2.lineTo(this.position.x - 25, this.position.y + 10);
            Galaxy.crc2.closePath();
            Galaxy.crc2.shadowColor = "#383838";
            Galaxy.crc2.shadowOffsetX = 3;
            Galaxy.crc2.shadowOffsetY = 3;
            Galaxy.crc2.shadowBlur = 3;
            Galaxy.crc2.strokeStyle = "#383838";
            Galaxy.crc2.fillStyle = "#383838";
            Galaxy.crc2.fill();
            Galaxy.crc2.stroke();
            Galaxy.crc2.closePath();
            Galaxy.crc2.restore();
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
        rotate() {
            //hi
        }
    }
    Galaxy.Asteroid = Asteroid;
})(Galaxy || (Galaxy = {}));
//# sourceMappingURL=Asteroid.js.map