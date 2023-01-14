var A10_2_PolymorphieAnimation;
(function (A10_2_PolymorphieAnimation) {
    class FlyingBirds extends A10_2_PolymorphieAnimation.Moveable {
        size;
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.position = new A10_2_PolymorphieAnimation.Vector(0, 100);
            this.velocity = new A10_2_PolymorphieAnimation.Vector(1, 200);
            this.velocity.random(20, 100);
            this.size = _size;
        }
        /*positon: Vector;
        velocity: Vector;
        type: number;
        size: number;*/
        /*constructor() {
           
            this.positon = new Vector(0, 100);
            this.positon.random(0, 100);
            this.velocity = new Vector(1, 200);
            this.velocity.random(20, 100);
        }*/
        move(_timeslice) {
            if (this.position.y > 667)
                this.position.y = A10_2_PolymorphieAnimation.crc2.canvas.height;
            super.move(0.02);
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
        drawFlyingBirds() {
            // let xRandomValue: number = Math.floor(Math.random() * (300 - 30));
            // let yRandomValue: number = Math.floor(Math.random() * (250 - 25));
            // let randomScale: number = Math.floor(Math.random() * (3));
            A10_2_PolymorphieAnimation.crc2.save();
            A10_2_PolymorphieAnimation.crc2.translate(this.position.x, this.position.x);
            A10_2_PolymorphieAnimation.crc2.beginPath();
            //crc2.scale(randomScale, randomScale);
            A10_2_PolymorphieAnimation.crc2.moveTo(0, 0);
            A10_2_PolymorphieAnimation.crc2.bezierCurveTo(6, 6, 12, -12, 24, -3);
            A10_2_PolymorphieAnimation.crc2.moveTo(0, 0);
            A10_2_PolymorphieAnimation.crc2.bezierCurveTo(-6, -6, -12, -12, -24, -3);
            A10_2_PolymorphieAnimation.crc2.strokeStyle = "black";
            A10_2_PolymorphieAnimation.crc2.stroke();
            A10_2_PolymorphieAnimation.crc2.closePath();
            A10_2_PolymorphieAnimation.crc2.restore();
        }
    }
    A10_2_PolymorphieAnimation.FlyingBirds = FlyingBirds;
})(A10_2_PolymorphieAnimation || (A10_2_PolymorphieAnimation = {}));
//# sourceMappingURL=flyingBirds.js.map