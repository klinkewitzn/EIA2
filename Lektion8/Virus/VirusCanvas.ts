namespace L08_VirusCanvas {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawCellTissue();
        drawHumanCells({ x: 60, y: 700 }, { x: 300, y: 230 });
        //drawVirus({ x: 0, y: 100 }, { x: 70, y: 70 });
        //drawAntibodys({ x: 0, y: 100 }, { x: 70, y: 70 });
        drawParticles({ x: 200, y: 600 }, { x: crc2.canvas.width, y: crc2.canvas.height });
        drawEllipse({ x: 0, y: 100 }, { x: 190, y: 190 });

 
        let bodyPositionMin: Vector = { "x": 100, "y": 300 };
        let bodyPositionMax: Vector = { "x": 50, "y": 50 };
        for (let i: number = 0; i < 6; i++) {

            let X: number = Math.random() * (bodyPositionMax.x - bodyPositionMin.x) + bodyPositionMin.x;
            let Y: number = Math.random() * (bodyPositionMax.y - bodyPositionMin.y) + bodyPositionMin.y;

        drawVirus({ "x": X, "y": Y }, { "x": 40, "y": 40 });
        }

       /* let coronaPositionMin: Vector = { "x": 0, "y": 0 };
        let coronaPositionMax: Vector = { "x": 10, "y": 10 };
        for (let i: number = 0; i < 5; i++) {

            let X: number = Math.random() * (coronaPositionMax.x - coronaPositionMin.x) + coronaPositionMin.x;
            let Y: number = Math.random() * (coronaPositionMax.y - coronaPositionMin.y) + coronaPositionMin.y;
            drawAntibodys({ "x": X, "y": Y }, { "x": 10, "y": 10 });

        }*/



    }
    function drawCellTissue(): void {
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

        pattern.canvas.width = 40;
        pattern.canvas.height = 20;

        pattern.fillStyle = "#97a0db3a";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 10);
        pattern.lineTo(10, 10);
        pattern.lineTo(20, 0);
        pattern.lineTo(30, 0);
        pattern.lineTo(40, 10);
        pattern.lineTo(30, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(10, 10);
        pattern.stroke();

        pattern.strokeStyle = "HSL(249, 9%, 72%)";
        pattern.stroke();
        pattern.closePath();

        crc2.fillStyle = <CanvasRenderingContext2D>crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    }

    function drawParticles(_position: Vector, _size: Vector): void {
        console.log("halbdurchsichtige Partikel", _position, _size);

        let nParticles: number = 20;
        let radiusParticle: number = 19;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(249, 9%, 47%, 0.3)");
        gradient.addColorStop(1, "HSLA(249, 9%, 47%, 0.8)");

        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle); 
            crc2.restore();
        }
        crc2.restore();
        crc2.closePath();
    }


    function drawAntibodys(_position: Vector, _size: Vector): void {

        console.log("Antibodys", _position, _size);

        let nParticles: number = 3;
        let radiusParticle: number = 200;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 1, 30, 70, radiusParticle);

        crc2.beginPath();
        crc2.arc(100, 90, 15, 1.2, 1.6 * Math.PI);
        crc2.stroke();
        crc2.strokeStyle = "green";
        crc2.moveTo(45,90);
        crc2.lineTo(86,90);
        crc2.stroke();
        crc2.stroke();
        crc2.closePath(); 
        
        crc2.beginPath();
        crc2.arc(130, 120, 15, 0.5, 1.3 * Math.PI);
        crc2.stroke();
        crc2.strokeStyle = "green";
        crc2.moveTo(120,130);
        crc2.lineTo(86,160);
        crc2.stroke();
        crc2.stroke();
        crc2.closePath(); 

        crc2.strokeStyle = "HSL(0, 76%, 47%)";
        crc2.lineWidth = 2;
        
        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
        crc2.closePath();


    }
 
    function drawEllipse(_position: Vector, _size: Vector): void {
        console.log("Killerzellen", _position, _size);

        let nParticles: number = 20;
        let radiusParticle: number = 19;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.ellipse(180, 100, 5, 20, Math.PI / 3, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(137, 47%, 56%, 0.3)");
        gradient.addColorStop(1, "HSLA(137, 47%, 56%, 0.8)");

        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle); 
            crc2.restore();
        }
        crc2.restore();
        crc2.closePath();
    }


    function drawHumanCells(_position: Vector, _size: Vector): void {
        console.log("Blutzellen", _position, _size);

        let nParticles: number = 20;
        let radiusParticle: number = 20;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(360, 100%, 22%,1)");
        gradient.addColorStop(0.5, "HSLA(360, 100%, 22%,1)");
        gradient.addColorStop(0.6, "HSLA(360, 100%, 47%,1)");
        gradient.addColorStop(1, "HSLA(360, 100%, 47%, 1)");
        crc2.strokeStyle = "HSL(0, 76%, 47%)";
        crc2.lineWidth = 2;

        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
        crc2.closePath();
    }
    function drawVirus(_position: Vector, _size: Vector): void {
        console.log("Virus", _position, _size);
        //let coronaviren: CanvasRenderingContext2D = <CanvasRenderingContext2D>crc2.canvas.getContext("2d");
        //let nParticles: number = 5;
        //let radiusParticle: number = 20;
        //let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        //let particle: Path2D = new Path2D();
        //crc2.beginPath();
        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x, _position.y);

        crc2.arc(180, 300, 19, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.strokeStyle = "HSL(0, 76%, 47%)";
        crc2.moveTo(180, 300);
        crc2.lineTo(200, 330);
        crc2.arc(200, 330, 5, 0, 2 * Math.PI);
        crc2.moveTo(180, 300);
        crc2.lineTo(170, 333);
        crc2.arc(170, 333, 5, 0, 2 * Math.PI);
        crc2.moveTo(180, 300);
        crc2.lineTo(149, 318);
        crc2.arc(149, 318, 5, 0, 2 * Math.PI);
        crc2.moveTo(180, 300);
        crc2.lineTo(143, 290);
        crc2.arc(143, 290, 5, 0, 2 * Math.PI);
        crc2.moveTo(180, 300);
        crc2.lineTo(160, 270);
        crc2.arc(160, 270, 5, 0, 2 * Math.PI);
        crc2.moveTo(180, 300);
        crc2.lineTo(188, 266);
        crc2.arc(188, 266, 5, 0, 2 * Math.PI);
        crc2.moveTo(180, 300);
        crc2.lineTo(210, 280);
        crc2.arc(210, 280, 5, 0, 2 * Math.PI);
        crc2.moveTo(180, 300);
        crc2.lineTo(214, 306);
        crc2.arc(214, 306, 5, 0, 2 * Math.PI, true);
        crc2.fillStyle = ("HSL(0, 76%, 47%)");
        crc2.fill();
        crc2.stroke();


        crc2.restore();
        crc2.closePath();
        crc2.save();
       
        
        
        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x, _position.y);

      
       //crc2.fillStyle = gradient;

     
      // for (let drawn: number = 0; drawn < nParticles; drawn++) {
      //  _position.x = Math.random() * crc2.canvas.width/1.8;
      //  _position.y = 50 + (10 * Math.random() );

        drawAntibodys(_position, {x: 100, y: 100});
        
    }

       //crc2.restore();
       //crc2.closePath();
        //showVirus({ "x": 50, "y": 200 });

        /*
        coronaviren.beginPath();
        coronaviren.arc(200, 300, 20, 0, 2 * Math.PI, true);
        coronaviren.fillStyle = ("HSL(0, 83%, 53%)");
        coronaviren.strokeStyle = ("HSL(0, 83%, 53%)");
        coronaviren.arc(250, 230, 5, 0, 2 * Math.PI, true);
        coronaviren.fillStyle = ("HSL(0, 76%, 47%)");
        coronaviren.strokeStyle = ("HSL(0, 83%, 53%)");
        coronaviren.fill();
        coronaviren.stroke();
        */
    }
    
 /*
function showVirus(_position: Vector){
    for (let drawn: number = 0; drawn < 6; drawn++) {
        crc2.save();
        _position.x = Math.random()  * crc2.canvas.width;
        _position.y = Math.random() * crc2.canvas.height;
        //drawAntibodys(_position, {x: 100, y: 0})
        drawVirus(_position, {x: 10, y: 10})
     
    }
}*/


    

}



