var A09_2_Vogelhaus_Classes;
(function (A09_2_Vogelhaus_Classes) {
    class Snowflake {
        positon;
        velocity;
        type;
        size;
        constructor(_size) {
            console.log("ConstructorSnow");
            this.positon = new A09_2_Vogelhaus_Classes.Vector(0, 0);
            this.positon.random(0, 1500);
            this.velocity = new A09_2_Vogelhaus_Classes.Vector(0, 0);
            this.velocity.random(20, 200);
            this.size = _size;
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
        draw() {
            A09_2_Vogelhaus_Classes.crc2.beginPath();
            A09_2_Vogelhaus_Classes.crc2.save();
            A09_2_Vogelhaus_Classes.crc2.translate(this.positon.x, this.positon.y);
            A09_2_Vogelhaus_Classes.crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            A09_2_Vogelhaus_Classes.crc2.fillStyle = " white";
            A09_2_Vogelhaus_Classes.crc2.closePath();
            A09_2_Vogelhaus_Classes.crc2.fill();
            A09_2_Vogelhaus_Classes.crc2.restore();
        }
    }
    A09_2_Vogelhaus_Classes.Snowflake = Snowflake;
})(A09_2_Vogelhaus_Classes || (A09_2_Vogelhaus_Classes = {}));
//# sourceMappingURL=snowflake.js.map