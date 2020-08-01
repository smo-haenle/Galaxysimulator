namespace Galaxy {


    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let arrayObjects: Move[] = [];
    export let arrayShips: Ships[] = [];

    let updateIntervalId: number;
    let galaxySize: HTMLDivElement;
    let galaxyType: HTMLSelectElement;
    let objectStyle: HTMLSelectElement;

    async function handleLoad(_event: Event): Promise<void> {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");

        if (!canvas)
            return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");


        let background: ImageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        updateIntervalId = window.setInterval(update, 50, background);
        

        let deleteAll: HTMLElement = <HTMLElement>document.querySelector("#selfDestroy");
        deleteAll.addEventListener("click", selfDestroy);

        galaxySize = <HTMLDivElement>document.querySelector("div#chooseSize");
        galaxySize.addEventListener("change", chooseGalaxySize);

        galaxyType = <HTMLSelectElement>document.querySelector("#chooseGalaxy");
        galaxyType.addEventListener("change", chooseGalaxy);

        objectStyle = <HTMLSelectElement>document.querySelector("#chooseObject");
        objectStyle.addEventListener("change", chooseObjects);





        function chooseGalaxySize(_event: Event): void {

            let target: HTMLElement = <HTMLElement>_event.target;
            let id: string = target.id;
            switch (id) {

                case "galaxy3":
                    console.log("galaxy 3");
                    crc2.canvas.width = 900;
                    crc2.canvas.height = 450;
                    break;

                case "galaxy2":
                    console.log("galaxy 2");
                    crc2.canvas.width = 700;
                    crc2.canvas.height = 400;
                    break;

                case "galaxy1":
                    console.log("galaxy 1");
                    crc2.canvas.width = 500;
                    crc2.canvas.height = 300;
                    break;

            }
        }


        function chooseGalaxy(_event: Event): void {

            console.log("choose background");
            let target: HTMLSelectElement = <HTMLSelectElement>_event.target;
            let value: string = target.value;

            switch (value) {

                case "stars":
                    console.log("stars");
                    document.getElementsByTagName("canvas")[0].style.backgroundImage = "url(stars.jpg)";

                    break;
                case "sun":
                    console.log("sun");
                    document.getElementsByTagName("canvas")[0].style.backgroundImage = "url(sun.png)";

                    break;
                case "black":
                    console.log("black");
                    document.getElementsByTagName("canvas")[0].style.backgroundImage = "url(black.jpg)";

                    break;
                case "blue":
                    console.log("blue");
                    document.getElementsByTagName("canvas")[0].style.backgroundImage = "url(blue.jpeg)";

                    break;


            }

        }


        function chooseObjects(_event: Event): void {

            let target: HTMLSelectElement = <HTMLSelectElement>_event.target;
            var value: string = target.value;

            switch (value) {

                case "ship":
                    console.log("ship");
                    canvas.addEventListener("click", drawTiefighter);
                    canvas.removeEventListener("click", drawStar);
                    canvas.removeEventListener("click", drawPlanet);
                    canvas.removeEventListener("click", drawAsteroid);

                    break;


                case "planet":
                    console.log("planet");
                    canvas.addEventListener("click", drawPlanet);
                    canvas.removeEventListener("click", drawStar);
                    canvas.removeEventListener("click", drawTiefighter);
                    canvas.removeEventListener("click", drawAsteroid);

                    break;

                case "asteroid":
                    console.log("asteroid");
                    canvas.addEventListener("click", drawAsteroid);
                    canvas.removeEventListener("click", drawStar);
                    canvas.removeEventListener("click", drawPlanet);
                    canvas.removeEventListener("click", drawTiefighter);
                    break;

                case "star":
                    console.log("star");
                    canvas.addEventListener("click", drawStar);
                    canvas.removeEventListener("click", drawTiefighter);
                    canvas.removeEventListener("click", drawPlanet);
                    canvas.removeEventListener("click", drawAsteroid);

                    break;

            }



        }


        function drawPlanet(_event: MouseEvent): void {
            console.log("drawplanet");
            let x: number = _event.clientX;
            let y: number = _event.clientY;
            console.log(x, y);
            let planet: Planets = new Planets(x, y);
            planet.draw();
            arrayObjects.push(planet);
            console.log(arrayObjects);

        }

        function drawTiefighter(_event: MouseEvent): void {
            let x: number = _event.clientX;
            let y: number = _event.clientY;
            console.log(x, y);
            let ship: Ships = new Ships(x, y);
            ship.draw();
            arrayObjects.push(ship);
            console.log(arrayObjects);

        }
        function drawStar(_event: MouseEvent): void {
            let x: number = _event.clientX;
            let y: number = _event.clientY;
            console.log(x, y);
            let star: Stars = new Stars(x, y, 4);
            star.draw();
            arrayObjects.push(star);
            console.log(arrayObjects);

        }

        function drawAsteroid(_event: MouseEvent): void {
            let x: number = _event.clientX;
            let y: number = _event.clientY;
            console.log(x, y);
            let asteroid: Asteroid = new Asteroid(x, y);
            asteroid.draw();
            arrayObjects.push(asteroid);
            console.log(arrayObjects);

        }

        function update(_background: ImageData): void {
            crc2.putImageData(_background, 0, 0);

            for (let object of arrayObjects) {
                object.draw();
                object.move(1 / 50);
                object.rotate();
            }



        }


        function selfDestroy(): void {
            arrayObjects = [];

        }
    }

}