/*
A09_1_OldMacDonaldsFarm
Robert Schindler MKB
Matrikel: 271342
Datum: 26.11.2022
Quellen: L08
*/

namespace A09_1_OldMacDonaldsFarm {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {

        class Animal {
            name: string;
            specie: string;
            food: Food;
            amount: number;
            sounds: string;

        constructor(_name: string, _specie: string, _food: Food, _amount: number, _sounds: string) {
            this.name = _name;
            this.specie = _specie;
            this.food = _food;
            this.amount = _amount;
            this.sounds = _sounds;

            
        }
    }

        class Food {
            type: string;
            amount: number;

        constructor(_type: string, _amount: number) {
            this.type = _type;
            this.amount = _amount;
        }
    }
    }
}