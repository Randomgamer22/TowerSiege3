class Box {
  constructor(x, y, width, height){
    var options = {
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.color = color;
    this.Visiblity = 255;
    World.add(world, this.body);
  }

  display() {
    if(this.body.speed < 3){
      var angle = this.body.angle;
      push();
      rectMode(CENTER);
      fill("red");
      rotate(angle);
      translate(this.body.position.x, this.body.position.y);
      rect(0, 0, this.width, this.height);
      pop();
    }
    else{
      World.remove(world, this.body);
      push();
      var angle = this.body.angle;
      rectMode(CENTER);
      this.Visiblity = this.Visiblity - 1;
      rotate(angle);
      translate(this.body.position.x, this.body.position.y);
      tint("white",this.Visiblity);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }

  score() {
    if(this.Visiblity < 255){
      score++;
    }
  }
};
