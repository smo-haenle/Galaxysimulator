"use strict";
var Galaxy;
(function (Galaxy) {
    window.addEventListener("load", handleLoad);
    Galaxy.arrayObjects = [];
    Galaxy.arrayShips = [];
    let updateIntervalId;
    let galaxySize;
    let galaxyType;
    let objectStyle;
    async function handleLoad(_event) {
        Galaxy.canvas = document.querySelector("canvas");
        if (!Galaxy.canvas)
            return;
        Galaxy.crc2 = Galaxy.canvas.getContext("2d");
        let background = Galaxy.crc2.getImageData(0, 0, Galaxy.canvas.width, Galaxy.canvas.height);
        updateIntervalId = window.setInterval(update, 50, background);
        let deleteAll = document.querySelector("#selfDestroy");
        deleteAll.addEventListener("click", selfDestroy);
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
            var value = target.value;
            switch (value) {
                case "ship":
                    console.log("ship");
                    Galaxy.canvas.addEventListener("click", drawTiefighter);
                    Galaxy.canvas.removeEventListener("click", drawStar);
                    Galaxy.canvas.removeEventListener("click", drawPlanet);
                    Galaxy.canvas.removeEventListener("click", drawAsteroid);
                    break;
                case "planet":
                    console.log("planet");
                    Galaxy.canvas.addEventListener("click", drawPlanet);
                    Galaxy.canvas.removeEventListener("click", drawStar);
                    Galaxy.canvas.removeEventListener("click", drawTiefighter);
                    Galaxy.canvas.removeEventListener("click", drawAsteroid);
                    break;
                case "asteroid":
                    console.log("asteroid");
                    Galaxy.canvas.addEventListener("click", drawAsteroid);
                    Galaxy.canvas.removeEventListener("click", drawStar);
                    Galaxy.canvas.removeEventListener("click", drawPlanet);
                    Galaxy.canvas.removeEventListener("click", drawTiefighter);
                    break;
                case "star":
                    console.log("star");
                    Galaxy.canvas.addEventListener("click", drawStar);
                    Galaxy.canvas.removeEventListener("click", drawTiefighter);
                    Galaxy.canvas.removeEventListener("click", drawPlanet);
                    Galaxy.canvas.removeEventListener("click", drawAsteroid);
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
            let x = _event.clientX;
            let y = _event.clientY;
            console.log(x, y);
            let ship = new Galaxy.Ships(x, y);
            ship.draw();
            Galaxy.arrayObjects.push(ship);
            console.log(Galaxy.arrayObjects);
        }
        function drawStar(_event) {
            let x = _event.clientX;
            let y = _event.clientY;
            console.log(x, y);
            let star = new Galaxy.Stars(x, y, 4);
            star.draw();
            Galaxy.arrayObjects.push(star);
            console.log(Galaxy.arrayObjects);
        }
        function drawAsteroid(_event) {
            let x = _event.clientX;
            let y = _event.clientY;
            console.log(x, y);
            let asteroid = new Galaxy.Asteroid(x, y);
            asteroid.draw();
            Galaxy.arrayObjects.push(asteroid);
            console.log(Galaxy.arrayObjects);
        }
        function update(_background) {
            Galaxy.crc2.putImageData(_background, 0, 0);
            for (let object of Galaxy.arrayObjects) {
                object.draw();
                object.move(1 / 50);
                object.rotate();
            }
        }
        function selfDestroy() {
            Galaxy.arrayObjects = [];
        }
    }
})(Galaxy || (Galaxy = {}));
//# sourceMappingURL=main.js.map