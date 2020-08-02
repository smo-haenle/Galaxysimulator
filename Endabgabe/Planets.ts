namespace Galaxy {

    export class Planets {
        x: number;
        y: number;
        position: Vector;
        velocity: Vector;
        rotation: number;
        color: CanvasGradient;
        radiusplanet: number;
        // velocity: Vector;


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
            crc2.beginPath();
            crc2.fillStyle = this.color;
            planet.arc(this.position.x, this.position.y, this.radiusplanet, 0, 2 * Math.PI);
            crc2.fill(planet);
            crc2.closePath();

            // crc2.restore();
        }

        rotate(): void {

            crc2.clearRect(0, 0, canvas.width, canvas.height);
            crc2.beginPath();
            // crc2.save();
            crc2.translate(-canvas.width / 2, -canvas.height / 2);
            crc2.rotate(10 * Math.PI / 60);
            crc2.translate(-canvas.width / 2, -canvas.height / 2);
            crc2.closePath();
            crc2.restore();

        }
    }
}






/*/console.log("planet");
            crc2.save();
            let radiusPlanet: number = ((Math.random() + 1) * 20);
            let planet: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(12, 5, 0, 0, 0, radiusPlanet);

            for (var i: number = 1; i < 10; i++) {
                let randomColor: string = Math.floor(Math.random() * 16777215).toString(16);
                console.log(randomColor);
                gradient.addColorStop(i / 10, "#" + randomColor);
            }

            crc2.shadowColor = "black";
            crc2.shadowOffsetX = 5;
            crc2.shadowOffsetY = 5;
            crc2.shadowBlur = 5;
            crc2.save();
            crc2.translate(this.x, this.y );
            crc2.fillStyle = gradient;
            planet.arc(this.position.x, this.position.y , radiusPlanet, 0, 2 * Math.PI);
            crc2.fill(planet);
            crc2.restore();
            /*/