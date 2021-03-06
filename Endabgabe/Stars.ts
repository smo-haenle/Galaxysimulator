namespace Galaxy {

    export class Stars {
        x: number;
        y: number;
        position: Vector;

        constructor(_x: number, _y: number) {
            this.position = new Vector(_x, _y);
            
        }



        draw(): void {
            let radiusStar: number = 10;
            let star: Path2D = new Path2D();
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.x  , this.y );
            crc2.translate(-radiusStar , -radiusStar * 2);
            crc2.fillStyle = "HSL(60, 80% , 10%)";
            star.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            crc2.fill(star);
            crc2.lineTo(this.position.x, this.position.y + 10);
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x, this.position.y - 10);
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x + 10, this.position.y);
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x, this.position.y + 10);
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x - 10, this.position.y);
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x - 7, this.position.y + 7);
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x + 7, this.position.y + 7);
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x - 7, this.position.y - 7);
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x + 7, this.position.y - 7);
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineWidth = 1;
            crc2.strokeStyle = "yellow";
            crc2.stroke();
            crc2.closePath();
            crc2.restore();

            
        }

    }
}