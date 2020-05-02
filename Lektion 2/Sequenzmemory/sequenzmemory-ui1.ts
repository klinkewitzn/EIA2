namespace Sequenzmemorie {
    window.addEventListener("load", function (): void {
        let selectedWrd: HTMLSelectElement = <HTMLSelectElement>document.querySelector("#selectWord");
        let writtenWrd: HTMLInputElement = <HTMLInputElement>document.querySelector("#yourWord");
        let gametime: HTMLInputElement = <HTMLInputElement>document.querySelector("#gametime");
        let timer: HTMLInputElement = <HTMLInputElement>document.querySelector("#timer");
        let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
        let letter: HTMLDivElement;
        let behaelter: HTMLDivElement = <HTMLDivElement>document.querySelector("#behaelter");

        button.addEventListener("click", shuffleLetters);
        document.addEventListener("keydown", keypress);
        

        function shuffleLetters(_event: MouseEvent): void  {
            let inputMixed: string[] = [];

            if (selectedWrd.value != "") {
                let shuffled: string = selectedWrd.value.split("").sort(function () { return 0.5 - Math.random(); }).join("");
                inputMixed.push(shuffled);

                behaelter.innerHTML = "<p class='letters'>" + inputMixed + "</p>";
                console.log(behaelter);
            }
            else if (selectedWrd.value == "") {
                let shuffled: string = writtenWrd.value.split("").sort(function () { return 0.5 - Math.random(); }).join("");
                inputMixed.push(shuffled);

                behaelter.innerHTML = "<p class='letters'>" + inputMixed + "</p>";


                console.log(behaelter);
            }

        }
        //Funktion 'Enter' Ende

        function keypress(_event: KeyboardEvent): void {
            if (_event.keyCode == 32) {
                //dann zeige alle Buchstaben mit klasse .letters
            } else {
                // dann gebe den Buchstaben die Klasse .hide
            }
        }
    });



}



/*

namespace L02_Sequenzmemory {
    window.addEventListener("load", init);

    let selectedWrd: HTMLSelectElement = document.querySelector("#selectWord.value");
    let writtenWrd: HTMLInputElement = document.querySelector("#yourWord.value");
    let gametime: HTMLInputElement = document.querySelector("#gametime.value");
    let timer: HTMLInputElement = document.querySelector("#timer.value");




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
