const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var world,engine;

var thunderImg1,thunderImg2,thunderImg3,thunderImg4;
var thunder;
var maxDrops = 100;
var thunderFrame;
var rand;
var drop = [];


function preload(){
    thunderImg1 = loadImage("1.png");
    thunderImg2 = loadImage("2.png");
    thunderImg3 = loadImage("3.png");
    thunderImg4 - loadImage("4.png");
    
}

function setup(){
   engine = Engine.create();
   world = engine.world;

   createCanvas(400,600);
   umbrella = new Umbrella(200,400);

   if(frameCount%120 === 0){

    for(var i = 0;i < maxDrops; i++){

        drop.push(new Drops(random(0,400),random(0,400)));
    }
   }
    
}

function draw(){
    Engine.update(engine);
    background(0);
    

    if(frameCount% 100 === 0){
        rand = Math.round(random(1,4));
        thunderFrame = frameCount;

    thunder = createSprite(random(10,320),random(10,30),10,10);

    switch(rand){
        case 1: thunder.addImage(thunderImg1)
            break;

        case 2: thunder.addImage(thunderImg2)
            break;

        case 3: thunder.addImage(thunderImg3)
            break; 
            
        case 4: thunder.addImage(thunderImg1)
            break;
            default: break;  
    }

    thunder.scale = random(0.3,0.7);

    }

    
    if(thunderFrame+10 === frameCount && thunder){
        thunder.destroy();
    }
    umbrella.display();

    for(var i = 0;i < maxDrops; i++){

        drop[i].display();
        drop[i].update();
    }
    umbrella.display();
    drawSprites();
}   

