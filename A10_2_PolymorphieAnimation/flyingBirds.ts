namespace A10_2_PolymorphieAnimation {
    
    export class FlyingBirds extends Moveable {

        size: number;

        constructor(_size: number, _position?: Vector) {
        super(_position);

        if (_position)
        this.position = _position.copy();
    else
        this.position = new Vector(0, 100);

        this.velocity = new Vector(1, 200);
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
    
        move(_timeslice: number): void {
            if (this.position.y > 667)
            this.position.y = crc2.canvas.height;
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

        drawFlyingBirds(): void {  

                // let xRandomValue: number = Math.floor(Math.random() * (300 - 30));
                // let yRandomValue: number = Math.floor(Math.random() * (250 - 25));
                // let randomScale: number = Math.floor(Math.random() * (3));
                
                crc2.save();
                crc2.translate(this.position.x, this.position.x);
                crc2.beginPath();
                //crc2.scale(randomScale, randomScale);
                crc2.moveTo(0, 0);
                crc2.bezierCurveTo(6, 6, 12, -12, 24, -3);
                crc2.moveTo(0, 0);
                crc2.bezierCurveTo(-6, -6, -12, -12, -24, -3);
                crc2.strokeStyle = "black";
                crc2.stroke();
                crc2.closePath();
                crc2.restore();                       
                }
            }
        }