class Box {
    constructor(x, y, width, height){
    var options ={
        restitution:0.8, 
        friction:1.0,
        density:0.04

    }
    this.body=Bodies.rectangle(x, y, width, height, options)
    this.x=x
    this.y=y
    this.width=width
    this.height=height
    World.add(world, this.body)

    }
display(){
    push ()
    translate (this.body.position.x, this.body.position.y)
    rotate (this.body.angle)
    fill ("blue")
    strokeWeight(4)
    stroke("black")
    rectMode(CENTER)
    rect(0,0, this.width, this.height)
    pop ();
}

}