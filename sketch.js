var fundo
var menino 
var invisibleground
var Quadrado
var meninoimg

function preload() {
    fundo = loadImage("fundo.jpg");
    meninoimg = loadImage("m1.png");
}

function setup() {
    // cria espaço no jogo


    createCanvas(windowWidth, windowHeight);
    console.log(createCanvas);
    menino = createSprite(500,600);
    menino.addImage(meninoimg);
    


    invisibleground = createSprite(0,windowHeight,width,20);
   // Quadrado = createSprite()
}

function draw() {
    //fundo
 background(fundo);

drawSprites();
}