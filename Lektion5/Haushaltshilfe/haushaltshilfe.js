"use strict";
//Vorlage= Aufgabe 4 von Tanja Schuchter, da meine Aufgabe4 nicht funktioniert hat
var A05_Haushaltshilfe;
(function (A05_Haushaltshilfe) {
    window.addEventListener("load", handleLoad);
    let form;
    let url = "https://anewbeginning.herokuapp.com";
    async function handleLoad(_event) {
        let response = await fetch("HaushaltshilfeData.json"); //(await) warten bis fetch die Daten von HouseData.json hat
        let offer = await response.text(); //text() liefert mir nicht direkt einen string, sondern nur die Promise einen string zu liefern, wenn sie die Daten hat (solage warten ->await)
        let data = JSON.parse(offer); //JSON.prse wandelt den offer- string in ein Objekt um
        A05_Haushaltshilfe.generateContent(data);
        form = document.querySelector("form");
        let slider = document.querySelector("input#mass");
        let submitbutton = document.querySelector("button[type=button]");
        let resetbutton = document.querySelector("button[type=reset]");
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayMass);
        resetbutton.addEventListener("click", deleteData);
        submitbutton.addEventListener("click", sendData);
        displayOrder();
    }
    async function sendData(_event) {
        console.log("DATA SENT");
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        alert("" + responseText);
    }
    function deleteData() {
        let order = document.querySelector("div#order");
        order.innerHTML = "";
    }
    function handleChange(_event) {
        displayOrder();
    }
    function displayOrder() {
        let price = 0;
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData = new FormData(form);
        for (let entry of formData) {
            console.log("schleife entry of formData");
            let item = document.querySelector("[value='" + entry[1] + "']");
            let itemPrice = Number(item.getAttribute("price"));
            if (entry[0] == "Household") {
                order.innerHTML += item.value + "   " + " : € " + itemPrice.toFixed(2) + "<br>";
            }
            else if (entry[0] == "Shopping") {
                order.innerHTML += item.value + "   " + " : € " + itemPrice.toFixed(2) + "<br>";
            }
            else if (entry[0] == "Money") {
                order.innerHTML += item.value + "   " + "<br>";
            }
            price += itemPrice;
        }
        let progress = document.querySelector("progress");
        order.innerHTML += "get/submit money" + " : " + progress.value + "€";
        let gesamt = progress.value + price;
        console.log(gesamt);
        order.innerHTML += "<p><strong>Total : " + gesamt + "€";
    }
    function displayMass(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(A05_Haushaltshilfe || (A05_Haushaltshilfe = {}));
//# sourceMappingURL=haushaltshilfe.js.map