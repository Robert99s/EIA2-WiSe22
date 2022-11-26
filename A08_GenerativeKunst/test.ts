namespace A08_GenerativeKunst {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {

        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        crc2.fillStyle = "#00FF00";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

// generiere unterschiedlichste Dreiecke
        crc2.beginPath();
        for (let i: number = 50; i > 0; i--) {
        let x: number = Math.random() * crc2.canvas.width;
        let y: number = Math.random()  * crc2.canvas.height;
        crc2.arc(x, y, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        }

// generiere unterschiedliche Rechtecke
        crc2.beginPath();
        for (let i: number = 50; i > 0; i--) {
        let x: number = Math.random() * crc2.canvas.width;
        let y: number = Math.random() * crc2.canvas.height;
        let width: number = Math.random() * 100;
        let height: number = Math.random() * 100;
        let color: string = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
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



        crc2.beginPath();
        for (let i: number = 50; i > 0; i--) {
        let x: number = Math.random() * crc2.canvas.width;
        let y: number = Math.random() * crc2.canvas.height;
        let radius: number = Math.random() * 50;
        let color: string = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        crc2.fillStyle = color;
        crc2.arc(x, y, radius, 0, 2 * Math.PI);
        crc2.fill();
    }

        let pattern: CanvasRenderingContext2D = document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 80;
        pattern.canvas.height = 40;

        //create a random pattern with 200 circles
        pattern.fillStyle = "black";
        pattern.strokeStyle = "black";
        pattern.lineWidth = 5;
        pattern.beginPath();
        for (let i: number = 0; i < 200; i++) {
        pattern.arc(Math.random() * pattern.canvas.width, Math.random() * pattern.canvas.height, 10, 0, 2 * Math.PI);
    }
        pattern.closePath();
        pattern.fill();
        pattern.stroke();

    
        for (let i: number = 50; i > 0; i--) {
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