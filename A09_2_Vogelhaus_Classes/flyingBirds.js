var A09_2_Vogelhaus_Classes;
(function (A09_2_Vogelhaus_Classes) {
    class FlyingBirds {
        positon;
        velocity;
        type;
        size;
        constructor() {
            this.positon = new A09_2_Vogelhaus_Classes.Vector(0, 100);
            this.positon.random(0, 100);
            this.velocity = new A09_2_Vogelhaus_Classes.Vector(1, 200);
            this.velocity.random(20, 100);
        }
        move(_timeslice) {
            let offset = new A09_2_Vogelhaus_Classes.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.positon.add(offset);
            if (this.positon.x < 0)
                this.positon.x += A09_2_Vogelhaus_Classes.crc2.canvas.width;
            if (this.positon.y < 0)
                this.positon.y += A09_2_Vogelhaus_Classes.crc2.canvas.height;
            if (this.positon.x > A09_2_Vogelhaus_Classes.crc2.canvas.width)
                this.positon.x -= A09_2_Vogelhaus_Classes.crc2.canvas.width;
            if (this.positon.y > A09_2_Vogelhaus_Classes.crc2.canvas.height)
                this.positon.y -= A09_2_Vogelhaus_Classes.crc2.canvas.height;
        }
        drawFlyingBirds() {
            // let xRandomValue: number = Math.floor(Math.random() * (300 - 30));
            // let yRandomValue: number = Math.floor(Math.random() * (250 - 25));
            // let randomScale: number = Math.floor(Math.random() * (3));
            A09_2_Vogelhaus_Classes.crc2.save();
            A09_2_Vogelhaus_Classes.crc2.translate(this.positon.x, this.positon.x);
            A09_2_Vogelhaus_Classes.crc2.beginPath();
            //crc2.scale(randomScale, randomScale);
            A09_2_Vogelhaus_Classes.crc2.moveTo(0, 0);
            A09_2_Vogelhaus_Classes.crc2.bezierCurveTo(6, 6, 12, -12, 24, -3);
            A09_2_Vogelhaus_Classes.crc2.moveTo(0, 0);
            A09_2_Vogelhaus_Classes.crc2.bezierCurveTo(-6, -6, -12, -12, -24, -3);
            A09_2_Vogelhaus_Classes.crc2.strokeStyle = "black";
            A09_2_Vogelhaus_Classes.crc2.stroke();
            A09_2_Vogelhaus_Classes.crc2.closePath();
            A09_2_Vogelhaus_Classes.crc2.restore();
        }
    }
    A09_2_Vogelhaus_Classes.FlyingBirds = FlyingBirds;
})(A09_2_Vogelhaus_Classes || (A09_2_Vogelhaus_Classes = {}));
//# sourceMappingURL=flyingBirds.js.map