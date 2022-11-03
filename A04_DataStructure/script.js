/*
A04 DataStructure
Robert Schindler MKB
Matrikel: 271342
Datum: 29.10.2022
Quellen: Jonas Atzenhofer und Yannik König
*/
var A04_DataStructure;
(function (A04_DataStructure) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.querySelector("#item").addEventListener("keydown", itemName);
        document.querySelector("#amount").addEventListener("keydown", amountNumber);
        document.querySelector("#comment").addEventListener("keydown", commentInfos);
        document.querySelector("#addButton").addEventListener("click", addItem);
        document.querySelector("#bought").addEventListener("click", itemBought);
        document.querySelector("#editButton").addEventListener("click", editItem);
        document.querySelector("#deleteButton").addEventListener("click", deleteItem);
    }
    function itemName() {
        console.log("Item eintragen");
    }
    function amountNumber() {
        console.log("Menge eintragen");
    }
    function commentInfos() {
        console.log("Maßeinheit und Zusatzinfos eintragen");
    }
    function addItem() {
        console.log("Item zur Liste hinzügen");
    }
    function itemBought() {
        console.log(A04_DataStructure.data);
    }
    function editItem() {
        console.log("Item editieren");
    }
    function deleteItem() {
        console.log("Item löschen");
    }
})(A04_DataStructure || (A04_DataStructure = {}));
//# sourceMappingURL=script.js.map