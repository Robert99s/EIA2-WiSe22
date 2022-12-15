namespace L09_OldMacDonaldFarm {
    

    export class Animal {
        name: string;
        species: string;
        food: string;
        sound: string;
        lyrics: string;
        amount: number;
    
        constructor(_name: string, _species: string, _food: string, _sound: string, _amount: number) {
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.sound = _sound;
            this.lyrics = "... he had a " + this.species + " E-I-E-I-O with a " + this.sound + " " + this.sound + " here and a " + this.sound + " " + this.sound + " there. Here a " + this.sound + " there a " + this.sound + " everywhere a " + this.sound + " " + this.sound + " old MacDonald had a Farm E-I-E-I-O.";
            this.amount = _amount;
        }
    
        eat(_supplies: Map<string, number>): void {
            let foodSupplies: number = _supplies.get(this.food)!;
            foodSupplies -= this.amount;
            _supplies.set(this.food, foodSupplies);
        }
    }
    
    }