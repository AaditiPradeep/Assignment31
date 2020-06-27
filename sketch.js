const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

   ground = new Ground(240,height,480,20);

   for(var k = 0; k<=width; k=k+80){
    divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
    }

    for (var i = 40; i<= width; i= i+50){
        plinkos.push(new Plinko(i,75));
    }
    
    for (var i = 15; i<= width-10; i= i+50){
        plinkos.push(new Plinko(i,175));
    }
    
    for (var i = 40; i<= width; i= i+50){
        plinkos.push(new Plinko(i,275));
    }
    
    for (var i = 15; i<= width-10; i= i+50){
        plinkos.push(new Plinko(i,375));
    }

}
   

function draw(){
    background(0,0,0);
    Engine.update(engine);
    
    ground.display();
    
    

   for (var j=0 ; j<plinkos.length ; j++){
       plinkos[j].display();
   }

   if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}

  
   for(var k=0; k<divisions.length; k++){
       divisions[k].display();
   }

   for (var p=0 ; p<particles.length ; p++){
    particles[p].display();
}

}      