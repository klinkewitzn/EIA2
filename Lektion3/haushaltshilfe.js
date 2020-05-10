"use strict";
var A03_Haushaltshilfe;
(function (A03_Haushaltshilfe) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        let addGrocery = document.querySelector("button#addGrocery");
        let chores = document.querySelector("div#chores");
        let banking = document.querySelector("input#banking");
        let submit = document.querySelector("button#submit");
        addGrocery.addEventListener("click", handleChangeGrocery);
        chores.addEventListener("change", handleChangeChores);
        banking.addEventListener("input", handleChangeBanking);
        submit.addEventListener("click", submitOrder);
    }
    function handleChangeBanking(_event) {
        console.log("handleChangeBanking");
    }
    function submitOrder() {
        alert("Ihre Bestellung wurde abgeschickt.");
    }
    function handleChangeChores(_event) {
        console.log("handleChangeChores");
        /*let checkbox: HTMLInputElement = document.getElementsByClassName("checkbox");
        let str: string = "";

        if (checkbox.checked === true) {
            str += checkbox.value + "";
        }
        console.log(str);   */
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
})(A03_Haushaltshilfe || (A03_Haushaltshilfe = {}));
function handleChangeGrocery(_event) {
    console.log("handleChangeGrocery");
    let article = document.querySelector("select#article");
    let unit = document.querySelector("select#unit");
    let shop = document.querySelector("select#shop");
    let amount = document.querySelector("input#amount");
    let displayGroceries = document.querySelector("div#displayGroceries");
    let fd = new FormData();
    fd.append("Article", article.value);
    fd.append("Amount", amount.value);
    fd.append("Unit", unit.value);
    fd.append("Shop", shop.value);
    console.log(Array.from(fd));
    for (let obj of fd) {
        console.log(obj);
        let amount = Number(fd.get("Amount"));
        let item = document.querySelector("[value='" + obj[1] + "']");
        let price = Number(item.getAttribute("price"));
        displayGroceries.innerHTML += article.value + ", " + amount + " " + unit.value + ",  " + shop.value + ",  " + price + "€" + "<br>";
    }
}
//# sourceMappingURL=haushaltshilfe.js.map