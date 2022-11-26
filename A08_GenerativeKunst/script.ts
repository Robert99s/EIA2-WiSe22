/*
A08_GenerativeKunst
Robert Schindler MKB
Matrikel: 271342
Datum: 26.11.2022
Quellen: L08
*/

namespace A08_GenerativeKunst {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {

        // Zufällige Farbe erstellen
        let rot: number = (Math.floor(Math.random() * 255));
        let gruen: number = (Math.floor(Math.random() * 255));
        let blau: number = (Math.floor(Math.random() * 255));
        let color: string = "rgb(" + rot + ", " + gruen + "," + blau + ")";

        // Canvas-Element deklarieren
        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

        // Generative Kunst auf dem gesamten Bildschirm darstellen
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Canvas Hintergrundfarbe und Startpunkte festlegen
        crc2.fillStyle = color;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        //generiere random Kreise
        crc2.beginPath();
        for (let i: number = 25; i > 0; i--) {
        let x: number = Math.random() * crc2.canvas.width;
        let y: number = Math.random() * crc2.canvas.height;
        let radius: number = Math.random() * 100;
        let color: string = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        crc2.fillStyle = color;
        crc2.arc(x, y, radius, 0, 2 * Math.PI);
        crc2.fill();
    }

        //generiere random Dreiecke
        crc2.beginPath();
        for (let i: number = 25; i > 0; i--) {
        let startX: number = Math.random() * crc2.canvas.width;
        let startY: number = Math.random()  * crc2.canvas.height;
        let firstX: number = Math.random() * crc2.canvas.width;
        let firstY: number = Math.random()  * crc2.canvas.height;
        let secondX: number = Math.random() * crc2.canvas.width;
        let secondY: number = Math.random()  * crc2.canvas.height;
        crc2.moveTo(startX, startY);
        crc2.lineTo(firstX, firstY);
        crc2.lineTo(secondX, secondY);
        crc2.closePath();
        crc2.stroke();
        }
 
         // generiere random Rechtecke
        crc2.beginPath();
        for (let i: number = 25; i > 0; i--) {
         let x: number = Math.random() * crc2.canvas.width;
         let y: number = Math.random() * crc2.canvas.height;
         let width: number = Math.random() * 300;
         let height: number = Math.random() * 300;
         let color: string = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
         crc2.fillStyle = color;
         crc2.fillRect(x, y, width, height);
         crc2.closePath();
         }

         // Hintergrund mit Farb-Fade
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSLA(240, 100%, 50%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 50%, 0.5)");
        gradient.addColorStop(0.5, "HSLA(120, 100%, 50%, 0.5)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        let pattern: CanvasRenderingContext2D = document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 220;
        pattern.canvas.height = 440;

        for (let i: number = 25; i > 0; i--) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let width: number = Math.random() * 100;
            let height: number = Math.random() * 100;
            let color: string = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            crc2.fillStyle = color;
            crc2.fillRect(x, y, width, height);
        }
    }
}