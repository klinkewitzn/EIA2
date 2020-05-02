"use strict";
var Sequenzmemorie;
(function (Sequenzmemorie) {
    window.addEventListener("load", function () {
        let selectedWrd = document.querySelector("#selectWord");
        let writtenWrd = document.querySelector("#yourWord");
        let gametime = document.querySelector("#gametime");
        let timer = document.querySelector("#timer");
        let button = document.querySelector("button");
        let letter;
        let behaelter = document.querySelector("#behaelter");
        button.addEventListener("click", shuffleLetters);
        document.addEventListener("keydown", hint);
        function shuffleLetters(_event) {
            let inputMixed = [];
            if (selectedWrd.value != "") {
                let shuffled = selectedWrd.value.split("").sort(function () { return 0.5 - Math.random(); }).join("");
                inputMixed.push(shuffled);
                behaelter.innerHTML = "<p class='letters'>" + inputMixed + "</p>";
                console.log(behaelter);
            }
            else if (selectedWrd.value == "") {
                let shuffled = writtenWrd.value.split("").sort(function () { return 0.5 - Math.random(); }).join("");
                inputMixed.push(shuffled);
                behaelter.innerHTML = "<p class='letters'>" + inputMixed + "</p>";
                console.log(behaelter);
            }
        }
        //Funktion 'Enter' Ende
        function hint(_event) {
            if (_event.keyCode == 83) {
                //dann zeige alle Buchstaben mit klasse .letters
            }
            else {
                // dann gebe den Buchstaben die Klasse .hide
            }
        }
    });
})(Sequenzmemorie || (Sequenzmemorie = {}));
/*


let selectedWrd: HTMLSelectElement = <HTMLSelectElement>document.querySelector("#selectWord.value");
let writtenWrd: HTMLInputElement = <HTMLInputElement>document.querySelector("#yourWord.value");
let gametime: HTMLInputElement = <HTMLInputElement>document.querySelector("#gametime.value");
let timer: HTMLInputElement = <HTMLInputElement>document.querySelector("#timer.value");
let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
let letter: HTMLDivElement;
//let letter

window.addEventListener("load", function (): void {
    button.addEventListener("click", shuffleLetters());
    document.addEventListener("keydown", keypress());

});


function shuffleLetters(_event: MouseEvent): void {
    if (selectedWrd || writtenWrd != "") {

    }
}

function keypress(_event: MouseEvent): void {
    if (keycode 32: boolean == false;) {
        letter.classList.add("hide");
    }
    else {
        letter.classList.add("hide");
    };
}



function enter() {
    let inputMixed = [];
    if (selectedWrd.value != "") {
        let shuffled = selectedWrd.value.split("").sort(function () { return 0.5 - Math.random(); }).join("");
        inputMixed.push(shuffled);
        playground.innerHTML = "<p class='letters'>" + inputMixed + "</p>";
        console.log(playground);
    }
    else if (selectedWrd.value == "") {
        let shuffled = writtenWrd.value.split("").sort(function () { return 0.5 - Math.random(); }).join("");
        inputMixed.push(shuffled);
        playground.innerHTML = "<p class='letters'>" + inputMixed + "</p>";
        console.log(playground);
    }
}
//Funktion 'Enter' Ende
function hint(_event) {
    if (_event.keyCode == 83) {
        //dann zeige alle Buchstaben mit klasse .letters
    }
    else {
        // dann gebe den Buchstaben die Klasse .hide
    }
}
});
}) (Sequenzmemorie || (Sequenzmemorie = {}));
//# sourceMappingURL=script.js.map

*/
var L02_Sequenzmemory;
(function (L02_Sequenzmemory) {
    window.addEventListener("load", init);
    let selectedWrd = document.querySelector("#selectWord.value");
    let writtenWrd = document.querySelector("#yourWord.value");
    let gametime = document.querySelector("#gametime.value");
    let timer = document.querySelector("#timer.value");
    /*function init(_event: Event): void {
        console.log("Init");
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.querySelectorAll("fieldset");

        // Install listeners on fieldsets
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            fieldset.addEventListener("input", handleChange);
        }
    }

    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log();
        if (_event.type == "change")
            console.warn("Change: " + target.name + " = " + target.value, _event);
        else
            console.log("Input: " + target.name + " = " + target.value, _event);

        // Handling checkbox
        if (target.type == "checkbox")
            console.log("Checked: " + target.name + " = " + target.checked);

        // Slider response
        if (target.name == "Slider") {
            let progress: HTMLProgressElement = <HTMLProgressElement>document.getElementsByTagName("progress")[0];
            progress.value = parseFloat(target.value);
        }

        // Meter response
        if (target.name == "Stepper") {
            let meter: HTMLMeterElement = <HTMLMeterElement>document.querySelector("meter");
            meter.value = parseFloat(target.value);
        }

        // Color response
        if (target.name == "Color") {
            let ouput: HTMLOutputElement = <HTMLOutputElement>document.querySelector("output");
            ouput.value = target.value;
        }
    } */
})(L02_Sequenzmemory || (L02_Sequenzmemory = {}));
//# sourceMappingURL=sequenzmemory-ui1.js.map