/*
A02 ShoppingList
Robert Schindler MKB
Matrikel: 271342
Datum: 29.10.2022
Quellen: Gemeinsam mit Jonas Atzenhofer und Yannik König erarbeitet
*/

namespace A03_ShoppingList {
    window.addEventListener("load", handleLoad);
    
    function handleLoad(): void {
        document.querySelector("#addButton").addEventListener("click", addItem);
        document.querySelector("#bought").addEventListener("click", itemBought);
        document.querySelector("#editButton").addEventListener("click", editItem);
        document.querySelector("#deleteButton").addEventListener("click", deleteItem);
    }

    function addItem(): void {
        console.log("Item zur Liste hinzügen"); 
    }

    function itemBought(): void {
        console.log("Item gekauft");   
    }

    function editItem(): void {
        console.log("Item editieren");
    }

    function deleteItem(): void {
        console.log("Item löschen");
        
    }
}