namespace Galaxy {

    export class Asteroids {
        x: number;
        y: number;
        position: Vector;
        velocity: Vector;
        rotation: number;


        constructor(_x: number, _y: number) {
            this.position = new Vector(_x, _y);
            this.velocity = new Vector((Math.random() * +2), (Math.random() * +1)); // -0.5 - 0.5 || 2 - 3
        }
        draw(): void {
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.translate(-10 , -50);
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x + 15, this.position.y + 20);
            crc2.lineTo(this.position.x + 5, this.position.y + 30);
            crc2.lineTo(this.position.x + 10, this.position.y + 40);
            crc2.lineTo(this.position.x - 5, this.position.y + 50);
            crc2.lineTo(this.position.x - 20, this.position.y + 50);
            crc2.lineTo(this.position.x - 30, this.position.y + 30);
            crc2.lineTo(this.position.x - 25, this.position.y + 10);
            crc2.closePath();
            crc2.shadowColor = "#383838";
            crc2.shadowOffsetX = 3;
            crc2.shadowOffsetY = 3;
            crc2.shadowBlur = 3;
            crc2.strokeStyle = "#383838";
            crc2.fillStyle = "#383838";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.restore();



        }

        move(): void {
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
        }
    }