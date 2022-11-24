var A08_GenerativeKunst;
(function (A08_GenerativeKunst) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        crc2.fillStyle = "#00FF00";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.beginPath();
        for (let i = 50; i > 0; i--)
            ;
        let x = random.math();
        let y = random.math();
    }
})(A08_GenerativeKunst || (A08_GenerativeKunst = {}));
//# sourceMappingURL=script.js.map