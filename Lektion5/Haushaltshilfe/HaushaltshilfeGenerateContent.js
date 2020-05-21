"use strict";
//Vorlage= Aufgabe 4 von Tanja Schuchter, da meine Aufgabe4 nicht funktioniert hat
var A05_Haushaltshilfe;
(function (A05_Haushaltshilfe) {
    function generateContent(_data) {
        for (let category in _data) {
            let items = _data[category];
            let group = null;
            switch (category) {
                case "Household":
                    group = createHouse(items, category);
                    break;
                case "Shopping":
                    group = createGroceries(items, category);
                    break;
                default:
                    break;
            }
            let fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    A05_Haushaltshilfe.generateContent = generateContent;
    function createHouse(_items, _category) {
        let group = document.createElement("div");
        for (let item of _items) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);
        }
        return group;
    }
    window.addEventListener("load", createShopping);
    window.addEventListener("load", createPayment);
    function createShopping() {
        let Set = document.querySelector("fieldset#Shopping");
        let Select = document.createElement("select");
        Select.setAttribute("class", "Shopart");
        let Option = document.createElement("option");
        Select.innerHTML = "<option>" + A05_Haushaltshilfe.Shop[0] + "<option>" + A05_Haushaltshilfe.Shop[1] + "<option>" + A05_Haushaltshilfe.Shop[2] + "<option>" + A05_Haushaltshilfe.Shop[3] + "<option>" + A05_Haushaltshilfe.Shop[4] + "<option>" + A05_Haushaltshilfe.Shop[5];
        Set.appendChild(Select);
        Select.appendChild(Option);
    }
    A05_Haushaltshilfe.createShopping = createShopping;
    function createPayment() {
        let Mony = document.querySelector("fieldset#Money");
        let Select = document.createElement("select");
        Select.setAttribute("class", "Methode");
        let Option = document.createElement("option");
        Select.innerHTML = "<option>" + A05_Haushaltshilfe.Payment[0] + "<option>" + A05_Haushaltshilfe.Payment[1] + "<option>" + A05_Haushaltshilfe.Payment[2] + "<option>" + A05_Haushaltshilfe.Payment[3] + "<option>" + A05_Haushaltshilfe.Payment[4];
        Mony.appendChild(Select);
        Select.appendChild(Option);
    }
    A05_Haushaltshilfe.createPayment = createPayment;
    function createGroceries(_items, _category) {
        let group = document.createElement("div");
        for (let item of _items) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);
        }
        return group;
    }
})(A05_Haushaltshilfe || (A05_Haushaltshilfe = {}));
//# sourceMappingURL=HaushaltshilfeGenerateContent.js.map