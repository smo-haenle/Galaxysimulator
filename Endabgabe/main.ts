namespace Galaxy {


    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let url: string = "https://galaxysimulator.herokuapp.com/";

    export let arrayShips: Ships[] = [];
    export let arrayPlanets: Planets[] = [];
    export let arrayAsteroids: Asteroids[] = [];
    export let arrayStars: Stars[] = [];

    let updateIntervalId: number;
    let galaxySize: HTMLDivElement;
    let galaxyType: HTMLSelectElement;
    let objectStyle: HTMLSelectElement;
    let dragDrop: boolean = false;


    let shipDragDrop: Ships;
    let planetDragDrop: Planets;
    let starDragDrop: Stars;
    let asteroidDragDrop: Asteroids;

    function handleLoad(_event: Event): void {
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

        let submit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("saveButton");
        submit.addEventListener("click", sendPicture);

        let load: HTMLButtonElement = <HTMLButtonElement>document.getElementById("loadButton");
        load.addEventListener("click", loadPicture);

        canvas.addEventListener("mousedown", pickSymbol);


    }

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
        planet.setColour();
        planet.draw();
        arrayPlanets.push(planet);
        console.log(arrayPlanets);

    }

    function drawTiefighter(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        console.log(x, y);
        let ship: Ships = new Ships(x, y);
        ship.draw();
        arrayShips.push(ship);
        console.log(arrayShips);

    }
    function drawStar(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        console.log(x, y);
        let star: Stars = new Stars(x, y);
        star.draw();
        arrayStars.push(star);
        console.log(arrayStars);

    }

    function drawAsteroid(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        console.log(x, y);
        let asteroid: Asteroids = new Asteroids(x, y);
        asteroid.draw();
        arrayAsteroids.push(asteroid);
        console.log(arrayAsteroids);

    }

    function update(_background: ImageData): void {
        crc2.putImageData(_background, 0, 0);


        for (let planet of arrayPlanets) {
            planet.draw();
        }
        for (let ship of arrayShips) {
            ship.draw();
            ship.move();
        }
        for (let star of arrayStars) {
            star.draw();
        }
        for (let asteroid of arrayAsteroids) {
            asteroid.draw();
            asteroid.move();
        }
    }


    function selfDestroy(): void {
        arrayAsteroids = [];
        arrayPlanets = [];
        arrayShips = [];
        arrayStars = [];
    }

    function pickSymbol(_event: MouseEvent): void {

        dragDrop = true;
        console.log("pick");

        let offsetX: number = _event.clientX;
        let offsetY: number = _event.clientY;
        console.log(offsetX, offsetY);
        for (let ship of arrayShips) {

            if (ship.position.x - 25 < offsetX &&
                ship.position.x + 25 > offsetX &&
                ship.position.y - 10 < offsetY &&
                ship.position.y + 10 > offsetY) {
                let index: number = arrayShips.indexOf(ship);
                arrayShips.splice(index, 1);
                shipDragDrop = ship;

                console.log(shipDragDrop);
            }
        }
        for (let planet of arrayPlanets) {

            if (planet.position.x - 25 < offsetX &&
                planet.position.x + 25 > offsetX &&
                planet.position.y - 25 < offsetY &&
                planet.position.y + 25 > offsetY) {
                let index: number = arrayPlanets.indexOf(planet);
                arrayPlanets.splice(index, 1);
                planetDragDrop = planet;

                console.log(planetDragDrop);
            }
        }
        for (let star of arrayStars) {

            if (star.position.x - 10 < offsetX &&
                star.position.x + 10 > offsetX &&
                star.position.y - 10 < offsetY &&
                star.position.y + 10 > offsetY) {
                let index: number = arrayStars.indexOf(star);
                arrayStars.splice(index, 1);
                starDragDrop = star;

                console.log(starDragDrop);
            }
        }
        for (let asteroids of arrayAsteroids) {

            if (asteroids.position.x - 25 < offsetX &&
                asteroids.position.x + 25 > offsetX &&
                asteroids.position.y - 25 < offsetY &&
                asteroids.position.y + 25 > offsetY) {
                let index: number = arrayAsteroids.indexOf(asteroids);
                arrayAsteroids.splice(index, 1);
                asteroidDragDrop = asteroids;

                console.log(asteroidDragDrop);
            }
        }

    }


    async function sendPicture(): Promise<void> {
        let name: string | null = prompt("Canvas Name");
        // console.log(name);

        if (name == "") {
            alert("please enter valid name");
            return;
        }
   

        let picture: any = {
            name: name,
            // URLSearchParams erwartet eine key value pair mit jeweils strings
            //--> arrays in strings umwandeln
            ship: JSON.stringify(arrayShips),
            star: JSON.stringify(arrayStars),
            asteroid: JSON.stringify(arrayAsteroids),
            planet: JSON.stringify(arrayPlanets)
        };

        let query: URLSearchParams = new URLSearchParams(<any>picture);
        await fetch(url + "/save?" + query.toString());
        //json string wird zu einem query string umgewandelt
        alert("Saved");
    }

    async function loadPicture(): Promise<void> {
       
        let name: string | null = prompt("Canvas Name");

        if (name == "") {
            alert("please enter valid name");
            return;
        }

        let searchParams: any = {
            name: name
        };

   

        let query: URLSearchParams = new URLSearchParams(<any>searchParams);
        let response: Response = await fetch(url + "/load?" + query.toString());

        // das Response objekt gibt mit der json funktion den inhalt der antwort als json zurück
        let responseJson: any = await response.json();

        // let name = responseJson.name;
        if (responseJson == null) {
            alert("Name is not in Databank");
            return;
        }

        // rohe objekte in array form
        let shipsRaw: any = JSON.parse(responseJson.ship);
        let starsRaw: any = JSON.parse(responseJson.star);
        let asteroidsRaw: any = JSON.parse(responseJson.asteroid);
        let planetsRaw: any = JSON.parse(responseJson.planet);
        selfDestroy();

        for (let ship of shipsRaw) {
            // von den rohen partikel daten werden die Particle objekte erzeugt und dem canvas hinzugefügt
            let newShip: Ships = new Ships(ship.position.x, ship.position.y);
            arrayShips.push(newShip);
        }
        for (let star of starsRaw) {
            // von den rohen partikel daten werden die Particle objekte erzeugt und dem canvas hinzugefügt
            let newStar: Stars = new Ships(star.position.x, star.position.y);
            arrayStars.push(newStar);
        }
        for (let asteroid of asteroidsRaw) {
            // von den rohen partikel daten werden die Particle objekte erzeugt und dem canvas hinzugefügt
            let newAsteroid: Asteroids = new Asteroids(asteroid.position.x, asteroid.position.y);
            arrayAsteroids.push(newAsteroid);
        }
        for (let planet of planetsRaw) {
            // von den rohen partikel daten werden die Particle objekte erzeugt und dem canvas hinzugefügt
            let newPlanet: Planets = new Planets(planet.position.x, planet.position.y);
            arrayPlanets.push(newPlanet);
        }
    }

}
