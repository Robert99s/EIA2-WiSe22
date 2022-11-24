namespace A08_GenerativeKunst {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {

        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        crc2.fillStyle = "#00FF00";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        crc2.beginPath();
        for (let i: number = 50; i > 0; i--);
        let x: number = random.math();
        let y: number = random.math();
    }
}