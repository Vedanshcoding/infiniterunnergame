var steve,steveImg
var vex,vexImg,vexGroup
var wither, witherImg,witherGroup
var piglinBrute, piglinBruteImg,piglinBruteGroup
var road,roadImg
var diamond, diamondImg,diamondGroup
var netherite, netheriteImg,netheriteGroup
var totem, totemImg,totemGroup
var minecraftSound
var score = 0
var PLAY = 1
var END = 0
var gameState = 1



function preload(){
    steveImg = loadAnimation("Runner-1.png","Runner-2.png")
    witherImg = loadImage("witherimage.png")
    vexImg = loadImage("veximage.png")
    piglinBruteImg = loadImage("piglinbruteimage.png")
    roadImg = loadImage("Road.png")
    diamondImg = loadImage("diamond.png")
    netheriteImg = loadImage("netherite.png")
    totemImg = loadImage("totem.png")
    minecraftSound = loadSound("minecraft music.mp3")
    steveImage2 = loadAnimation("Runner-1.png")
    


}

function setup() {
    createCanvas(600,600)

    road = createSprite(300,300)
    road.addImage(roadImg)
    road.velocityY = 5
   


    steve = createSprite(300,550,40,40)
    steve.addAnimation("collided",steveImage2)
    steve.addAnimation("steveRunning",steveImg)
    
    steve.scale = 0.05

    vexGroup = new Group()  
    witherGroup = new Group()
    piglinBruteGroup = new Group()
    diamondGroup = new Group()
    netheriteGroup = new Group()
    totemGroup = new Group()  
    
    edges = createEdgeSprites()
    
  
}

function draw() {
    background(0)
    
   
  
  
    if(gameState===PLAY){
        steve.changeAnimation("steveRunning",steveImg)
        if(road.y > 600){
            road.y = height/2
         }
         steve.x = World.mouseX
         steve.collide(edges)

         createVex()
         createWither()
         createPiglinBrute()
         createDiamonds()
         createNetherite()
         createTotems()
         if(diamondGroup.isTouching(steve)){
             score = score+10
             diamondGroup.destroyEach()
         }
         if(netheriteGroup.isTouching(steve)){
            score = score+20
            netheriteGroup.destroyEach()

        }
        if(totemGroup.isTouching(steve)){
            score = score+50
            totemGroup.destroyEach()
            
        }

        
    if(witherGroup.isTouching(steve)||vexGroup.isTouching(steve)||piglinBruteGroup.isTouching(steve)){
        gameState = END
        witherGroup.destroyEach()
        vexGroup.destroyEach()
        piglinBruteGroup.destroyEach()
        steve.x = 300
        steve.y = 550
        road.velocityY = 0
        steve.changeAnimation("collided",steveImage2)

    }
  
    
    
   
   

   

  
  }
  
  
 
    
 
 drawSprites()
 textSize(30)
 fill(255)
 
 text("SCORE: "+ score,350,25)
 
}
function createVex(){
    if(frameCount % 100 == 0){
        vex = createSprite(Math.round(random(50,550),40,10,10))
        vex.addImage(vexImg)
        vex.velocityY = 5
        vex.scale = 0.08
        vex.lifetime = 125
        vexGroup.add(vex)
    }
}

function createWither(){
    if(frameCount % 350 === 0){
        wither = createSprite(Math.round(random(50,550),0,10,10))
        wither.addImage(witherImg)
        wither.scale = 0.25
        wither.velocityY = 8
        wither.lifetime = 80
        witherGroup.add(wither)
    }
}
function createPiglinBrute(){
    if(frameCount % 200 === 0){
        piglinBrute = createSprite(Math.round(random(50,550),0,10,10))
        piglinBrute.addImage(piglinBruteImg)
        piglinBrute.velocityY = 10
        piglinBrute.scale = 0.05
        piglinBrute.lifetime = 65
        piglinBruteGroup.add(piglinBrute)
    }
}
function createDiamonds(){
    if(frameCount % 150 === 0){
        diamond = createSprite(Math.round(random(50,550),0,10,10))
        diamond.addImage(diamondImg)
        diamond.velocityY = 15
        diamond.scale = 0.1
        diamond.lifetime = 65
        diamondGroup.add(diamond)
    }
}
function createNetherite(){
    if(frameCount % 400 === 0){
        netherite= createSprite(Math.round(random(50,550),0,10,10))
        netherite.addImage(netheriteImg)
        netherite.velocityY = 10
        netherite.scale = 0.09
        netherite.lifetime = 65
        netheriteGroup.add(netherite)
    }
}
function createTotems(){
    if(frameCount % 550 === 0){
        totem= createSprite(Math.round(random(50,550),0,10,10))
        totem.addImage(totemImg)
        totem.velocityY = 10
        totem.scale = 0.05
        totem.lifetime = 65
        totemGroup.add(totem)
    }
}