//Vorlage= Aufgabe 4 von Tanja Schuchter, da meine Aufgabe4 nicht funktioniert hat

namespace A05_Haushaltshilfe {
    window.addEventListener("load", handleLoad);

    let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");

    async function handleLoad(_event: Event): Promise<void> {
        let response: Response = await fetch("HaushaltshilfeData.json");
        let offer: string = await response.text(); // generiert das Offer als String
        let data: Data = JSON.parse(offer); // wandelt den Offer- String in ein JSon-Objekt um.
        generateContent(data);
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#tasks");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#mass");
        let submitbutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#publish");
        let deletebutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#delete");
        deletebutton.addEventListener("click", deleteData);
        submitbutton.addEventListener("click", submitData);
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayMass);

        displayOrder();
    }

    function deleteData(): void {

        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";
    }


    async function submitData(_event: Event): Promise<void> {
        console.log("submit Button");
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        await fetch("index.html?" + query.toString());
        _event.preventDefault();
        alert("your Data has been published!");
    }

    function handleChange(_event: Event): void {
        displayOrder();

    }

    export function displayOrder(): void {

        let price: number = 0;
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";

        let formData: FormData = new FormData(<HTMLFormElement>document.querySelector("form"));


        for (let entry of formData) {

            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
            let itemPrice: number = Number(item.getAttribute("price"));

            if (entry[0] == "Household") {
                order.innerHTML += item.value + "   " + " : € " + itemPrice.toFixed(2) + "<br>";


            }
            else if (entry[0] == "Shopping") {

                order.innerHTML += item.value + "   " + " : € " + itemPrice.toFixed(2) + "<br>";

            }

            price += itemPrice;
        }

        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        order.innerHTML += "get/submit money" + " : " + progress.value + "€";
        let gesamt: number = progress.value + price;
        console.log(gesamt);

        order.innerHTML += "<p><strong>Total : " + gesamt + "€";


    }


    function displayMass(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);
    }
}