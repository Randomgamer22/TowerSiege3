class Polygon {
    constructor(x, y, width, height){
        var options = {
        }
        this.body = Bodies.circle(x, y, width/4, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
      }
    
      display() {
        var angle = this.body.angle;
        push();
        imageMode(CENTER);
        fill("red");
        rotate(angle);
        translate(this.body.position.x, this.body.position.y);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
};