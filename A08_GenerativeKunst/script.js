/*
A08_GenerativeKunst
Robert Schindler MKB
Matrikel: 271342
Datum: 26.11.2022
Quellen: L08
*/
var A08_GenerativeKunst;
(function (A08_GenerativeKunst) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        // Zufällige Farbe erstellen
        let rot = (Math.floor(Math.random() * 255));
        let gruen = (Math.floor(Math.random() * 255));
        let blau = (Math.floor(Math.random() * 255));
        let color = "rgb(" + rot + ", " + gruen + "," + blau + ")";
        // Canvas-Element deklarieren
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        // Generative Kunst auf dem gesamten Bildschirm darstellen
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Canvas Hintergrundfarbe und Startpunkte festlegen
        crc2.fillStyle = color;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        //generiere random Kreise
        crc2.beginPath();
        for (let i = 25; i > 0; i--) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            let radius = Math.random() * 100;
            let color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            crc2.fillStyle = color;
            crc2.arc(x, y, radius, 0, 2 * Math.PI);
            crc2.fill();
        }
        //generiere random Dreiecke
        crc2.beginPath();
        for (let i = 25; i > 0; i--) {
            let startX = Math.random() * crc2.canvas.width;
            let startY = Math.random() * crc2.canvas.height;
            let firstX = Math.random() * crc2.canvas.width;
            let firstY = Math.random() * crc2.canvas.height;
            let secondX = Math.random() * crc2.canvas.width;
            let secondY = Math.random() * crc2.canvas.height;
            crc2.moveTo(startX, startY);
            crc2.lineTo(firstX, firstY);
            crc2.lineTo(secondX, secondY);
            crc2.closePath();
            crc2.stroke();
        }
        // generiere random Rechtecke
        crc2.beginPath();
        for (let i = 25; i > 0; i--) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            let width = Math.random() * 300;
            let height = Math.random() * 300;
            let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
            crc2.fillStyle = color;
            crc2.fillRect(x, y, width, height);
            crc2.closePath();
        }
        // Hintergrund mit Farb-Fade
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSLA(240, 100%, 50%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 50%, 0.5)");
        gradient.addColorStop(0.5, "HSLA(120, 100%, 50%, 0.5)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        let pattern = document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 220;
        pattern.canvas.height = 440;
        for (let i = 25; i > 0; i--) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let width = Math.random() * 100;
            let height = Math.random() * 100;
            let color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            crc2.fillStyle = color;
            crc2.fillRect(x, y, width, height);
        }
    }
})(A08_GenerativeKunst || (A08_GenerativeKunst = {}));
//# sourceMappingURL=script.js.map