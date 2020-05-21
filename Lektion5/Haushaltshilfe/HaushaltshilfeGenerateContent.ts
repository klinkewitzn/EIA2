//Vorlage= Aufgabe 4 von Tanja Schuchter, da meine Aufgabe4 nicht funktioniert hat

namespace A05_Haushaltshilfe {
    export interface Item {
        name: string;
        price: number;
    }

    export interface Data {
        [category: string]: Item[];
    }
    export interface Extras {
        name: string;
    }
    export function generateContent(_data: Data): void {

        for (let category in _data) {

            let items: Item[] = _data[category];

            let group: HTMLElement | null = null;
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

            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }


    function createHouse(_items: Item[], _category: string): HTMLElement | null {
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

    window.addEventListener("load", createShopping);
    window.addEventListener("load", createPayment);


    export function createShopping(): void {
        let Set: HTMLFieldSetElement = <HTMLFieldSetElement>document.querySelector("fieldset#Shopping");
        let Select: HTMLSelectElement = <HTMLSelectElement>document.createElement("select");
        Select.setAttribute("class", "Shopart");
        let Option: HTMLOptionElement = <HTMLOptionElement>document.createElement("option");
        Select.innerHTML = "<option>" + Shop[0] + "<option>" + Shop[1] + "<option>" + Shop[2] + "<option>" + Shop[3] + "<option>" + Shop[4] + "<option>" + Shop[5];
        Set.appendChild(Select);
        Select.appendChild(Option);

    }

    export function createPayment(): void {
        let Mony: HTMLFieldSetElement = <HTMLFieldSetElement>document.querySelector("fieldset#Money");
        let Select: HTMLSelectElement = <HTMLSelectElement>document.createElement("select");
        Select.setAttribute("class", "Methode");
        let Option: HTMLOptionElement = <HTMLOptionElement>document.createElement("option");
        Select.innerHTML = "<option>" + Payment[0] + "<option>" + Payment[1] + "<option>" + Payment[2] + "<option>" + Payment[3] + "<option>" + Payment[4];
        Mony.appendChild(Select);
        Select.appendChild(Option);

    }

    function createGroceries(_items: Item[], _category: string): HTMLElement | null {

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