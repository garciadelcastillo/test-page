let creepCount = 50;
let creeps = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i = 0; i < creepCount; i++) {
    let c = new Creep(width / 2, height / 2, 2, random(0, TWO_PI));
    creeps.push(c);
  }
}

function draw() {
  background(191);  // try commenting this out
  
  for (let i = 0; i < creeps.length; i++) {
    creeps[i].update();
    creeps[i].render();
  }
}

class Creep {

  constructor(xpos, ypos, velocity, initialAngle) {
    this.x = xpos;
    this.y = ypos;
    this.vel = velocity;
    this.angle = initialAngle;
  }
  
  render() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    rectMode(CENTER);
    rect(0, 0, 40, 20);
    line(0, 0, 40, 0);
    pop();
  }
  
  update() {
    this.angle += random(-PI / 18, PI / 18);
    
    this.x += this.vel * cos(this.angle);
    this.y += this.vel * sin(this.angle);
    
    if (this.x > width || this.x < 0 || this.y > height ||
      this.y < 0) {
      this.angle += PI;
    }
  }
}
