"use strict";
var A03_Haushaltshilfe;
(function (A03_Haushaltshilfe) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        /* let addGrocery: HTMLElement = <HTMLFieldSetElement>document.querySelector("button#addGrocery"); */
        let chores = document.querySelector("div#chores");
        let banking = document.querySelector("input#banking");
        let submit = document.querySelector("button#submit");
        /*  addGrocery.addEventListener("click", handleChangeGrocery); */
        chores.addEventListener("change", handleChangeChores);
        banking.addEventListener("input", handleChangeBanking);
        submit.addEventListener("click", submitOrder);
    }
    function handleChangeBanking(_event) {
        console.log("handleChangeBanking");
        let target = _event.target;
        console.log(target.value);
        let displayBanking = document.querySelector("div#displayBanking");
        displayBanking.innerHTML = "withdraw  " + target.value + " €";
    }
    function submitOrder() {
        alert("Ihre Bestellung wurde abgeschickt.");
    }
    function handleChangeChores(_event) {
        console.log("handleChangeChores");
        let displayChores = document.querySelector("div#displayChores");
        let inputs = document.querySelectorAll("input.checkbox");
        console.log(inputs);
        const num = inputs.length;
        for (let i = 0; i < num; i++) {
            if (inputs[i].checked === true) {
                console.log(inputs[i].value + " ");
                //let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + inputs[i] + "']");
                //let price: number = Number(item.getAttribute("price"));
                displayChores.innerHTML += "<br>" + inputs[i].value + " " /*+ price */;
            }
        }
        /*         //Versuch eines löschen spans in displayChores
                var span: HTMLElement = document.createElement("span");
                var txt: string = document.createTextNode("\u00D7");
                span.className = "closing";
                span.appendChild(txt);
                displayChores.appendChild(span);
        
                
        
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
    /* function handleChangeGrocery(_event: Event): void {
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
    */ 
})(A03_Haushaltshilfe || (A03_Haushaltshilfe = {}));
//# sourceMappingURL=haushaltshilfe.js.map