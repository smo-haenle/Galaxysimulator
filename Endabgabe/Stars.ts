namespace Galaxy {

    export class Stars {
        x: number;
        y: number;
        position: Vector;
        velocity: Vector;
        rotation: number;
        radius: number;
        // velocity: Vector;


        constructor(_x: number, _y: number, _rotation: number) {
            this.position = new Vector(_x, _y);
            this.radius = 10;
        }



        draw(): void {
            console.log("draw");
            let radiusStar: number = 10;
            this.radius = radiusStar;
            this.radius  += 4;
            let star: Path2D = new Path2D();
            console.log(this.radius, radiusStar);
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.x  , this.y );
            crc2.translate(-radiusStar , -radiusStar * 2);
            crc2.fillStyle = "HSL(60, 80% , 10%)";
            star.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
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
            crc2.shadowOffsetX = 3;
            crc2.shadowOffsetY = 3;
            crc2.shadowBlur = 3;
            crc2.lineWidth = 1;
            crc2.strokeStyle = "yellow";
            crc2.shadowColor = "yellow";
            crc2.stroke();
            crc2.closePath();
            crc2.restore();
        }

        pulse (): void {
            let temporaryRadius: number = this.radius;
            this.position.scale(temporaryRadius);
            this.radius += 4;
            crc2.restore();
        }
    }
}