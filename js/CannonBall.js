class CannonBall {
  constructor(x, y) 
  {
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/arrow.png");
    this.body.angle = cannon.angle
    World.add(world, this.body);
    this.trajectory = []
    
  }

  shoot() {
    var newAngle = cannon.angle + 85;
    newAngle = newAngle *(3.14/180)
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {
      x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
  }

  display() 
  {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, 100, 10);
    pop();

    if(this.body.velocity.x > 0 && pos.x > 10) {
      var position = [pos.x,pos.y]
      this.trajectory.push(position)

    }

   // this.trajectory = [[10,20],[20,10]]
    for(var i = 0; i < this.trajectory.length ; i++) {
      image(this.image,this.trajectory[i][0],this.trajectory[i][1],5,5)
    }

  }
}
