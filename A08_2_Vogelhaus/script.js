/*
A082_Vogelhaus
Robert Schindler MKB
Matrikel: 271342
Datum: 03.12.2022
Quellen: L08 und Internet-Recherche
*/
var A082_Vogelhaus;
(function (A082_Vogelhaus) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        // Canvas-Element deklarieren
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        // Canvas Hintergrundfarbe und Startpunkte festlegen
        crc2.fillStyle = "#6CABDD";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        //Bereich für die Berge festlegen
        let mountains = { x: 0, y: 0.45 * crc2.canvas.height };
        //Ausgabe
        drawBackground();
        drawSun({ x: 270, y: 70 });
        drawSnowmen({ x: 60, y: 600 });
        drawHouse({ x: 335, y: 667 });
        drawMountains(mountains, 160, 70, "grey");
        drawCloud({ x: 100, y: 100 }, { x: 100, y: 50 });
        drawTrees({ x: 0, y: 400 });
        drawFlyingBirds();
        drawHouseBird({ x: 335, y: 667 });
        drawSnowflakes({ x: 0, y: 0 }, { x: 0, y: 0 });
        //Hintergrund-Atmosphäre
        function drawBackground() {
            let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0, "lightblue");
            gradient.addColorStop(0.5, "white");
            gradient.addColorStop(1, "#E9E0D2");
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }
        //Sonne
        function drawSun(_position) {
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = "#F39F18";
            crc2.arc(0, 0, 50, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }
        //Schneemann
        function drawSnowmen(_position) {
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = "#FFFAFA";
            crc2.beginPath();
            crc2.arc(0, 0, 50, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(0, -60, 40, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(0, -120, 30, 0, 2 * Math.PI);
            crc2.fill();
            //Nase
            crc2.fillStyle = "orange";
            crc2.beginPath();
            crc2.moveTo(30, -125);
            crc2.lineTo(50, -120);
            crc2.lineTo(30, -115);
            crc2.fill();
            //Auge und Knöpfe
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(16, -133, 3, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(38, -64, 3, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(48, 0, 3, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
        //Vogelhaus
        function drawHouse(_position) {
            crc2.save();
            crc2.beginPath();
            crc2.translate(_position.x, _position.y);
            crc2.moveTo(-75, 0);
            crc2.lineTo(-75, -100);
            crc2.lineTo(-125, -100);
            crc2.lineTo(-125, -179);
            crc2.lineTo(-25, -179);
            crc2.lineTo(-25, -100);
            crc2.lineTo(-75, -100);
            crc2.lineWidth = 7;
            crc2.fillStyle = "#AC814D";
            crc2.fill();
            crc2.strokeStyle = "#5B3A29";
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(-140, -170);
            crc2.lineTo(-75, -220);
            crc2.lineTo(-10, -170);
            crc2.lineWidth = 7;
            crc2.strokeStyle = "#5B3A29";
            crc2.stroke();
            crc2.closePath();
            crc2.restore();
        }
        //Wolke
        function drawCloud(_position, _size) {
            let nParticles = 20;
            let radiusParticle = 50;
            let particle = new Path2D();
            let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        }
        //Berge
        function drawMountains(_position, _min, _max, _color) {
            let stepMin = 70;
            let stepMax = 160;
            let x = 0;
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, -_max);
            do {
                x += stepMin + Math.random() * (stepMax - stepMin);
                let y = -_min - Math.random() * (_max - _min);
                crc2.lineTo(x, y);
            } while (x < crc2.canvas.width);
            crc2.lineTo(x, 0);
            crc2.closePath();
            crc2.fillStyle = "grey";
            crc2.fill();
            crc2.restore();
        }
        //Schneeflocken
        function drawSnowflakes(_position, _size) {
            for (let i = 0; i < 60; i++) {
                let x = Math.random() * 200;
                let y = Math.random() * crc2.canvas.height;
                let radiusSnowflake = Math.random() * 3 + 1;
                crc2.beginPath();
                crc2.arc(x, y, radiusSnowflake, 0, 2 * Math.PI);
                crc2.fillStyle = "white";
                crc2.fill();
            }
        }
        //Wald
        function drawTrees(_position) {
            for (let index = 0; index < 10; index++) {
                let xRandomValue = Math.floor(Math.random() * (335 - 5));
                let yRandomValue = Math.floor(Math.random() * (150 - 50) + 320);
                let randomScale = Math.floor(Math.random() * (3 - 1) + 1);
                crc2.save();
                crc2.beginPath();
                crc2.translate(xRandomValue, yRandomValue);
                crc2.scale(randomScale, randomScale);
                crc2.moveTo(20, 0);
                crc2.lineTo(-20, 0);
                crc2.lineTo(0, -30);
                crc2.moveTo(15, -20);
                crc2.lineTo(-15, -20);
                crc2.lineTo(0, -50);
                crc2.moveTo(10, -40);
                crc2.lineTo(-10, -40);
                crc2.lineTo(0, -60);
                crc2.fillStyle = "#26592F";
                crc2.fill();
                crc2.closePath();
                crc2.restore();
                crc2.save();
                crc2.beginPath();
                crc2.translate(xRandomValue, yRandomValue);
                crc2.moveTo(4, 0);
                crc2.lineTo(-4, 0);
                crc2.lineTo(-6, 20);
                crc2.lineTo(6, 20);
                crc2.fillStyle = "#5B3A29";
                crc2.fill();
                crc2.closePath();
                crc2.restore();
            }
        }
        //fliegende Vögel
        function drawFlyingBirds() {
            for (let index = 0; index < 10; index++) {
                let xRandomValue = Math.floor(Math.random() * (300 - 30));
                let yRandomValue = Math.floor(Math.random() * (250 - 25));
                let randomScale = Math.floor(Math.random() * (3));
                crc2.save();
                crc2.beginPath();
                crc2.translate(xRandomValue, yRandomValue);
                crc2.scale(randomScale, randomScale);
                crc2.moveTo(0, 0);
                crc2.bezierCurveTo(6, 6, 12, -12, 24, -3);
                crc2.moveTo(0, 0);
                crc2.bezierCurveTo(-6, -6, -12, -12, -24, -3);
                crc2.stroke();
                crc2.closePath();
                crc2.restore();
            }
        }
        //"Eule"
        function drawHouseBird(_position) {
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = "#888888";
            crc2.beginPath();
            crc2.arc(-75, -155, 12, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(-60, -135, 16, 0, 2 * Math.PI);
            crc2.fill();
            //Schnabel
            crc2.fillStyle = "orange";
            crc2.beginPath();
            crc2.moveTo(-85, -162);
            crc2.lineTo(-100, -156);
            crc2.lineTo(-85, -150);
            crc2.fill();
            //Beine
            crc2.strokeStyle = "orange";
            crc2.moveTo(-60, -119);
            crc2.lineTo(-65, -110);
            crc2.moveTo(-60, -119);
            crc2.lineTo(-55, -110);
            crc2.stroke();
            //Auge
            crc2.fillStyle = "#FF0000";
            crc2.beginPath();
            crc2.arc(-78, -158, 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
    }
})(A082_Vogelhaus || (A082_Vogelhaus = {}));
//# sourceMappingURL=script.js.map