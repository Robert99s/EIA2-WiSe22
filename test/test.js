window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    crc2.fillStyle = "#FF0000";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    //Arc = Bogen 2 * PI ergibt ganzen Kreis | 1,5 3/4-Kreis | 1 Halbkreis
    crc2.beginPath();
    crc2.arc(50, 50, 20, 0, 1.5 * Math.PI);
    crc2.closePath();
    crc2.stroke();
    //Ellipse 
    crc2.beginPath();
    crc2.ellipse(200, 200, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
    crc2.stroke();
    //Dreieck moveTo wird nicht gezeichnet, lineTo wird gezeichnet
    crc2.beginPath();
    crc2.moveTo(500, 200);
    crc2.lineTo(600, 150);
    crc2.lineTo(700, 200);
    crc2.closePath();
    crc2.stroke();
    //Pfadobjekt
    let path = new Path2D();
    path.arc(60, 60, 50, 0, 2 * Math.PI);
    crc2.stroke(path);
    //Koordinatensystem ...?
    crc2.beginPath();
    crc2.moveTo(2.1, 10);
    crc2.lineTo(2.1, 50);
    crc2.moveTo(4.5, 10);
    crc2.lineTo(4.5, 50);
    crc2.moveTo(7.5, 10);
    crc2.lineTo(10.5, 50);
    crc2.stroke();
    // Koordinatensystem ...?
    crc2.beginPath();
    crc2.moveTo(20, 1);
    crc2.lineTo(20, 10);
    crc2.moveTo(45, 1);
    crc2.lineTo(45, 10);
    crc2.moveTo(75, 1);
    crc2.lineTo(105, 10);
    crc2.stroke();
    // Farbverlauf
    let gradient = crc2.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, "black");
    gradient.addColorStop(.5, "red");
    gradient.addColorStop(1, "gold");
    crc2.fillStyle = gradient;
    crc2.fillRect(500, 0, 200, 100);
    // Pattern
    /*
    let pattern: CanvasRenderingContext = document.createElement("canvas").getContext("2d");
    pattern.canvas.width = 40;
    pattern.canvas.height = 20;

    pattern.fillStyle = "#fec";
    pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
    pattern.moveTo(0, 10);
    pattern.lineTo(10, 10);
    pattern.lineTo(20, 0);
    pattern.lineTo(30, 0);
    pattern.lineTo(40, 10);
    pattern.lineTo(30, 20);
    pattern.lineTo(20, 20);
    pattern.lineTo(10, 10);
    pattern.stroke();

    crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
    crc2.fillRect(0, 0, canvas.width, canvas.height);
    */
}
//# sourceMappingURL=test.js.map