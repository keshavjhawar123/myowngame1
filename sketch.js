var helicopterIMG,packageSprite,helicopterSprite,groundSprite
var player1,player2,player3,player4,player5,player6,player7,player8
var player1Name,player2Name,player3Name,player4Name;
function preload()
{
  player1Img=loadImage("images/player 1.png")
  player2Img=loadImage("images/player 2.png")
  player3Img=loadImage("images/player 3.png")
  player4Img=loadImage("images/player 4.png")
  player5Img=loadImage("images/player 5.png")
  player6Img=loadImage("images/player 6.png")
  player7Img=loadImage("images/player 7.png")
  player8Img=loadImage("images/player 8.png")

  map1Img= loadImage("images/map1.png");
  map2Img= loadImage("images/map2.png");
  map3Img= loadImage("images/map3.png");

}

var player1, player2

function setup() {
  createCanvas(windowWidth,windowHeight);
  player1Name="player1";
  player2Name="player2";
  player3Name="player3";
  player4Name="player4";
  player5Name="player5";
  player6Name="player6";
  player7Name="player7";
  player8Name="player8";
  map2= createSprite(380,480,400,200);
map2.addImage(map2Img);

map3= createSprite(860,400,400,200);
map3.addImage(map3Img);
map3.mirror=1;
  
map1= createSprite(400,height-200,400,200);
map1.addImage(map1Img);


  // map1.scale=1.5;
 // create sprites for players
player1 = createSprite(95,603,50,50);
player1.addImage(player1Img);
player1.scale=0.2;

player2 = createSprite(106,284,50,50);
player2.addImage(player2Img);
player2.scale=0.2;
player3 = createSprite(100,436,50,50);
player3.addImage(player3Img);
player3.scale=0.2;
player4 = createSprite(85,124,50,50);
player4.addImage(player4Img);
player4.scale=0.2;
player5 = createSprite(818,98,50,50);
player5.addImage(player5Img);
player5.scale=0.2;
player6 = createSprite(813,257,50,50);
player6.addImage(player6Img);
player6.scale=0.2;
player7 = createSprite(816,400,50,50);
player7.addImage(player7Img);
player7.scale=0.2;
player8 = createSprite(818,644,50,50);
player8.addImage(player8Img);
player8.scale=0.2;
//player1.rotation=90;
//player1.velocityX=2;



}

function draw() {
  background("white"); 
  textSize(30);
  fill("green");
 text(mouseX+" , "+mouseY, 200,100);
 text(player1Name,player1.x-20,player1.y-60)
 text(player2Name,player2.x-20,player2.y-60)
 text(player3Name,player3.x-20,player3.y-60)
 text(player4Name,player4.x-20,player4.y-60)
 text(player5Name,player5.x-20,player5.y-60)
 text(player6Name,player6.x-20,player6.y-60)
 text(player7Name,player7.x-20,player7.y-60)
 text(player8Name,player8.x-20,player8.y-60)



 drawSprites();
}