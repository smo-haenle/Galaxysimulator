"use strict";
var Galaxy;
(function (Galaxy) {
    class Planets {
        constructor(_x, _y) {
            this.position = new Galaxy.Vector(_x, _y);
            this.radiusplanet = ((Math.random() + 1) * 20);
        }
        setColour() {
            let gradient = Galaxy.crc2.createRadialGradient(this.position.x, this.position.y, 0, this.position.x, this.position.y, this.radiusplanet);
            this.color = gradient;
            for (var i = 1; i < 10; i++) {
                let randomColor = "#" + (Math.random().toString(16) + "000000").substring(2, 8);
                gradient.addColorStop(i / 10, randomColor);
            }
        }
        draw() {
            console.log("planet");
            let planet = new Path2D();
            Galaxy.crc2.save();
            Galaxy.crc2.shadowColor = "black";
            Galaxy.crc2.shadowOffsetX = 5;
            Galaxy.crc2.shadowOffsetY = 2;
            Galaxy.crc2.shadowBlur = 5;
            Galaxy.crc2.translate(this.x, this.y);
            Galaxy.crc2.translate(-this.radiusplanet / 2, -this.radiusplanet / 2 - 10);
            Galaxy.crc2.fillStyle = this.color;
            planet.arc(this.position.x, this.position.y, this.radiusplanet, 0, 2 * Math.PI);
            Galaxy.crc2.fill(planet);
            Galaxy.crc2.restore();
        }
    }
    Galaxy.Planets = Planets;
})(Galaxy || (Galaxy = {}));
//# sourceMappingURL=Planets.js.map