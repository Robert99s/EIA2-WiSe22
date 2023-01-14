/*
A10_2_PolymorphieAnimation
Robert Schindler MKB
Matrikel: 271342
Datum: 14.01.2023
Quellen:
*/

namespace A10_2_PolymorphieAnimation {

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    
    let snowflakes: Snowflake[] = [];
    console.log(snowflakes);
    
    let flyingBirds: FlyingBirds[] = [];
    //let pickingBirds: PickingBirds[] = [];

    let imgData: ImageData;

    let moveables: Moveable[] = []; 

    interface Vector {
        x: number;
        y: number;
    }

    function handleLoad(): void {

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        // Canvas-Element deklarieren
        // let canvas: HTMLCanvasElement = document.querySelector("canvas");
        // let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

        // Canvas Hintergrundfarbe und Startpunkte festlegen
        crc2.fillStyle = "#6CABDD";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        //Bereich für die Berge festlegen
        let mountains: Vector = { x: 0, y: 0.45 * crc2.canvas.height};

        //Ausgabe
        drawBackground();
        drawSun({x: 270, y: 70});
        drawSnowmen({x: 60, y: 600});
        drawHouse ({x: 335, y: 666});
        drawMountains(mountains, 160, 70, "grey");
        drawCloud({ x: 100, y: 100 }, {x: 100, y: 50});
        drawTrees({x: 20, y: 400});
        //drawFlyingBirds();
        drawHouseBird({x: 334, y: 666});
        drawPickingBirds();
        //drawSnowflakes(/*{ x: 0, y: 0 }, {x: 0, y: 0}*/);
        imgData  = crc2.getImageData (0, 0, canvas.width, canvas.height);
        create();
        setInterval(update, 10);

        export function create(): void {
        
            for (let index: number = 0; index < 100; index++) {
                let snowflake: Snowflake = new Snowflake(1); 
                moveables.push(snowflake); 
            }
    
            for (let index2: number = 0; index2 < 20; index2++) {
                let bird: FlyingBirds = new FlyingBirds(200);
                moveables.push(bird);
            }
    
        }
    
        export function update(): void {
            console.log("update");
            crc2.putImageData(imgData, 0, 0); 
            // crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            for (let snowflake of moveables) {
                snowflake.move(1 / 50);
                snowflake.draw();
            }
            for (let bird of moveables) {
                bird.move(1 / 50);
                bird.draw();
            }
        }    

        //Hintergrund-Atmosphäre
        function drawBackground(): void {

            crc2.save();
    
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0, "lightblue");
            gradient.addColorStop(0.5, "white");
            gradient.addColorStop(1, "#E9E0D2");
    
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

