namespace L09_Virus {
  export class Particle {
    position: Vector;
    velocity: Vector;

    constructor(_position: Vector) {
      if (_position)
        this.position = _position;
      else
        this.position = new Vector(0, 0);

      this.velocity = new Vector(0, 0);
      this.velocity.random(50, 100);
    }

    draw(): void {
       console.log("Particle draw");
      crc2.save();
      // Mit Math.random werden zufällige Positionen erzeugt

      let radiusParticle: number = 19;
      let particle: Path2D = new Path2D();
      let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

      particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
      gradient.addColorStop(0, "HSLA(249, 9%, 47%, 0.3)");
      gradient.addColorStop(1, "HSLA(249, 9%, 47%, 0.8)");

      crc2.save();
      crc2.beginPath();
      //crc2.translate(_position.x, _position.y);
      crc2.fillStyle = gradient;
      crc2.restore();
      crc2.closePath();

      crc2.restore();

    }

    move(_timeslice: number): void {
      let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
      offset.scale(_timeslice);
      this.position.add(offset);

      if (this.position.x < 0)
        this.position.x += crc2.canvas.width;
      if (this.position.y < 0)
        this.position.y += crc2.canvas.height;
      if (this.position.x > crc2.canvas.width)
        this.position.x -= crc2.canvas.width;
      if (this.position.y > crc2.canvas.height)
        this.position.y -= crc2.canvas.height;
    }
  }
}