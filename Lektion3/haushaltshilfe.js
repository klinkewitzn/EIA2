"use strict";
var A03_Haushaltshilfe;
(function (A03_Haushaltshilfe) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        let addGrocery = document.querySelector("button#addGrocery");
        let chores = document.querySelector("div#chores");
        addGrocery.addEventListener("click", handleChangeGrocery);
        chores.addEventListener("change", handleChangeChores);
    }
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
    function handleChangeChores(_event) {
        console.log("handleChangeChores");
        let chores = document.querySelector("fieldset#household");
        console.log(chores.value);
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
    }
})(A03_Haushaltshilfe || (A03_Haushaltshilfe = {}));
//# sourceMappingURL=haushaltshilfe.js.map