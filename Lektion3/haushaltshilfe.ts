namespace A03_Haushaltshilfe {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("Start");
        let addGrocery: HTMLElement = <HTMLFieldSetElement>document.querySelector("button#addGrocery");
        let chores: HTMLElement = <HTMLFieldSetElement>document.querySelector("div#chores");
        let banking: HTMLElement = <HTMLFieldSetElement>document.querySelector("input#banking");
        let submit: HTMLElement = <HTMLFieldSetElement>document.querySelector("button#submit");
        addGrocery.addEventListener("click", handleChangeGrocery);
        chores.addEventListener("change", handleChangeChores);
        banking.addEventListener("input", handleChangeBanking);
        submit.addEventListener("click", submitOrder);
    }
    function handleChangeBanking(_event: Event): void {
        console.log("handleChangeBanking");
    }
    function submitOrder(): void {
        alert("Ihre Bestellung wurde abgeschickt.");
    }
    function handleChangeChores(_event: Event): void {
        console.log("handleChangeChores");
        let displayChores: HTMLElement = <HTMLElement>document.querySelector("div#displayChores");

        let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input.checkbox");
        console.log(inputs);
        const num = inputs.length;

        for (let i = 0; i < num; i++) {
            if (inputs[i].checked === true) {
                console.log(inputs[i].value + " ");
                //let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + inputs[i] + "']");
                //let price: number = Number(item.getAttribute("price"));
                displayChores.innerHTML += inputs[i].value + " " /*+ price */  + "<br>";
               
            }
        }
        //Versuch eines löschen spans in displayChores
        var span: HTMLElement = document.createElement("span");
        var txt: string = document.createTextNode("\u00D7");
        span.className = "closing";
        span.appendChild(txt);
        displayChores.appendChild(span);

        for (let x: number = 0; x < closing.length; x++) {
            closing[x].onclick = function (): void {
                var div: string = this.parentElement;
                div.style.display = "none";
            };
        }

    }
}

    //var checks = document.querySelectorAll("input[type=checkbox]");
    //console.log(checks.values);
    /*
    let chores: HTMLInputElement = <HTMLInputElement> document.querySelector("fieldset#household");
    //console.log(chores.value);

    let article: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#article");
    let unit: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#unit");
    let shop: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#shop");
    let amount: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");
    let displayGroceries: HTMLElement = <HTMLElement>document.querySelector("div#displayGroceries");
    let fd: FormData = new FormData();
    fd.append("Article", article.value);
    fd.append("Amount", amount.value);
    fd.append("Unit", unit.value);
    fd.append("Shop", shop.value);
    //console.log(Array.from(fd));  */
}
function handleChangeGrocery(_event: Event): void {
    console.log("handleChangeGrocery");
    let article: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#article");
    let unit: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#unit");
    let shop: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#shop");
    let amount: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");
    let displayGroceries: HTMLElement = <HTMLElement>document.querySelector("div#displayGroceries");
    let fd: FormData = new FormData();
    fd.append("Article", article.value);
    fd.append("Amount", amount.value);
    fd.append("Unit", unit.value);
    fd.append("Shop", shop.value);
    console.log(Array.from(fd));

    for (let obj of fd) {
        console.log(obj);
        let amount: number = Number(fd.get("Amount"));
        let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + obj[1] + "']");
        let price: number = Number(item.getAttribute("price"));
        displayGroceries.innerHTML += article.value + ", " + amount + " " + unit.value + ",  " + shop.value + ",  " + price + "€" + "<br>";
    }
}
