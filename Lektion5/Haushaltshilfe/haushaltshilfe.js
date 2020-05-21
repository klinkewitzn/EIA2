"use strict";
//Vorlage= Aufgabe 4 von Tanja Schuchter, da meine Aufgabe4 nicht funktioniert hat
var A05_Haushaltshilfe;
(function (A05_Haushaltshilfe) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        A05_Haushaltshilfe.generateContent(A05_Haushaltshilfe.data);
        let form = document.querySelector("div#tasks");
        let slider = document.querySelector("input#mass");
        let submitbutton = document.querySelector("button#publish");
        let deletebutton = document.querySelector("button#delete");
        deletebutton.addEventListener("click", deleteData);
        submitbutton.addEventListener("click", submitData);
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayMass);
        displayOrder();
    }
    function deleteData() {
        let order = document.querySelector("div#order");
        order.innerHTML = "";
    }
    function submitData(_event) {
        alert("your Data has been published!");
    }
    function handleChange(_event) {
        displayOrder();
    }
    function displayOrder() {
        let price = 0;
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData = new FormData(document.querySelector("form"));
        for (let entry of formData) {
            let item = document.querySelector("[value='" + entry[1] + "']");
            let itemPrice = Number(item.getAttribute("price"));
            if (entry[0] == "Household") {
                order.innerHTML += item.value + "   " + " : € " + itemPrice.toFixed(2) + "<br>";
            }
            else if (entry[0] == "Shopping") {
                order.innerHTML += item.value + "   " + " : € " + itemPrice.toFixed(2) + "<br>";
            }
            price += itemPrice;
        }
        let progress = document.querySelector("progress");
        order.innerHTML += "get/submit money" + " : " + progress.value + "€";
        let gesamt = progress.value + price;
        console.log(gesamt);
        order.innerHTML += "<p><strong>Total : " + gesamt + "€";
    }
    A05_Haushaltshilfe.displayOrder = displayOrder;
    function displayMass(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(A05_Haushaltshilfe || (A05_Haushaltshilfe = {}));
//# sourceMappingURL=haushaltshilfe.js.map