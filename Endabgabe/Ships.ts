namespace Galaxy {

    export class Ships {
        x: number;
        y: number;
        position: Vector;
        // velocity: Vector;


        constructor(_x: number, _y: number) {
            this.position = new Vector(_x, _y);
        }

        draw(): void {
            console.log("Tiefighter");
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
            crc2.lineTo(this.position.x + 30, this.position.y);
            crc2.moveTo(this.position.x + 30, this.position.y + 20);
            crc2.lineTo(this.position.x + 30, this.position.y - 20);
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x - 30, this.position.y);
            crc2.moveTo(this.position.x - 30, this.position.y - 20);
            crc2.lineTo(this.position.x - 30, this.position.y + 20);
            crc2.strokeStyle = "grey";
            crc2.lineWidth = 5;
            crc2.stroke();
            crc2.restore();
            crc2.closePath();
        }






    }
}