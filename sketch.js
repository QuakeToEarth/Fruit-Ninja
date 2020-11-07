var swordImage, sword
var fruit1Image,fruit1
var fruit2Image,fruit2
var fruit3Image,fruit3
var fruit4Image,fruit4
var fruitGroup
var swoosh
var score = 0

function preload(){
 swordImage = loadImage("sword.png")
 fruit1Image = loadImage("fruit1.png") 
 fruit2Image = loadImage("fruit2.png") 
 fruit3Image = loadImage("fruit3.png") 
 fruit4Image = loadImage("fruit4.png") 
 swoosh = loadSound("knifeSwooshSound.mp3") 
  
}
function setup(){
 createCanvas(600,600) 
 sword = createSprite(100,100,20,40) 
 sword.addImage(swordImage)
 fruitGroup = new Group()
  
  
}

function draw(){

  
background("lightBlue")
  text ("score = "+score,500,50)  
sword.x = mouseX
sword.y = mouseY
  
  
 fruits() 
if (fruitGroup.isTouching(sword)){
  fruitGroup.destroyEach()
  swoosh.play()
  score = score + 2
  
}
  if (score>5)
    {
    fruitGroup.setVelocityXEach(-6);  
      
      
    }
   if (score>10)
    {
    fruitGroup.setVelocityXEach(-15);  
      
      
    }
  
  
  
drawSprites();
}
function fruits(){
if (frameCount % 60 === 0){
fruit = createSprite(620,300,20,20)
  fruit.y = Math.round(random(30,570))
fruit.velocityX = -5
var r = Math.round(random(1,4))
switch(r){
  case 1:fruit.addImage(fruit1Image);
        break
 case 2:fruit.addImage(fruit2Image);
        break
 case 3:fruit.addImage(fruit3Image);
        break 
 case 4:fruit.addImage(fruit4Image);
        break       
        
      
}
fruit.scale = 0.2
fruitGroup.add(fruit)
}
  
  
  
}