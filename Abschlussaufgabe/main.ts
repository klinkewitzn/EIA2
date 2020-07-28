namespace zauberbild {

    let crc2: CanvasRenderingContext2D;
    let backgroundImage: ImageData; //Variable Image Data deklarieren!!!! (für später: get und put imageData)
    let mainCanvas: HTMLCanvasElement;
    let backgroundColor: HTMLSelectElement;


    window.addEventListener("load", handleLoad);

    async function handleLoad(_event: Event): Promise<void> {

        console.log("Funktion Handle Load wird ausgeführt");

        let format: HTMLDivElement = <HTMLDivElement>document.querySelector("div#chooseSize");
        backgroundColor = <HTMLSelectElement>document.querySelector("#chooseColor");

        mainCanvas = <HTMLCanvasElement>document.getElementById("mainCanvasDraw");
        crc2 = <CanvasRenderingContext2D>mainCanvas.getContext("2d");

        format.addEventListener("change", canvasSize);
        backgroundColor.addEventListener("change", chooseBackground);


    }

    function canvasSize(_event: Event): void {

        console.log("Canvas Größe wurde ausgewählt");
        let target: HTMLElement = <HTMLElement>_event.target;
        let id: string = target.id;

        switch (id) {

            case "small":
                crc2.canvas.width = 200;
                crc2.canvas.height = 200;

                break;
            case "middle":
                crc2.canvas.width = 300;
                crc2.canvas.height = 300;

                break;
            case "big":
                crc2.canvas.width = 400;
                crc2.canvas.height = 400;

                break;
        }
        crc2.putImageData(backgroundImage, 0, 0); //putImageData -->die gespeicherten Hintergrunddaten werden bei jeder Aktualisierung auf den canvas "gelegt"
    }

    function chooseBackground(_event: Event): void {

        console.log("choose color");



        let target: HTMLSelectElement = <HTMLSelectElement>_event.target;
        let value: string = target.value;


        switch (value) {

            case "lilac":
                crc2.fillStyle = "HSL(249, 100%, 93%)";
                crc2.fill();
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);


                break;
            case "green":
                crc2.fillStyle = "HSL(99, 100%, 81%)";
                crc2.fill();
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

                break;
            case "blush":
                crc2.fillStyle = "HSL(0, 80%, 89%)";
                crc2.fill();
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

                break;
            case "skyblue":

                crc2.fillStyle = "lightblue";
                crc2.fill();
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

                break;
            case "butterCream":

                crc2.fillStyle = "HSL(53, 100%, 81%)";
                crc2.fill();
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

                break;

        }
        backgroundImage = crc2.getImageData(0, 0, mainCanvas.width, mainCanvas.height);

    }

}