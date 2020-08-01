namespace Galaxy {

    export class Move {
        x: number;
        y: number;
        velocity: Vector;
        position: Vector;
        rotation: number;
    
        move(_timeslice: number): void {
            let temporaryVelocity: Vector = this.velocity;
            this.position.add(temporaryVelocity);

            if (this.position.x < 0) {
                this.position.x += crc2.canvas.width;
            }

            if (this.position.y < 0) {
                this.position.y += crc2.canvas.height;
            }

            if (this.position.x > crc2.canvas.width) {
                this.position.x -= crc2.canvas.width;
            }

            if (this.position.y > crc2.canvas.height) {
                this.position.y -= crc2.canvas.height;
            }
        }


        draw(): void {
            console.log("brahhh");
        }
        rotate (): void {
            //hallo

        }
    }}