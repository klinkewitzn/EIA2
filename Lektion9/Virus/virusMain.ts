namespace L09_Virus {
  window.addEventListener("load", handleLoad);
  export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
  export let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");


  export let coronaCells: Corona[] = [];
  export let antibodyCells: Antibody[] = [];
  let particleCells: Particle[] = [];


  let backgroudnImage: ImageData;
  // Variable ImageData deklarieren <-- UNBEDINGT MACHEN!!!!

  function handleLoad(_event: Event): void {
    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas)
      return;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");


    drawBackground();
    //let sizeVector: Vector = new Vector(150, 375);
    //drawCells(sizeVector);
    drawCoronaVirus(10);
    drawAntibody(10);
    drawParticle(80);

    window.setInterval(animation, 20);
  }



  function drawBackground(): void {

    console.log("unspezifisches Zellgewebe");
    //Hintergrundfarbe: Gradient
    let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
    gradient.addColorStop(0, "HSL(261, 97%, 89%)");
    gradient.addColorStop(.55, "HSL(360, 97%, 84%)");
    gradient.addColorStop(1, "white");

    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    //Gittermuster als Zellgewebe-Muster
    let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");

    pattern.canvas.width = 50;
    pattern.canvas.height = 30;

    pattern.fillStyle = "#97a0db3a";
    pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
    pattern.moveTo(0, 10);
    pattern.lineTo(10, 10);
    pattern.lineTo(20, 0);
    pattern.lineTo(30, 0);
    pattern.lineTo(50, 10);
    pattern.lineTo(30, 30);
    pattern.lineTo(20, 30);
    pattern.lineTo(10, 10);
    pattern.stroke();
    pattern.strokeStyle = "HSL(249, 9%, 72%)";
    pattern.stroke();
    pattern.closePath();
    //nucleus
    pattern.beginPath();
    pattern.arc(25, 12, 2, 0, 2 * Math.PI);
    pattern.fillStyle = "HSLA(137, 47%, 56%, 0.4)";
    pattern.fill();

    pattern.beginPath();
    pattern.arc(2, 22, 2, 0, 2 * Math.PI);
    pattern.fillStyle = "HSLA(137, 47%, 56%, 0.4)";
    pattern.fill();
    crc2.fillStyle = <CanvasRenderingContext2D>crc2.createPattern(pattern.canvas, "repeat");
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    //Bloodvessel
    crc2.beginPath();
    crc2.moveTo(1350, 0);
    crc2.lineTo(1300, 800);
    crc2.lineWidth = 80;
    crc2.strokeStyle = "HSLA(360, 100%, 72%, 1)";
    crc2.stroke();
    crc2.closePath();
    crc2.save();
    crc2.beginPath();
    crc2.moveTo(1325, 500);
    crc2.lineTo(1140, 800);
    crc2.moveTo(1325, 200);
    crc2.lineTo(1500, 800);

    crc2.moveTo(1325, 200);
    crc2.lineTo(1500, 800);

    crc2.moveTo(1325, -170);
    crc2.lineTo(1580, 800);
    crc2.lineWidth = 20;
    crc2.strokeStyle = "HSLA(360, 100%, 72%, 1)";
    crc2.stroke();
    crc2.closePath();
    crc2.save();

    crc2.beginPath();

    crc2.moveTo(1224, 650);
    crc2.lineTo(1300, 800);
    crc2.lineWidth = 2;
    crc2.strokeStyle = "HSLA(360, 100%, 72%, 1)";
    crc2.stroke();
  }

  



  // ---- CORONA VIREN WERDEN ERSTELLT ---- \\

  function drawCoronaVirus(_nCorona: number): void {

    for (let i: number = 0; i < _nCorona; i++) {
  
      let positionX: number = Math.random() * crc2.canvas.width;
      let positionY: number = Math.random() * canvas.height;
      let postion: Vector = new Vector(positionX, positionY);
      let corona: Corona = new Corona(postion);
      corona.draw();
      coronaCells.push(corona);


    }

  }

  // ---- ANTIKÖRPER WERDEN ERSTELLT ---- \\

  function drawAntibody(_nAntibody: number): void {
    for (let i: number = 0; i < _nAntibody; i++) {
      let positionX: number = Math.random() * canvas.width;
      let positionY: number = Math.random() * canvas.height;
      let postion: Vector = new Vector(positionX, positionY);
      let antibody: Antibody = new Antibody(postion);
      antibody.draw();
      antibodyCells.push(antibody);
 backgroudnImage = crc2.getImageData(0, 0, canvas.width, canvas.height);   
    }
  }

  // ---- PARTIKEL WERDEN ERSTELLT ---- \\
  function drawParticle(_nParticle: number): void {
    for (let drawn: number = 0; drawn < _nParticle; drawn++) {
      crc2.save();
      let positionX: number = Math.random() * canvas.width;
      let positionY: number = Math.random() * canvas.height;
      let postion: Vector = new Vector(positionX, positionY);
      let particle: Particle = new Particle(postion);
      particle.draw();
      particleCells.push(particle);

    }
  }

  // ------ ANIMATION ------ oder auch "update"\\

  function animation(): void {
    crc2.putImageData(backgroudnImage, 0, 0);
    for (let corona of coronaCells) {
      corona.move(1 / 20);
      corona.draw();
    }

    for (let antibody of antibodyCells) {
      antibody.move(1 / 20);
      antibody.draw();
    }

    for (let particle of particleCells) {
      particle.move(1 / 20);
      particle.draw();
    }

  }
}
