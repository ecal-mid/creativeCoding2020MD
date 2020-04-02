class Graphic {
  constructor(w) {
    this.grid = 100;
    this.w = w;
    this.r = PI/4;
    this.posx = round(random(-5, 5))*this.grid;
    this.posy = round(random(-5, 5))*this.grid;
    if(random()<0.5) {
      this.r = -PI/4;
    }
  }
  draw() {
    push();
    translate(this.posx, this.posy, 100);
    rotateX(PI/8);
    rotateY(this.r);
    rect(0, 0, 100, 100);
    pop();
  }
}
