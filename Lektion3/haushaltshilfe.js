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
        let displayChores = document.querySelector("div#displayChores");
        let inputs = document.querySelectorAll("input.checkbox");
        console.log(inputs);
        const num = inputs.length;
        for (let i = 0; i < num; i++) {
            if (inputs[i].checked === true) {
                console.log(inputs[i].value + " ");
                displayChores.innerHTML = inputs[i].value + " ";
            }
        }
    }
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