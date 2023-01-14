namespace A10_2_PolymorphieAnimation {

    export class Snowflake extends Moveable {

        /*positon: Vector;
        velocity: Vector;
        type: number;*/
        size: number;
      
        
        constructor(_size: number, _position?: Vector) {
            super(_position);

            let randomXStartPosition: number = Math.random() * document.getElementById("canvas").clientWidth;
            let randomYStartPosition: number = Math.random() * document.getElementById("canvas").clientHeight;
            if (_position)
            this.position = _position.copy();
            else
            this.position = new Vector(randomXStartPosition, randomYStartPosition);

            this.velocity = new Vector(1, _size);
            //this.velocity.random(0, 100);

            this.size = _size;
            /*console.log("ConstructorSnow");
            this.positon = new Vector(0, 0);
            this.positon.random(0, 1500);
            this.velocity = new Vector(0, 0);
            this.velocity.random(20, 200);
            this.size = _size;*/
            }

        move(_timeslice: number): void {
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

        draw(): void {
        
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            crc2.fillStyle = " white";
            crc2.closePath();
            crc2.fill();
            crc2.restore();
        }
    }
}