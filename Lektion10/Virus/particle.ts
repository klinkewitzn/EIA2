namespace L10_Virus {
  export class Particle extends Cell {

    constructor(_position: Vector) {
      super(_position);
      this.velocity.random(20, 50);
    }

    draw(): void {
      //console.log("Particle draw");
      crc2.save();
      crc2.beginPath();
      crc2.translate(this.position.x, this.position.y);

      let radiusParticle: number = 9;
      //let particle: Path2D = new Path2D();
      let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

      crc2.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
      gradient.addColorStop(0, "HSLA(249, 9%, 47%, 0.3)");
      gradient.addColorStop(1, "HSLA(249, 9%, 47%, 0.8)");
      crc2.fillStyle = gradient;
      crc2.fill();



      crc2.closePath();
      crc2.restore();

    }

    move(_timeslice: number): void {
      super.move(_timeslice);
    }
  }
}