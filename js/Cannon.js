class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle ;
    this.cannon_image = loadImage("assets/playerArcher.png");
    this.cannon_base = loadImage("assets/player.png");
  }
  
  display() {
    //console.log(this.angle)
    if (keyIsDown(RIGHT_ARROW) && this.angle < -80  ) {
      this.angle += 1;
    }

    if (keyIsDown(LEFT_ARROW) && this.angle > -103 ) {
      this.angle -= 1;
    }

    image(this.cannon_base, 170, base.position.y-240, 50, 180);
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.cannon_image,0,0, 120, 120);
    pop();
    noFill();
  }
}
