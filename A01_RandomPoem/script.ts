/*
Aufgabe: 1 Zufallsgedicht
Name: Robert Schindler
Matrikel 271342
Datum: 13.10.2022
Quellen: Gemeinsam mit Henning Pils erarbeitet
*/

namespace RandomPoem {
    let subjects: String [] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let predicates: String [] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects: String [] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

    for (let index: number = 7; index >= 1; index--) {
        console.log(getVerse(subjects, predicates, objects));
    }
    // Im Nachgang bemerkt, dass durch index = 7 in der Konsole "undefined undefined undefined" steht, da alle Wörter durch splice verschwunden sind und die Schleife noch einmal durchläuft.
        
    function getVerse(_subjects: string , _predicates: string, _objects: string): string {

            let verse: string = "";
            let subjectsNumber: number = Math.floor(Math.random() * _subjects.length);
            let predicatesNumber: number = Math.floor(Math.random() * _predicates.length);
            let objectsNumber: number = Math.floor(Math.random() * _objects.length);
                     
            verse = _subjects[subjectsNumber] + " " + _predicates[predicatesNumber] + " " + _objects[objectsNumber];
            _subjects.splice(subjectsNumber, 1);
            _predicates.splice(predicatesNumber, 1);
            _objects.splice(objectsNumber, 1);
            return verse;
        }
}
