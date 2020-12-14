class sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 2
        }
        this.chain = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.chain);
    }
    Fly(){
        this.chain.bodyA=null;
}


    display(){
        if (this.chain.bodyA){
            push()
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x-2, pointA.y-125, pointB.x, pointB.y);
            pop()
        }
      
    }
    
}