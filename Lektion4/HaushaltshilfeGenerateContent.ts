namespace A04_Haushaltshilfe {
    export function generateContent(_data: Data): void {
        for (let category in _data) {
            let items: Item[] = _data[category];

            let group: HTMLElement | null = null;
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

            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }

    function createSelect(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");
        for (let item of _items) {
            let select: HTMLSelectElement = document.createElement("select");
            select.setAttribute("price", item.price.toFixed(2));
            select.value = item.name;
            select.name = _category;
            select.id = item.name;

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;

            group.appendChild(select);
            group.appendChild(label);
        }
        return group;
    }

    function createRadio(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");
        for (let item of _items) {
           /*  let radio: HTMLInputElement = document.createElement("radio");
            radio.type = "checkbox";
            radio.setAttribute("price", "");
            radio.value = item.name;
            radio.name = _category;
            radio.id = item.name; */

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;

         /*    group.appendChild(radio); */
            group.appendChild(label);
        }
        return group;
    }

    function createMultiple(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");
        for (let item of _items) {
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;

            group.appendChild(checkbox);
            group.appendChild(label);
        }
        return group;
    }
}