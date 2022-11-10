/*
A05 EinkaufslisteClient
Robert Schindler MKB
Matrikel: 271342
Datum: 10.11.2022
Quellen: Yannik König!, Jonas Atzenhofer, Henning Pils und Tristan Broghammer
*/
var A05_EinkaufslisteClient;
(function (A05_EinkaufslisteClient) {
    let date = new Date();
    let dateWithoutTime = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
    let itemNumber = 0;
    window.addEventListener("load", handleLoad);
    async function handleLoad(_event) {
        let addButton = document.querySelector("button#add");
        addButton.addEventListener("click", itemAdd);
        let response = await fetch("https://robert99s.github.io/EIA2-WiSe22/A05_EinkaufslisteClient/data.json");
        let item = await response.text();
        let data = JSON.parse(item);
        generateExistingItem(data);
    }
    function generateExistingItem(_data) {
        let values = _data[1];
        console.log(values[0].newItem);
        let newItem = values[0].newItem;
        let amount = values[0].amount;
        let comment = values[0].comment;
        let list = document.getElementById("list");
        let newDiv = document.createElement("div");
        let newInput = document.createElement("input");
        let divItemData = document.createElement("div");
        createInput(newInput, newDiv);
        createDiv(newDiv);
        createItemDiv(divItemData, newDiv);
        addElement(divItemData);
        addElement(divItemData, newItem.toString());
        addElement(divItemData, amount.toString());
        addElement(divItemData, comment.toString());
        addElement(divItemData, dateWithoutTime);
        addButton(newDiv, "edit");
        addButton(newDiv, "delete");
        list.appendChild(newDiv);
    }
    async function itemAdd() {
        let formData = new FormData(document.querySelector("form"));
        let newItem = formData.get("newItem");
        let amount = formData.get("amount");
        let comment = formData.get("comment");
        let list = document.getElementById("list");
        let newDiv = document.createElement("div");
        let newInput = document.createElement("input");
        let divItemData = document.createElement("div");
        let bought = false;
        itemNumber++;
        createInput(newInput, newDiv);
        createDiv(newDiv);
        createItemDiv(divItemData, newDiv);
        addElement(divItemData);
        addElement(divItemData, newItem.toString());
        addElement(divItemData, amount.toString());
        addElement(divItemData, comment.toString());
        addElement(divItemData, dateWithoutTime);
        addButton(newDiv, "edit");
        addButton(newDiv, "delete");
        list.appendChild(newDiv);
        let query = new URLSearchParams(formData);
        await fetch("index.html" + "?" + query.toString());
        console.log(query.toString());
        alert("Item is added to the list");
    }
    function addElement(_parent, _content) {
        let newItemField = document.createElement("p");
        _parent.appendChild(newItemField);
        newItemField.setAttribute("class", "ItemDataFont");
        if (_content) {
            newItemField.innerHTML = _content;
        }
    }
    function addButton(_parent, _identify) {
        let newButton = document.createElement("button");
        _parent.appendChild(newButton);
        newButton.setAttribute("class", _identify);
        newButton.setAttribute("id", _identify + itemNumber);
        newButton.setAttribute("type", "button");
        newButton.innerHTML = _identify;
        switch (_identify) {
            case "edit":
                newButton.addEventListener("click", editItem);
                break;
            case "delete":
                newButton.addEventListener("click", deleteItem);
            default:
                break;
        }
    }
    function createDiv(_element) {
        _element.setAttribute("class", "lister");
        _element.setAttribute("id", "lister" + itemNumber);
    }
    function createInput(_element, _parent) {
        _parent.appendChild(_element);
        _element.setAttribute("class", "bought");
        _element.setAttribute("id", "bought" + itemNumber);
        _element.setAttribute("type", "checkbox");
        _element.addEventListener("change", itemBought);
    }
    function createItemDiv(_element, _parent) {
        _parent.appendChild(_element);
        _element.setAttribute("class", "ItemData");
        _element.setAttribute("id", "ItemData" + itemNumber);
    }
    function itemBought(_event) {
        let trigger = _event.target.id;
        let triggerNum = trigger.replace(/\D/g, "");
        let identifier = parseInt(triggerNum);
        console.log("gekauft");
    }
    function editItem(_event) {
        let trigger = _event.target.id;
        let triggerNumber = trigger.replace(/\D/g, "");
        console.log("editieren");
    }
    function deleteItem(_event) {
        let trigger = _event.target.id;
        let triggerNum = trigger.replace(/\D/g, "");
        let identifier = parseInt(triggerNum);
        let list = document.getElementById("list");
        let remIt = document.getElementById("lister" + identifier);
        list.removeChild(remIt);
    }
})(A05_EinkaufslisteClient || (A05_EinkaufslisteClient = {}));
//# sourceMappingURL=script.js.map