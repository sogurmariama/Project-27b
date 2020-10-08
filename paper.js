class bob {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("white");
      ellipse(pos.x, pos.y, this.width, this.height);
    }
  };