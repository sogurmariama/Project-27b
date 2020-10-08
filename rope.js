class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.07,
            length: 210
        }
        this.pointB=pointB
        this.chain =constraint.create(options);
        World.add(world, this.chain);
    }
     
    display(){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}