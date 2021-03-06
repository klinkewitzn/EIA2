window.addEventListener("load",function(){

let canvas: HTMLCanvasElement =<HTMLCanvasElement>document.querySelector("canvas");
let crc2: CanvasRenderingContext2D =<CanvasRenderingContext2D>canvas.getContext("2d");
let kreis2: CanvasRenderingContext2D =<CanvasRenderingContext2D>canvas.getContext("2d");
let crcStar: CanvasRenderingContext2D =<CanvasRenderingContext2D>canvas.getContext("2d");

crc2.save();
        crc2.canvas.width = 400;
        crc2.canvas.height = 400;
        crc2.fillStyle = "HSL(249, 100%, 88%)";
        crc2.fill();
        crc2.fillRect(0, 0, 400, 400);
        crc2.restore();

        
        crcStar.beginPath();
        crcStar.save();
        crcStar.translate(0, 0);
        crcStar.scale(1.2, 0.6);
        //cxt.scale(0.4, 0.4);
        crcStar.moveTo(108, 0.0);
        crcStar.lineTo(141, 70);
        crcStar.lineTo(218, 78.3);
        crcStar.lineTo(162, 131);
        crcStar.lineTo(175, 205);
        crcStar.lineTo(108, 170);
        crcStar.lineTo(41.2, 205);
        crcStar.lineTo(55, 131);
        crcStar.lineTo(1, 78);
        crcStar.lineTo(75, 68);
        crcStar.lineTo(108, 0);
        crcStar.closePath();
        crcStar.fillStyle = "HSL(0,53%,58%)";
        crcStar.fill();
        crcStar.restore();




crc2.fillStyle = "#FF0000";
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
drawCircle();
draw2Circle();
ellipse();

function drawCircle(){
   
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

crc2.beginPath();

crc2.fillRect(10, 10, 100, 50);
crc2.translate(30, 30);
crc2.fillRect(10, 10, 100, 50);
crc2.stroke();
}
function draw2Circle(){
kreis2.beginPath();
kreis2.arc(50, 50, 20, 0, 1.5 * Math.PI);
kreis2.stroke();
crc2.closePath(); 
crc2.restore();


}

function ellipse(){
    crc2.beginPath();
    crc2.ellipse(180, 100, 30, 90, Math.PI / 3, 0, 2 * Math.PI);
    crc2.fillStyle= "HSL(0, 76%, 47%)";
    crc2.stroke();

}

/* Gradient Dtl. Flagge
let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 100);

gradient.addColorStop(0, "black");
gradient.addColorStop(.2, "black");
gradient.addColorStop(.5, "red");
gradient.addColorStop(1, "gold");

crc2.fillStyle = gradient;
crc2.fillRect(0, 0, 200, 100);
*/
/*
let pattern: CanvasRenderingContext =<CanvasRenderingContext> document.createElement('canvas').getContext('2d');
pattern.canvas.width = 40;
pattern.canvas.height = 20;

pattern.fillStyle = '#fec';
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


crc2.fillStyle = crc2.createPattern(pattern.canvas, 'repeat');
crc2.fillRect(0, 0, canvas.width, canvas.height);   */
});