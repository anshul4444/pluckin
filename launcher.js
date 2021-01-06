class launcher{
    constructor(Body,anchor){
        
        var options={
            bodyA:Body,
            pointB:anchor,
            stiffness:0.004,
            length:10
        }

        this.bodyA = Body
        this.pointB = anchor
        this.launcher = Constraint.create(options)
        World.add(world,this.launcher)
    }

   attach(body){
       this.launcher.bodyA=body;
    }
    
    fly(){
        this.launcher.bodyA = null;
    }

    display(){
    if(this.launcher.bodyA){
        
        var pointA = this.launcher.bodyA.position;
        var pointB = this.launcher.pointB;

        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
    }

}