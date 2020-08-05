var thikness,wall
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52)
  thikness  = random(22,83)
  wall = createSprite(1200,200,thikness,200);
  bullet = createSprite(50, 200, 80, 30);
}

function draw() {
  background(2); 
  bullet.velocityX = speed
  wall.shapeColor = color(80,80,80)
  bullet.shapeColor = "white"
  if (hasColllided(bullet,wall)){
    bullet.velocityX = 0
    var damage = 0.5*weight * speed * speed / (thikness * thikness * thikness);
    if (damage > 10){
      wall.shapeColor = color(255,0,0);
    }

    if (damage < 10){
      wall.shapeColor = color(0,255,0);
    }
  }


  drawSprites();
}
function hasColllided (lbullet,lwall){
  bulletRightEdge = lbullet.x + bullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}
