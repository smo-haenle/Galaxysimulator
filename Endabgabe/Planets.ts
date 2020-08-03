namespace Galaxy {

    export class Planets {
        x: number;
        y: number;
        position: Vector;
        color: CanvasGradient;
        radiusplanet: number;



        constructor(_x: number, _y: number) {
            this.position = new Vector(_x, _y);
            this.radiusplanet = ((Math.random() + 1) * 20);
           

        }


        setColour(): void {
            let gradient: CanvasGradient = crc2.createRadialGradient(this.position.x, this.position.y, 0, this.position.x, this.position.y, this.radiusplanet);
            this.color = gradient;
            for (var i: number = 1; i < 10; i++) {
                let randomColor: string = "#" + (Math.random().toString(16) + "000000").substring(2, 8);
                gradient.addColorStop(i / 10, randomColor);
            }
        }

        draw(): void {
            console.log("planet");
            let planet: Path2D = new Path2D();
            crc2.save();
            crc2.shadowColor = "black";
            crc2.shadowOffsetX = 5;
            crc2.shadowOffsetY = 2;
            crc2.shadowBlur = 5;
            crc2.translate(this.x, this.y);
            crc2.translate(-this.radiusplanet / 2, -this.radiusplanet / 2 - 10);
            crc2.fillStyle = this.color;
            planet.arc(this.position.x, this.position.y, this.radiusplanet, 0, 2 * Math.PI);
            crc2.fill(planet);
            crc2.restore();
        }


    }
}

