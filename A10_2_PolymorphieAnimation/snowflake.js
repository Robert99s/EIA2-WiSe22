var A10_2_PolymorphieAnimation;
(function (A10_2_PolymorphieAnimation) {
    class Snowflake extends A10_2_PolymorphieAnimation.Moveable {
        /*positon: Vector;
        velocity: Vector;
        type: number;*/
        size;
        constructor(_size, _position) {
            super(_position);
            let randomXStartPosition = Math.random() * document.getElementById("canvas").clientWidth;
            let randomYStartPosition = Math.random() * document.getElementById("canvas").clientHeight;
            if (_position)
                this.position = _position.copy();
            else
                this.position = new A10_2_PolymorphieAnimation.Vector(randomXStartPosition, randomYStartPosition);
            this.velocity = new A10_2_PolymorphieAnimation.Vector(1, _size);
            //this.velocity.random(0, 100);
            this.size = _size;
            /*console.log("ConstructorSnow");
            this.positon = new Vector(0, 0);
            this.positon.random(0, 1500);
            this.velocity = new Vector(0, 0);
            this.velocity.random(20, 200);
            this.size = _size;*/
        }
        move(_timeslice) {
            super.move(0.1);
        }
        /*move(_timeslice: number): void {
           
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.positon.add(offset);

            if (this.positon.x < 0)
            this.positon.x += crc2.canvas.width;
            if (this.positon.y < 0)
            this.positon.y += crc2.canvas.height;
            if (this.positon.x > crc2.canvas.width)
            this.positon.x -= crc2.canvas.width;
            if (this.positon.y > crc2.canvas.height)
            this.positon.y -= crc2.canvas.height;
            }*/
        draw() {
            A10_2_PolymorphieAnimation.crc2.beginPath();
            A10_2_PolymorphieAnimation.crc2.save();
            A10_2_PolymorphieAnimation.crc2.translate(this.position.x, this.position.y);
            A10_2_PolymorphieAnimation.crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            A10_2_PolymorphieAnimation.crc2.fillStyle = " white";
            A10_2_PolymorphieAnimation.crc2.closePath();
            A10_2_PolymorphieAnimation.crc2.fill();
            A10_2_PolymorphieAnimation.crc2.restore();
        }
    }
    A10_2_PolymorphieAnimation.Snowflake = Snowflake;
})(A10_2_PolymorphieAnimation || (A10_2_PolymorphieAnimation = {}));
//# sourceMappingURL=snowflake.js.map