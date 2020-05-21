"use strict";
//Vorlage= Aufgabe 4 von Tanja Schuchter, da meine Aufgabe4 nicht funktioniert hat
var A05_Haushaltshilfe;
(function (A05_Haushaltshilfe) {
    A05_Haushaltshilfe.Shop = ["Aldi", "Rewe", "Lidl", "Kaufland", "Edeka", "Market"];
    A05_Haushaltshilfe.Payment = ["PayPal", "Creditcard", "SEPA", "bank collection", "DIRECTeBanking"];
    A05_Haushaltshilfe.data = {
        Shopping: [
            { name: "Butter", price: 1.50 },
            { name: "Milk", price: 1.20 },
            { name: "Coffee", price: 3.50 },
            { name: "Cheese", price: 1.80 },
            { name: "Bread", price: 2.70 },
            { name: "Pasta", price: 1.10 },
            { name: "Apple", price: 0.80 }
        ],
        Household: [
            { name: "mow the lawn", price: 10.00 },
            { name: "cook a dish", price: 15.00 },
            { name: "feed the cat/dog", price: 5.00 },
            { name: "clean the house", price: 25.00 }
        ]
    };
})(A05_Haushaltshilfe || (A05_Haushaltshilfe = {}));
//# sourceMappingURL=HaushaltshilfeData.js.map