            crc2.restore();
        }

        //Sonne
        function drawSun(_position: Vector): void {
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = "#F39F18";
            crc2.arc(0, 0, 50, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }

        //Schneemann
        function drawSnowmen (_position: Vector): void {
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
        function drawHouse(_position: Vector): void {
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
        function drawCloud(_position: Vector, _size: Vector): void {

            crc2.save();

            let nParticles: number = 20;
            let radiusParticle: number = 50;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

            //crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;

            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x: number = (Math.random() - 0.5) * _size.x;
                let y: number = - (Math.random() * _size.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        }

        //Berge
        function drawMountains (_position: Vector, _min: number, _max: number, _color: string): void {
            let stepMin: number = 70;
            let stepMax: number = 160;
            let x: number = 0;
        
            crc2.save();
            crc2.translate(_position.x, _position.y);
        
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, -_max);

            do {
                x += stepMin + Math.random() * (stepMax - stepMin);
                let y: number = -_min - Math.random() * (_max - _min);
        
                crc2.lineTo(x, y);
            } 
            while (x < crc2.canvas.width);
        
            crc2.lineTo(x, 0);
            crc2.closePath();
            crc2.fillStyle = "grey";
            crc2.fill();
            crc2.restore();
            }

            //Wald
        function drawTrees(_position: Vector): void {
        
            for (let index: number = 0; index < 10; index++) {
                let xRandomValue: number = Math.floor(Math.random() * (335 - 5));
                let yRandomValue: number = Math.floor(Math.random() * (150 - 50) + 320);
                let randomScale: number = Math.floor(Math.random() * (3 - 1) + 1);
    
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

        /*function drawSnowflakes(): void {
        
                //window.setInterval (update,200);
                for (let index: number = 0; index < 60; index++) {
                    let snowflake: Snowflake = new Snowflake(Math.random() * 20);
             
                    snowflakes.push(snowflake);
                    crc2.restore();
                }
                console.log(snowflakes);
            }*/

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

        /*function drawFlyingBirds(): void {
                    
                for (let index: number = 0; index < 20; index++) {
                        let bird1: FlyingBirds = new FlyingBirds();
            
                        flyingBirds.push(bird1);
                    }
                }*/

        //pickende Vögel
        function drawPickingBirds(): void {
            for (let index: number = 0; index < 5; index++) {
                let xRandomValue: number = Math.floor(Math.random() * (150));
                let yRandomValue: number = Math.floor(canvas.height / 2 + Math.random() * (50));
                let randomScale: number = Math.floor(Math.random() * (3 - 0.5));

                console.log(xRandomValue, yRandomValue);
                

                crc2.save();
                crc2.translate(xRandomValue, yRandomValue);
                crc2.scale(randomScale, randomScale);
                crc2.fillStyle = "#5ea3b3";
                crc2.beginPath();
                crc2.arc(60, 145, 12, 0, 2 * Math.PI);
                crc2.fill();
                crc2.beginPath();
                crc2.arc(75, 155, 16, 0, 2 * Math.PI);
                crc2.fill();
    
                //Schnabel
                crc2.fillStyle = "black";
                crc2.beginPath();
                crc2.moveTo(58, 156);
                crc2.lineTo(42, 160);
                crc2.lineTo(49, 142);
                crc2.fill();
    
                //Beine
                crc2.strokeStyle = "black";
                crc2.moveTo(75, 171);
                crc2.lineTo(70, 181);
                crc2.moveTo(75, 171);
                crc2.lineTo(80, 181);
                crc2.stroke();
    
                //Auge
                crc2.fillStyle = "black";
                crc2.beginPath();
                crc2.arc(58, 141, 2, 0, 2 * Math.PI);
                crc2.fill();
                
                crc2.closePath();
    
                crc2.restore();
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
        function drawHouseBird(_position: Vector): void {
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = "#888888";
            crc2.beginPath();
            crc2.arc(-75, -155, 12, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(-60, -135, 16, 0, 2 * Math.PI);
            crc2.fill();

            //Schnabel unten
            crc2.fillStyle = "orange";
            crc2.beginPath();
            crc2.moveTo(-85, -150);
            crc2.lineTo(-100, -156);
            crc2.lineTo(-85, -156);
            crc2.fill();

            //Schnabel oben
            crc2.fillStyle = "orange";
            crc2.beginPath();
            crc2.moveTo(-85, -162);
            crc2.lineTo(-100, -156);
            crc2.lineTo(-85, -156);
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

        /*function update(): void {
       
            crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            crc2.putImageData(imgData, 0 , 0);
            crc2.save();
            for (let i: number = 0; i < snowflakes.length; i++) {
             snowflakes[i].move(1 / 50);
             snowflakes[i].draw();
            }
            for (let i: number = 0; i < flyingBirds.length; i++) {
            flyingBirds[i].move(1 / 50);
            flyingBirds[i].drawFlyingBirds();
                //console.log(flyingBirds[i].positon);
            }*/
            // for (let i: number = 0; i < pickingBirds.length; i++); {
            // pickingBirds[i].eat(1 / 50);
            // pickingBirds[i].drawPickingBirds();
            // }
        }
        //console.log(flyingBirds);
        
    crc2.restore();
    }
//}