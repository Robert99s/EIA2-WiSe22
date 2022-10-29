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
        document.querySelector("#item").addEventListener("keydown", itemName);
        document.querySelector("#amount").addEventListener("keydown", amountNumber);
        document.querySelector("#comment").addEventListener("keydown", commentInfos);
        document.querySelector("#addButton").addEventListener("click", addItem);
        document.querySelector("#bought").addEventListener("click", itemBought);
        document.querySelector("#editButton").addEventListener("click", editItem);
        document.querySelector("#deleteButton").addEventListener("click", deleteItem);
    }

    function itemName(): void {
        console.log("Item eintragen");
    }

    function amountNumber(): void {
        console.log("Menge eintragen");
    }

    function commentInfos(): void {
        console.log("Maßeinheit und Zusatzinfos eintragen");
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