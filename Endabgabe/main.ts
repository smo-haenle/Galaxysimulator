namespace Galaxy {


    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let arrayObjects: Planets[] = [];

    let galaxySize: HTMLDivElement;
    let galaxyType: HTMLSelectElement;
    let objectStyle: HTMLSelectElement;

    async function handleLoad(_event: Event): Promise<void> {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");

        if (!canvas)
            return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");


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
            let value: string = target.value;

            switch (value) {
                case "planet":
                    console.log("planet");
                    canvas.addEventListener("click", drawTiefighter);
                    break;

                case "ship":
                    console.log("ship");
                    canvas.addEventListener("click", drawTiefighter);
                    break;


                case "meteroite":
                    console.log("meteroite");
                    break;

                case "star":
                    console.log("star");
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
            console.log("tiefighter");
            let x: number = _event.clientX;
            let y: number = _event.clientY;
            console.log(x, y);
            let ship: Ships = new Ships(x, y);
            ship.draw();
            arrayObjects.push(ship);
            console.log(arrayObjects);

        }
    }
}
