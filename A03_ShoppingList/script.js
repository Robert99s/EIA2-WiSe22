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
        document.querySelector("#addButton").addEventListener("click", addItem);
        document.querySelector("#bought").addEventListener("click", itemBought);
        document.querySelector("#editButton").addEventListener("click", editItem);
        document.querySelector("#deleteButton").addEventListener("click", deleteItem);
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