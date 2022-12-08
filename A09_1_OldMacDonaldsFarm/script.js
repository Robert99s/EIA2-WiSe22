/*
A09_1_OldMacDonaldsFarm
Robert Schindler MKB
Matrikel: 271342
Datum: 26.11.2022
Quellen: L08
*/
var A09_1_OldMacDonaldsFarm;
(function (A09_1_OldMacDonaldsFarm) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        class Animal {
            name;
            specie;
            food;
            amount;
            sounds;
            constructor(_name, _specie, _food, _amount, _sounds) {
                this.name = _name;
                this.specie = _specie;
                this.food = _food;
                this.amount = _amount;
                this.sounds = _sounds;
            }
        }
        class Food {
            type;
            amount;
            constructor(_type, _amount) {
                this.type = _type;
                this.amount = _amount;
            }
        }
    }
})(A09_1_OldMacDonaldsFarm || (A09_1_OldMacDonaldsFarm = {}));
//# sourceMappingURL=script.js.map