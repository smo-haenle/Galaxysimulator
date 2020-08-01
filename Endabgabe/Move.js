"use strict";
var Galaxy;
(function (Galaxy) {
    class Move {
        move(_timeslice) {
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
        draw() {
            console.log("brahhh");
        }
        rotate() {
            //hallo
        }
    }
    Galaxy.Move = Move;
})(Galaxy || (Galaxy = {}));
//# sourceMappingURL=Move.js.map