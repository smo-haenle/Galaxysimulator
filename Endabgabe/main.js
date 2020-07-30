"use strict";
var Galaxy;
(function (Galaxy) {
    window.addEventListener("load", handleLoad);
    Galaxy.arrayObjects = [];
    let galaxySize;
    let galaxyType;
    let objectStyle;
    async function handleLoad(_event) {
        Galaxy.canvas = document.querySelector("canvas");
        if (!Galaxy.canvas)
            return;
        Galaxy.crc2 = Galaxy.canvas.getContext("2d");
        galaxySize = document.querySelector("div#chooseSize");
        galaxySize.addEventListener("change", chooseGalaxySize);
        galaxyType = document.querySelector("#chooseGalaxy");
        galaxyType.addEventListener("change", chooseGalaxy);
        objectStyle = document.querySelector("#chooseObject");
        objectStyle.addEventListener("change", chooseObjects);
        function chooseGalaxySize(_event) {
            let target = _event.target;
            let id = target.id;
            switch (id) {
                case "galaxy3":
                    console.log("galaxy 3");
                    Galaxy.crc2.canvas.width = 900;
                    Galaxy.crc2.canvas.height = 450;
                    break;
                case "galaxy2":
                    console.log("galaxy 2");
                    Galaxy.crc2.canvas.width = 700;
                    Galaxy.crc2.canvas.height = 400;
                    break;
                case "galaxy1":
                    console.log("galaxy 1");
                    Galaxy.crc2.canvas.width = 500;
                    Galaxy.crc2.canvas.height = 300;
                    break;
            }
        }
        function chooseGalaxy(_event) {
            console.log("choose background");
            let target = _event.target;
            let value = target.value;
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
        function chooseObjects(_event) {
            let target = _event.target;
            let value = target.value;
            switch (value) {
                case "ship":
                    console.log("ship");
                    Galaxy.canvas.addEventListener("click", drawTiefighter);
                    break;
                case "planet":
                    console.log("planet");
                    Galaxy.canvas.addEventListener("click", drawPlanet);
                    break;
                case "meteroite":
                    console.log("meteroite");
                    break;
                case "star":
                    console.log("star");
                    break;
            }
        }
        function drawPlanet(_event) {
            console.log("drawplanet");
            let x = _event.clientX;
            let y = _event.clientY;
            console.log(x, y);
            let planet = new Galaxy.Planets(x, y);
            planet.draw();
            Galaxy.arrayObjects.push(planet);
            console.log(Galaxy.arrayObjects);
        }
        function drawTiefighter(_event) {
            console.log("tiefighter");
            let x = _event.clientX;
            let y = _event.clientY;
            console.log(x, y);
            let ship = new Galaxy.Ships(x, y);
            ship.draw();
            Galaxy.arrayObjects.push(ship);
            console.log(Galaxy.arrayObjects);
        }
    }
})(Galaxy || (Galaxy = {}));
//# sourceMappingURL=main.js.map