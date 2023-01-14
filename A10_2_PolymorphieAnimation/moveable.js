var A10_2_PolymorphieAnimation;
(function (A10_2_PolymorphieAnimation) {
    class Moveable {
        position;
        velocity;
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new A10_2_PolymorphieAnimation.Vector(0, 0);
            this.velocity = new A10_2_PolymorphieAnimation.Vector(0, 0);
        }
        draw() {
            // 
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += A10_2_PolymorphieAnimation.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += A10_2_PolymorphieAnimation.crc2.canvas.height;
            if (this.position.x > A10_2_PolymorphieAnimation.crc2.canvas.width)
                this.position.x -= A10_2_PolymorphieAnimation.crc2.canvas.width;
            if (this.position.y > A10_2_PolymorphieAnimation.crc2.canvas.height)
                this.position.y -= A10_2_PolymorphieAnimation.crc2.canvas.height;
        }
    }
    A10_2_PolymorphieAnimation.Moveable = Moveable;
})(A10_2_PolymorphieAnimation || (A10_2_PolymorphieAnimation = {}));
//# sourceMappingURL=moveable.js.map