class mango{
    constructor(x,y,r){

       // var option={
     //       isStatic:true
      //  }
        this.y=y
        this.x=x
        this.r=r

        this.body = Bodies.circle(this.x,this.y,this.r,this.r)
        this.image = loadImage("mango.png")
        World.add(world,this.body)
    }

    display(){
        var mangoPos = this.body.position

        translate(mangoPos.x,mangoPos.y)

        image(this.image,0,0,this.r,this.r)
    }

    
}