class Drops{
    constructor(x,y){
        var option = {
            friction : 0.01,
            restitution:0.1,
            isStatic: false
        }

        this.rain = Bodies.circle(x,y,4,option);
        this.radius = 4;
        World.add(world,this.rain);
    }
    update(){
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain,{x:random(0,400), y:random(0,400)});
        }
    }

    display(){
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius);
    }
}