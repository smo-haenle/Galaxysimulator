"use strict";
var Galaxy;
(function (Galaxy) {
    window.addEventListener("load", handleLoad);
    Galaxy.url = "https://galaxysimulator.herokuapp.com/";
    Galaxy.arrayShips = [];
    Galaxy.arrayPlanets = [];
    Galaxy.arrayAsteroids = [];
    Galaxy.arrayStars = [];
    let updateIntervalId;
    let galaxySize;
    let galaxyType;
    let objectStyle;
    let dragDrop = false;
    let shipDragDrop;
    let planetDragDrop;
    let starDragDrop;
    let asteroidDragDrop;
    function handleLoad(_event) {
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
        let submit = document.getElementById("saveButton");
        submit.addEventListener("click", sendPicture);
        let load = document.getElementById("loadButton");
        load.addEventListener("click", loadPicture);
        Galaxy.canvas.addEventListener("mousedown", pickSymbol);
    }
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
        planet.setColour();
        planet.draw();
        Galaxy.arrayPlanets.push(planet);
        console.log(Galaxy.arrayPlanets);
    }
    function drawTiefighter(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        console.log(x, y);
        let ship = new Galaxy.Ships(x, y);
        ship.draw();
        Galaxy.arrayShips.push(ship);
        console.log(Galaxy.arrayShips);
    }
    function drawStar(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        console.log(x, y);
        let star = new Galaxy.Stars(x, y);
        star.draw();
        Galaxy.arrayStars.push(star);
        console.log(Galaxy.arrayStars);
    }
    function drawAsteroid(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        console.log(x, y);
        let asteroid = new Galaxy.Asteroids(x, y);
        asteroid.draw();
        Galaxy.arrayAsteroids.push(asteroid);
        console.log(Galaxy.arrayAsteroids);
    }
    function update(_background) {
        Galaxy.crc2.putImageData(_background, 0, 0);
        for (let planet of Galaxy.arrayPlanets) {
            planet.draw();
        }
        for (let ship of Galaxy.arrayShips) {
            ship.draw();
            ship.move();
        }
        for (let star of Galaxy.arrayStars) {
            star.draw();
        }
        for (let asteroid of Galaxy.arrayAsteroids) {
            asteroid.draw();
            asteroid.move();
        }
    }
    function selfDestroy() {
        Galaxy.arrayAsteroids = [];
        Galaxy.arrayPlanets = [];
        Galaxy.arrayShips = [];
        Galaxy.arrayStars = [];
    }
    function pickSymbol(_event) {
        dragDrop = true;
        console.log("pick");
        let offsetX = _event.clientX;
        let offsetY = _event.clientY;
        console.log(offsetX, offsetY);
        for (let ship of Galaxy.arrayShips) {
            if (ship.position.x - 25 < offsetX &&
                ship.position.x + 25 > offsetX &&
                ship.position.y - 10 < offsetY &&
                ship.position.y + 10 > offsetY) {
                let index = Galaxy.arrayShips.indexOf(ship);
                Galaxy.arrayShips.splice(index, 1);
                shipDragDrop = ship;
                console.log(shipDragDrop);
            }
        }
        for (let planet of Galaxy.arrayPlanets) {
            if (planet.position.x - 25 < offsetX &&
                planet.position.x + 25 > offsetX &&
                planet.position.y - 25 < offsetY &&
                planet.position.y + 25 > offsetY) {
                let index = Galaxy.arrayPlanets.indexOf(planet);
                Galaxy.arrayPlanets.splice(index, 1);
                planetDragDrop = planet;
                console.log(planetDragDrop);
            }
        }
        for (let star of Galaxy.arrayStars) {
            if (star.position.x - 10 < offsetX &&
                star.position.x + 10 > offsetX &&
                star.position.y - 10 < offsetY &&
                star.position.y + 10 > offsetY) {
                let index = Galaxy.arrayStars.indexOf(star);
                Galaxy.arrayStars.splice(index, 1);
                starDragDrop = star;
                console.log(starDragDrop);
            }
        }
        for (let asteroids of Galaxy.arrayAsteroids) {
            if (asteroids.position.x - 25 < offsetX &&
                asteroids.position.x + 25 > offsetX &&
                asteroids.position.y - 25 < offsetY &&
                asteroids.position.y + 25 > offsetY) {
                let index = Galaxy.arrayAsteroids.indexOf(asteroids);
                Galaxy.arrayAsteroids.splice(index, 1);
                asteroidDragDrop = asteroids;
                console.log(asteroidDragDrop);
            }
        }
    }
    async function sendPicture() {
        let name = prompt("Canvas Name");
        // console.log(name);
        if (name == "") {
            alert("please enter valid name");
            return;
        }
        let picture = {
            name: name,
            // URLSearchParams erwartet eine key value pair mit jeweils strings
            //--> arrays in strings umwandeln
            ship: JSON.stringify(Galaxy.arrayShips),
            star: JSON.stringify(Galaxy.arrayStars),
            asteroid: JSON.stringify(Galaxy.arrayAsteroids),
            planet: JSON.stringify(Galaxy.arrayPlanets)
        };
        let query = new URLSearchParams(picture);
        await fetch(Galaxy.url + "/save?" + query.toString());
        //json string wird zu einem query string umgewandelt
        alert("Saved");
    }
    async function loadPicture() {
        let name = prompt("Canvas Name");
        if (name == "") {
            alert("please enter valid name");
            return;
        }
        let searchParams = {
            name: name
        };
        let query = new URLSearchParams(searchParams);
        let response = await fetch(Galaxy.url + "/load?" + query.toString());
        // das Response objekt gibt mit der json funktion den inhalt der antwort als json zurück
        let responseJson = await response.json();
        // let name = responseJson.name;
        if (responseJson == null) {
            alert("Name is not in Databank");
            return;
        }
        // rohe objekte in array form
        let shipsRaw = JSON.parse(responseJson.ship);
        let starsRaw = JSON.parse(responseJson.star);
        let asteroidsRaw = JSON.parse(responseJson.asteroid);
        let planetsRaw = JSON.parse(responseJson.planet);
        selfDestroy();
        for (let ship of shipsRaw) {
            // von den rohen partikel daten werden die Particle objekte erzeugt und dem canvas hinzugefügt
            let newShip = new Galaxy.Ships(ship.position.x, ship.position.y);
            Galaxy.arrayShips.push(newShip);
        }
        for (let star of starsRaw) {
            // von den rohen partikel daten werden die Particle objekte erzeugt und dem canvas hinzugefügt
            let newStar = new Galaxy.Ships(star.position.x, star.position.y);
            Galaxy.arrayStars.push(newStar);
        }
        for (let asteroid of asteroidsRaw) {
            // von den rohen partikel daten werden die Particle objekte erzeugt und dem canvas hinzugefügt
            let newAsteroid = new Galaxy.Asteroids(asteroid.position.x, asteroid.position.y);
            Galaxy.arrayAsteroids.push(newAsteroid);
        }
        for (let planet of planetsRaw) {
            // von den rohen partikel daten werden die Particle objekte erzeugt und dem canvas hinzugefügt
            let newPlanet = new Galaxy.Planets(planet.position.x, planet.position.y);
            Galaxy.arrayPlanets.push(newPlanet);
        }
    }
})(Galaxy || (Galaxy = {}));
//# sourceMappingURL=main.js.map