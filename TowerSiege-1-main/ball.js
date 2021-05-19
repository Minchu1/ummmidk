class Ball{

    constructor(x,y,radius){
        var options={
            density:1.3,
            restitution:0.6

        }

        this.body=Bodies.circle(x,y,radius,options)
        this.radius= radius
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position
        
        fill("yellow");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius)

    }

}