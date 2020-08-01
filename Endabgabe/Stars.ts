namespace Galaxy {

    export class Stars {
        x: number;
        y: number;
        position: Vector;
        velocity: Vector;
        rotation: number;
        // velocity: Vector;


        constructor(_x: number, _y: number, _rotation: number) {
            this.position = new Vector(_x, _y);
            this.rotation = _rotation;
        }



        draw(): void {
            console.log("draw");
            crc2.save();
            crc2.translate(this.x  , this.y );
            crc2.beginPath();
            crc2.translate(-10 , -20 );
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
        move (): void {
          //hi
        }

        rotate (): void {
//hi
        }
    }
}