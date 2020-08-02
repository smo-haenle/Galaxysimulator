namespace Galaxy {

    export class Ships {
        x: number;
        y: number;
        velocity: Vector;
        position: Vector;
        rotation: number;
        // velocity: Vector;


        constructor(_x: number, _y: number) {
            this.position = new Vector(_x, _y);

            this.velocity = new Vector((Math.random() * -2), (Math.random() * -1)); // -0.5 - 0.5 || 2 - 3
        }

        
        
        draw(): void {
            crc2.save();
            let radiusShip: number = 10;
            let ship: Path2D = new Path2D();
            crc2.beginPath();
            crc2.restore();
            crc2.shadowColor = "black";
            crc2.shadowOffsetX = 5;
            crc2.shadowOffsetY = 5;
            crc2.shadowBlur = 5;
            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.translate(-radiusShip , -radiusShip * 2);
            crc2.fillStyle = "grey";
            ship.arc(this.position.x, this.position.y, radiusShip, 0, 2 * Math.PI);
            crc2.fill(ship);
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x + 20, this.position.y);
            crc2.moveTo(this.position.x + 20, this.position.y + 20);
            crc2.lineTo(this.position.x + 20, this.position.y - 20);
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x - 20, this.position.y);
            crc2.moveTo(this.position.x - 20, this.position.y - 20);
            crc2.lineTo(this.position.x - 20, this.position.y + 20);
            crc2.strokeStyle = "grey";
            crc2.lineWidth = 3;
            crc2.stroke();
            crc2.restore();
            crc2.closePath();
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
