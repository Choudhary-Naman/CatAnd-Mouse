var bgImg,bg,cat,catImg,catImg1,catImg2,mouse,mouseImg,mouseImg2
function preload() {
    //load the images here
    bgImg=loadImage("garden.png");

    catImg=loadImage("cat1.png");
    catImg1=loadAnimation("cat2.png","cat3.png");
    catImg2=loadAnimation("cat4.png");

    mouseImg=loadAnimation("mouse1.png");
    mouseImg1=loadAnimation("mouse2.png","mouse3.png");
    mouseImg2=loadAnimation("mouse4.png");

}

function setup(){
    createCanvas(1000,500);
    //create tom and jerry sprites here
    bg=createSprite(300,200,20,100);
    bg.addImage(bgImg)

    cat=createSprite(700,400);
    cat.addImage(catImg);
    cat.scale=0.08;

    mouse=createSprite(100,400);
    mouse.addAnimation("mouse", mouseImg);
    mouse.setCollider("circle",0,0,100);

    mouse.scale=0.08;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.isTouching(mouse)){
        cat.addAnimation("catEatingMouse",catImg2);
        cat.changeAnimation("catEatingMouse");
        cat.velocityX=0;
        mouse.addAnimation("mouseTeasingCat",mouseImg2);
        mouse.changeAnimation("mouseTeasingCat");
    }

    drawSprites();
}
function keyPressed(){

    if(keyCode === LEFT_ARROW){



       mouse.addAnimation("mouseTeasing",mouseImg1);
       mouse.frameDelay = 25;
       mouse.changeAnimation("mouseTeasing");

       cat.velocityX=-5;
       cat.addAnimation("catWalking",catImg1);
       cat.frameDelay = 25;
       cat.changeAnimation("catWalking");

       
    }
}

