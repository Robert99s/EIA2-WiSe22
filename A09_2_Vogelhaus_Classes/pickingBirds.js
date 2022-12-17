/*
namespace A09_2_Vogelhaus_Classes {

    Habe ich leider nicht hinbekommen, dass es funktioniert, daher grün eingefärbt, dass der Rest funktioniert.

    export class PickingBirds {
        position: Vector;
        velocity: Vector;
        scale: Vector;
        eating: boolean;

        constructor(_position: Vector) {
            this.position = _position;
            this.scale = new Vector(0, 0);
            this.scale.set(this.position.y / 500, this.position.y / 500);
            this.velocity = new Vector(0, 0);
            this.velocity.random(50, 100);
            

            let values: boolean[] = [true, false];
            this.eating = values[Math.floor(Math.random() * values.length)];
        }

        drawPickingBirds(): void {

            if (this.eating != true) {
                 //Körper
                 crc2.save();
                 crc2.translate(this.position.x, this.position.y);
                 crc2.scale(this.scale.x, this.scale.y);
                 crc2.fillStyle = "#5ea3b3";
                 crc2.beginPath();
                 crc2.arc(60, 145, 12, 0, 2 * Math.PI);
                 crc2.fill();
                 crc2.beginPath();
                 crc2.arc(75, 155, 16, 0, 2 * Math.PI);
                 crc2.fill();
    
                //Schnabel
                 crc2.fillStyle = "black";
                 crc2.beginPath();
                 crc2.moveTo(58, 156);
                 crc2.lineTo(42, 160);
                 crc2.lineTo(49, 142);
                 crc2.fill();
    
                //Beine
                 crc2.strokeStyle = "black";
                 crc2.moveTo(75, 171);
                 crc2.lineTo(70, 181);
                 crc2.moveTo(75, 171);
                 crc2.lineTo(80, 181);
                 crc2.stroke();
    
                //Auge
                 crc2.fillStyle = "black";
                 crc2.beginPath();
                 crc2.arc(58, 141, 2, 0, 2 * Math.PI);
                 crc2.fill();
                
                 crc2.closePath();
    
                 crc2.restore();
            }

            if (this.eating == true) {

                //Körper
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                crc2.scale(this.scale.x, this.scale.y);
                crc2.fillStyle = "#5ea3b3";
                crc2.beginPath();
                crc2.arc(60, 135, 12, 0, 2 * Math.PI);
                crc2.fill();
                crc2.beginPath();
                crc2.arc(75, 155, 16, 0, 2 * Math.PI);
                crc2.fill();
    
                //Schnabel
                crc2.fillStyle = "black";
                crc2.beginPath();
                crc2.moveTo(49, 140);
                crc2.lineTo(35, 135);
                crc2.lineTo(49, 130);
                crc2.fill();
    
                //Beine
                crc2.strokeStyle = "black";
                crc2.moveTo(75, 171);
                crc2.lineTo(70, 181);
                crc2.moveTo(75, 171);
                crc2.lineTo(80, 181);
                crc2.stroke();
    
                //Auge
                crc2.fillStyle = "black";
                crc2.beginPath();
                crc2.arc(58, 131, 2, 0, 2 * Math.PI);
                crc2.fill();
                
                crc2.closePath();
    
                crc2.restore();
            }
        }


    eat(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            this.eating = !this.eating;

            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
        }
    }
}
*/ 
//# sourceMappingURL=pickingBirds.js.map