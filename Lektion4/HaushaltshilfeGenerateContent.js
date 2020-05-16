"use strict";
var A04_Haushaltshilfe;
(function (A04_Haushaltshilfe) {
    function generateContent(_data) {
        for (let category in _data) {
            let items = _data[category];
            let group = null;
            switch (category) {
                case "article":
                    group = createSelect(items, category);
                    break;
                case "chores":
                    group = createMultiple(items, category);
                    break;
                case "paymentOptions":
                    group = createRadio(items, category);
                    break;
                default:
                    break;
            }
            let fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    A04_Haushaltshilfe.generateContent = generateContent;
    function createSelect(_items, _category) {
        let group = document.createElement("div");
        for (let item of _items) {
            let select = document.createElement("select");
            select.setAttribute("price", item.price.toFixed(2));
            select.value = item.name;
            select.name = _category;
            select.id = item.name;
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(select);
            group.appendChild(label);
        }
        return group;
    }
    function createRadio(_items, _category) {
        let group = document.createElement("div");
        for (let item of _items) {
            let radio = document.createElement("radio");
            radio.type = "checkbox";
            radio.setAttribute("price", "");
            radio.value = item.name;
            radio.name = _category;
            radio.id = item.name;
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(radio);
            group.appendChild(label);
        }
        return group;
    }
    function createMultiple(_items, _category) {
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
})(A04_Haushaltshilfe || (A04_Haushaltshilfe = {}));
//# sourceMappingURL=HaushaltshilfeGenerateContent.js.map