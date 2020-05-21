namespace L04_CocktailBar {

    export interface Item {
        name: string;
        price: number;

    }

    export interface Data {

        [category: string]: Item[];
    }

    export function generateContent(_data: Data): void {
        //console.log(_data);

        for (let category in _data) {

            let items: Item[] = _data[category];

            let group: HTMLElement | null = null; // diese Variable dürfte auch Null den Wert null angeben
            switch (category) {
                case "Drink":
                    group = createSelect(items, category);
                    break;
                case "Extras":
                    group = createSingle(items, category);
                    break;

                case "Container":
                    group = createMultiple(items, category);
                    break;
                default:
                    break;
            }
            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category); //HTML FieldSet oder Null (der senkrechte Strich heißt oder)
            if (fieldset && group) // wenn das fieldset und (&&) die gruppe definiert ist, dann in eine Familie zusammenbringen
                fieldset.appendChild(group);
        }

    }

    function createSelect(_items: Item[], _category: string): HTMLElement | null {

        let group: HTMLSelectElement = document.createElement("select");
        group.name = _category;

        for (let item of _items) {
            let option: HTMLOptionElement = document.createElement("option");
            option.setAttribute("price", item.price.toFixed(2));
            option.value = option.textContent = item.name;
            option.id = item.name;
            group.appendChild(option);

        }
        return group;
    }


    function createSingle(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLSpanElement = document.createElement("span");
        for (let item of _items) {
            let radio: HTMLInputElement = document.createElement("input");
            radio.type = "radio";
            radio.setAttribute ("price", item.price.toFixed(2));
            radio.value = item.name;
            radio.name = _category;
            radio.id = item.name;
           
            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(radio);
            group.appendChild(label);

        }
        return group; 
    }


    function createMultiple(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLSpanElement = document.createElement("span");


        for (let item of _items) {
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox"; // das Input Element checkbox bekommt jetzt den Type checkbox.
            checkbox.setAttribute("price", item.price.toFixed(2)); // für die Checkbox wird das Attribut Price "erstellt" der Wert ist der Preis des je aktuellen items.
            // price ist ein string das toFixed bewirkt, dass der string in eine Zahl umgewandelt wird und zwei Nachkommastellen ausgibt.
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);
        }
        return group; // Liefert gruppe zurück
    }

}