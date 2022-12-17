/*
A082_Vogelhaus
Robert Schindler MKB
Matrikel: 271342
Datum: 15.12.2022
Quellen: L09, Internet-Recherche, Henning Pils
*/
var A09_2_Vogelhaus_Classes;
(function (A09_2_Vogelhaus_Classes) {
    window.addEventListener("load", handleLoad);
    let snowflakes = [];
    console.log(snowflakes);
    let flyingBirds = [];
    //let pickingBirds: PickingBirds[] = [];
    let imgData;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        A09_2_Vogelhaus_Classes.crc2 = canvas.getContext("2d");
        // Canvas-Element deklarieren
        // let canvas: HTMLCanvasElement = document.querySelector("canvas");
        // let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
        // Canvas Hintergrundfarbe und Startpunkte festlegen
        A09_2_Vogelhaus_Classes.crc2.fillStyle = "#6CABDD";
        A09_2_Vogelhaus_Classes.crc2.fillRect(0, 0, A09_2_Vogelhaus_Classes.crc2.canvas.width, A09_2_Vogelhaus_Classes.crc2.canvas.height);
        //Bereich für die Berge festlegen
        let mountains = { x: 0, y: 0.45 * A09_2_Vogelhaus_Classes.crc2.canvas.height };
        //Ausgabe
        drawBackground();
        drawSun({ x: 270, y: 70 });
        drawSnowmen({ x: 60, y: 600 });
        drawHouse({ x: 335, y: 666 });
        drawMountains(mountains, 160, 70, "grey");
        drawCloud({ x: 100, y: 100 }, { x: 100, y: 50 });
        drawTrees({ x: 20, y: 400 });
        drawFlyingBirds();
        drawHouseBird({ x: 334, y: 666 });
        drawPickingBirds();
        drawSnowflakes( /*{ x: 0, y: 0 }, {x: 0, y: 0}*/);
        imgData = A09_2_Vogelhaus_Classes.crc2.getImageData(0, 0, canvas.width, canvas.height);
        setInterval(update, 10);
        //Hintergrund-Atmosphäre
        function drawBackground() {
            A09_2_Vogelhaus_Classes.crc2.save();
            let gradient = A09_2_Vogelhaus_Classes.crc2.createLinearGradient(0, 0, 0, A09_2_Vogelhaus_Classes.crc2.canvas.height);
            gradient.addColorStop(0, "lightblue");
            gradient.addColorStop(0.5, "white");
            gradient.addColorStop(1, "#E9E0D2");
            A09_2_Vogelhaus_Classes.crc2.fillStyle = gradient;
            A09_2_Vogelhaus_Classes.crc2.fillRect(0, 0, A09_2_Vogelhaus_Classes.crc2.canvas.width, A09_2_Vogelhaus_Classes.crc2.canvas.height);
            A09_2_Vogelhaus_Classes.crc2.restore();
        }
        //Sonne
        function drawSun(_position) {
            A09_2_Vogelhaus_Classes.crc2.save();
            A09_2_Vogelhaus_Classes.crc2.translate(_position.x, _position.y);
            A09_2_Vogelhaus_Classes.crc2.fillStyle = "#F39F18";
            A09_2_Vogelhaus_Classes.crc2.arc(0, 0, 50, 0, 2 * Math.PI);
            A09_2_Vogelhaus_Classes.crc2.fill();
            A09_2_Vogelhaus_Classes.crc2.restore();
        }
        //Schneemann
        function drawSnowmen(_position) {
            A09_2_Vogelhaus_Classes.crc2.save();
            A09_2_Vogelhaus_Classes.crc2.translate(_position.x, _position.y);
            A09_2_Vogelhaus_Classes.crc2.fillStyle = "#FFFAFA";
            A09_2_Vogelhaus_Classes.crc2.beginPath();
            A09_2_Vogelhaus_Classes.crc2.arc(0, 0, 50, 0, 2 * Math.PI);
            A09_2_Vogelhaus_Classes.crc2.fill();
            A09_2_Vogelhaus_Classes.crc2.beginPath();
            A09_2_Vogelhaus_Classes.crc2.arc(0, -60, 40, 0, 2 * Math.PI);
            A09_2_Vogelhaus_Classes.crc2.fill();
            A09_2_Vogelhaus_Classes.crc2.beginPath();
            A09_2_Vogelhaus_Classes.crc2.arc(0, -120, 30, 0, 2 * Math.PI);
            A09_2_Vogelhaus_Classes.crc2.fill();
            //Nase
            A09_2_Vogelhaus_Classes.crc2.fillStyle = "orange";
            A09_2_Vogelhaus_Classes.crc2.beginPath();
            A09_2_Vogelhaus_Classes.crc2.moveTo(30, -125);
            A09_2_Vogelhaus_Classes.crc2.lineTo(50, -120);
            A09_2_Vogelhaus_Classes.crc2.lineTo(30, -115);
            A09_2_Vogelhaus_Classes.crc2.fill();
            //Auge und Knöpfe
            A09_2_Vogelhaus_Classes.crc2.fillStyle = "black";
            A09_2_Vogelhaus_Classes.crc2.beginPath();
            A09_2_Vogelhaus_Classes.crc2.arc(16, -133, 3, 0, 2 * Math.PI);
            A09_2_Vogelhaus_Classes.crc2.fill();
            A09_2_Vogelhaus_Classes.crc2.closePath();
            A09_2_Vogelhaus_Classes.crc2.beginPath();
            A09_2_Vogelhaus_Classes.crc2.arc(38, -64, 3, 0, 2 * Math.PI);
            A09_2_Vogelhaus_Classes.crc2.fill();
            A09_2_Vogelhaus_Classes.crc2.closePath();
            A09_2_Vogelhaus_Classes.crc2.beginPath();
            A09_2_Vogelhaus_Classes.crc2.arc(48, 0, 3, 0, 2 * Math.PI);
            A09_2_Vogelhaus_Classes.crc2.fill();
            A09_2_Vogelhaus_Classes.crc2.closePath();
            A09_2_Vogelhaus_Classes.crc2.restore();
        }
        //Vogelhaus
        function drawHouse(_position) {
            A09_2_Vogelhaus_Classes.crc2.save();
            A09_2_Vogelhaus_Classes.crc2.beginPath();
            A09_2_Vogelhaus_Classes.crc2.translate(_position.x, _position.y);
            A09_2_Vogelhaus_Classes.crc2.moveTo(-75, 0);
            A09_2_Vogelhaus_Classes.crc2.lineTo(-75, -100);
            A09_2_Vogelhaus_Classes.crc2.lineTo(-125, -100);
            A09_2_Vogelhaus_Classes.crc2.lineTo(-125, -179);
            A09_2_Vogelhaus_Classes.crc2.lineTo(-25, -179);
            A09_2_Vogelhaus_Classes.crc2.lineTo(-25, -100);
            A09_2_Vogelhaus_Classes.crc2.lineTo(-75, -100);
            A09_2_Vogelhaus_Classes.crc2.lineWidth = 7;
            A09_2_Vogelhaus_Classes.crc2.fillStyle = "#AC814D";
            A09_2_Vogelhaus_Classes.crc2.fill();
            A09_2_Vogelhaus_Classes.crc2.strokeStyle = "#5B3A29";
            A09_2_Vogelhaus_Classes.crc2.stroke();
            A09_2_Vogelhaus_Classes.crc2.closePath();
            A09_2_Vogelhaus_Classes.crc2.beginPath();
            A09_2_Vogelhaus_Classes.crc2.moveTo(-140, -170);
            A09_2_Vogelhaus_Classes.crc2.lineTo(-75, -220);
            A09_2_Vogelhaus_Classes.crc2.lineTo(-10, -170);
            A09_2_Vogelhaus_Classes.crc2.lineWidth = 7;
            A09_2_Vogelhaus_Classes.crc2.strokeStyle = "#5B3A29";
            A09_2_Vogelhaus_Classes.crc2.stroke();
            A09_2_Vogelhaus_Classes.crc2.closePath();
            A09_2_Vogelhaus_Classes.crc2.restore();
        }
        //Wolke
        function drawCloud(_position, _size) {
            A09_2_Vogelhaus_Classes.crc2.save();
            let nParticles = 20;
            let radiusParticle = 50;
            let particle = new Path2D();
            let gradient = A09_2_Vogelhaus_Classes.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            //crc2.save();
            A09_2_Vogelhaus_Classes.crc2.translate(_position.x, _position.y);
            A09_2_Vogelhaus_Classes.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                A09_2_Vogelhaus_Classes.crc2.save();
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                A09_2_Vogelhaus_Classes.crc2.translate(x, y);
                A09_2_Vogelhaus_Classes.crc2.fill(particle);
                A09_2_Vogelhaus_Classes.crc2.restore();
            }
            A09_2_Vogelhaus_Classes.crc2.restore();
        }
        //Berge
        function drawMountains(_position, _min, _max, _color) {
            let stepMin = 70;
            let stepMax = 160;
            let x = 0;
            A09_2_Vogelhaus_Classes.crc2.save();
            A09_2_Vogelhaus_Classes.crc2.translate(_position.x, _position.y);
            A09_2_Vogelhaus_Classes.crc2.beginPath();
            A09_2_Vogelhaus_Classes.crc2.moveTo(0, 0);
            A09_2_Vogelhaus_Classes.crc2.lineTo(0, -_max);
            do {
                x += stepMin + Math.random() * (stepMax - stepMin);
                let y = -_min - Math.random() * (_max - _min);
                A09_2_Vogelhaus_Classes.crc2.lineTo(x, y);
            } while (x < A09_2_Vogelhaus_Classes.crc2.canvas.width);
            A09_2_Vogelhaus_Classes.crc2.lineTo(x, 0);
            A09_2_Vogelhaus_Classes.crc2.closePath();
            A09_2_Vogelhaus_Classes.crc2.fillStyle = "grey";
            A09_2_Vogelhaus_Classes.crc2.fill();
            A09_2_Vogelhaus_Classes.crc2.restore();
        }
        //Wald
        function drawTrees(_position) {
            for (let index = 0; index < 10; index++) {
                let xRandomValue = Math.floor(Math.random() * (335 - 5));
                let yRandomValue = Math.floor(Math.random() * (150 - 50) + 320);
                let randomScale = Math.floor(Math.random() * (3 - 1) + 1);
                A09_2_Vogelhaus_Classes.crc2.save();
                A09_2_Vogelhaus_Classes.crc2.beginPath();
                A09_2_Vogelhaus_Classes.crc2.translate(xRandomValue, yRandomValue);
                A09_2_Vogelhaus_Classes.crc2.scale(randomScale, randomScale);
                A09_2_Vogelhaus_Classes.crc2.moveTo(20, 0);
                A09_2_Vogelhaus_Classes.crc2.lineTo(-20, 0);
                A09_2_Vogelhaus_Classes.crc2.lineTo(0, -30);
                A09_2_Vogelhaus_Classes.crc2.moveTo(15, -20);
                A09_2_Vogelhaus_Classes.crc2.lineTo(-15, -20);
                A09_2_Vogelhaus_Classes.crc2.lineTo(0, -50);
                A09_2_Vogelhaus_Classes.crc2.moveTo(10, -40);
                A09_2_Vogelhaus_Classes.crc2.lineTo(-10, -40);
                A09_2_Vogelhaus_Classes.crc2.lineTo(0, -60);
                A09_2_Vogelhaus_Classes.crc2.fillStyle = "#26592F";
                A09_2_Vogelhaus_Classes.crc2.fill();
                A09_2_Vogelhaus_Classes.crc2.closePath();
                A09_2_Vogelhaus_Classes.crc2.restore();
                A09_2_Vogelhaus_Classes.crc2.save();
                A09_2_Vogelhaus_Classes.crc2.beginPath();
                A09_2_Vogelhaus_Classes.crc2.translate(xRandomValue, yRandomValue);
                A09_2_Vogelhaus_Classes.crc2.moveTo(4, 0);
                A09_2_Vogelhaus_Classes.crc2.lineTo(-4, 0);
                A09_2_Vogelhaus_Classes.crc2.lineTo(-6, 20);
                A09_2_Vogelhaus_Classes.crc2.lineTo(6, 20);
                A09_2_Vogelhaus_Classes.crc2.fillStyle = "#5B3A29";
                A09_2_Vogelhaus_Classes.crc2.fill();
                A09_2_Vogelhaus_Classes.crc2.closePath();
                A09_2_Vogelhaus_Classes.crc2.restore();
            }
        }
        //Schneeflocken
        /*function drawSnowflakes(_position: Vector, _size: Vector): void {
                
                for (let i: number = 0; i < 60; i++) {
                    let x: number = Math.random() * 200;
                    let y: number = Math.random() * crc2.canvas.height;
                    let radiusSnowflake: number = Math.random() * 3 + 1;
                    crc2.beginPath();
                    crc2.arc(x, y, radiusSnowflake, 0, 2 * Math.PI);
                    crc2.fillStyle = "white";
                    crc2.fill();
                }
            }*/
        function drawSnowflakes() {
            //window.setInterval (update,200);
            for (let index = 0; index < 60; index++) {
                let snowflake = new A09_2_Vogelhaus_Classes.Snowflake(Math.random() * 20);
                snowflakes.push(snowflake);
                A09_2_Vogelhaus_Classes.crc2.restore();
            }
            console.log(snowflakes);
        }
        //fliegende Vögel
        //nachträglich Schleife von 10 auf 19 geändert, da sonst Anforderung mit 20 Vögeln nicht erfüllt war
        // function drawFlyingBirds(): void {
        //         for (let index: number = 0; index < 18; index++) {
        //             let xRandomValue: number = Math.floor(Math.random() * (300 - 30));
        //             let yRandomValue: number = Math.floor(Math.random() * (250 - 25));
        //             let randomScale: number = Math.floor(Math.random() * (3));
        //             crc2.save();
        //             crc2.beginPath();
        //             crc2.translate(xRandomValue, yRandomValue);
        //             crc2.scale(randomScale, randomScale);
        //             crc2.moveTo(0, 0);
        //             crc2.bezierCurveTo(6, 6, 12, -12, 24, -3);
        //             crc2.moveTo(0, 0);
        //             crc2.bezierCurveTo(-6, -6, -12, -12, -24, -3);
        //             crc2.stroke();
        //             crc2.closePath();
        //             crc2.restore();
        //         }
        //     }
        function drawFlyingBirds() {
            for (let index = 0; index < 20; index++) {
                let bird1 = new A09_2_Vogelhaus_Classes.FlyingBirds();
                flyingBirds.push(bird1);
            }
        }
        //pickende Vögel
        function drawPickingBirds() {
            for (let index = 0; index < 5; index++) {
                let xRandomValue = Math.floor(Math.random() * (150));
                let yRandomValue = Math.floor(canvas.height / 2 + Math.random() * (50));
                let randomScale = Math.floor(Math.random() * (3 - 0.5));
                console.log(xRandomValue, yRandomValue);
                A09_2_Vogelhaus_Classes.crc2.save();
                A09_2_Vogelhaus_Classes.crc2.translate(xRandomValue, yRandomValue);
                A09_2_Vogelhaus_Classes.crc2.scale(randomScale, randomScale);
                A09_2_Vogelhaus_Classes.crc2.fillStyle = "#5ea3b3";
                A09_2_Vogelhaus_Classes.crc2.beginPath();
                A09_2_Vogelhaus_Classes.crc2.arc(60, 145, 12, 0, 2 * Math.PI);
                A09_2_Vogelhaus_Classes.crc2.fill();
                A09_2_Vogelhaus_Classes.crc2.beginPath();
                A09_2_Vogelhaus_Classes.crc2.arc(75, 155, 16, 0, 2 * Math.PI);
                A09_2_Vogelhaus_Classes.crc2.fill();
                //Schnabel
                A09_2_Vogelhaus_Classes.crc2.fillStyle = "black";
                A09_2_Vogelhaus_Classes.crc2.beginPath();
                A09_2_Vogelhaus_Classes.crc2.moveTo(58, 156);
                A09_2_Vogelhaus_Classes.crc2.lineTo(42, 160);
                A09_2_Vogelhaus_Classes.crc2.lineTo(49, 142);
                A09_2_Vogelhaus_Classes.crc2.fill();
                //Beine
                A09_2_Vogelhaus_Classes.crc2.strokeStyle = "black";
                A09_2_Vogelhaus_Classes.crc2.moveTo(75, 171);
                A09_2_Vogelhaus_Classes.crc2.lineTo(70, 181);
                A09_2_Vogelhaus_Classes.crc2.moveTo(75, 171);
                A09_2_Vogelhaus_Classes.crc2.lineTo(80, 181);
                A09_2_Vogelhaus_Classes.crc2.stroke();
                //Auge
                A09_2_Vogelhaus_Classes.crc2.fillStyle = "black";
                A09_2_Vogelhaus_Classes.crc2.beginPath();
                A09_2_Vogelhaus_Classes.crc2.arc(58, 141, 2, 0, 2 * Math.PI);
                A09_2_Vogelhaus_Classes.crc2.fill();
                A09_2_Vogelhaus_Classes.crc2.closePath();
                A09_2_Vogelhaus_Classes.crc2.restore();
            }
        }
        //pickende Vögel
        // function drawPickingBirds(): void {
        // for (let index: number = 0; index < 5; index++) {
        //         let bird1: PickingBirds = new PickingBirds(this.position.x);
        //         pickingBirds.push(bird1);
        //     }
        // }
        //Vogel im Haus
        function drawHouseBird(_position) {
            A09_2_Vogelhaus_Classes.crc2.save();
            A09_2_Vogelhaus_Classes.crc2.translate(_position.x, _position.y);
            A09_2_Vogelhaus_Classes.crc2.fillStyle = "#888888";
            A09_2_Vogelhaus_Classes.crc2.beginPath();
            A09_2_Vogelhaus_Classes.crc2.arc(-75, -155, 12, 0, 2 * Math.PI);
            A09_2_Vogelhaus_Classes.crc2.fill();
            A09_2_Vogelhaus_Classes.crc2.beginPath();
            A09_2_Vogelhaus_Classes.crc2.arc(-60, -135, 16, 0, 2 * Math.PI);
            A09_2_Vogelhaus_Classes.crc2.fill();
            //Schnabel unten
            A09_2_Vogelhaus_Classes.crc2.fillStyle = "orange";
            A09_2_Vogelhaus_Classes.crc2.beginPath();
            A09_2_Vogelhaus_Classes.crc2.moveTo(-85, -150);
            A09_2_Vogelhaus_Classes.crc2.lineTo(-100, -156);
            A09_2_Vogelhaus_Classes.crc2.lineTo(-85, -156);
            A09_2_Vogelhaus_Classes.crc2.fill();
            //Schnabel oben
            A09_2_Vogelhaus_Classes.crc2.fillStyle = "orange";
            A09_2_Vogelhaus_Classes.crc2.beginPath();
            A09_2_Vogelhaus_Classes.crc2.moveTo(-85, -162);
            A09_2_Vogelhaus_Classes.crc2.lineTo(-100, -156);
            A09_2_Vogelhaus_Classes.crc2.lineTo(-85, -156);
            A09_2_Vogelhaus_Classes.crc2.fill();
            //Beine
            A09_2_Vogelhaus_Classes.crc2.strokeStyle = "orange";
            A09_2_Vogelhaus_Classes.crc2.moveTo(-60, -119);
            A09_2_Vogelhaus_Classes.crc2.lineTo(-65, -110);
            A09_2_Vogelhaus_Classes.crc2.moveTo(-60, -119);
            A09_2_Vogelhaus_Classes.crc2.lineTo(-55, -110);
            A09_2_Vogelhaus_Classes.crc2.stroke();
            //Auge
            A09_2_Vogelhaus_Classes.crc2.fillStyle = "#FF0000";
            A09_2_Vogelhaus_Classes.crc2.beginPath();
            A09_2_Vogelhaus_Classes.crc2.arc(-78, -158, 2, 0, 2 * Math.PI);
            A09_2_Vogelhaus_Classes.crc2.fill();
            A09_2_Vogelhaus_Classes.crc2.closePath();
            A09_2_Vogelhaus_Classes.crc2.restore();
        }
        function update() {
            A09_2_Vogelhaus_Classes.crc2.clearRect(0, 0, A09_2_Vogelhaus_Classes.crc2.canvas.width, A09_2_Vogelhaus_Classes.crc2.canvas.height);
            A09_2_Vogelhaus_Classes.crc2.putImageData(imgData, 0, 0);
            A09_2_Vogelhaus_Classes.crc2.save();
            for (let i = 0; i < snowflakes.length; i++) {
                snowflakes[i].move(1 / 50);
                snowflakes[i].draw();
            }
            for (let i = 0; i < flyingBirds.length; i++) {
                flyingBirds[i].move(1 / 50);
                flyingBirds[i].drawFlyingBirds();
                //console.log(flyingBirds[i].positon);
            }
            // for (let i: number = 0; i < pickingBirds.length; i++); {
            // pickingBirds[i].eat(1 / 50);
            // pickingBirds[i].drawPickingBirds();
            // }
        }
        console.log(flyingBirds);
        A09_2_Vogelhaus_Classes.crc2.restore();
    }
})(A09_2_Vogelhaus_Classes || (A09_2_Vogelhaus_Classes = {}));
//# sourceMappingURL=script.js.map