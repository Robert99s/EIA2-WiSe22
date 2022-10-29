/*
A02 ShoppingList
Robert Schindler MKB
Matrikel: 271342
Datum: 29.10.2022
Quellen: Gemeinsam mit Jonas Atzenhofer und Yannik König erarbeitet
*/
var A03_ShoppingList;
(function (A03_ShoppingList) {
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
        console.log("Item gekauft");
    }
    function editItem() {
        console.log("Item editieren");
    }
    function deleteItem() {
        console.log("Item löschen");
    }
})(A03_ShoppingList || (A03_ShoppingList = {}));
//# sourceMappingURL=script.js.map