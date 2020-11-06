var gameState = "start";

var background_image;

var player, player_running, player_shooting, player_dying;

var dragonGuard, dragonGuard_image, dragonKing, dragonKing_image;

var powerupsGroup, powerup1_image, powerup2_image, powerup3_image, powerup4_image, powerup5_image, 
powerup6_image, powerup7_image;

var obstaclesGroup, obstacle1_image, obstacle2_image, obstacle3_image, obstacle4_image, 
obstacle5_image, obstacle6_image, obstacle7_image;

function preload(){
    background_image = loadImage("images/jungle.jpg");

    player_running = loadAnimation("images/player_images/playerRunning1.png", 
    "images/player_images/playerRunning2.png", "images/player_images/playerRunning3.png", 
    "images/player_images/playerRunning4.png", "images/player_images/playerRunning5.png", 
    "images/player_images/playerRunning6.png")

    player_shooting = loadAnimation("images/player_images/playerShooting1.png", 
    "images/player_images/playerShooting2.png", "images/player_images/playerShooting3.png");

    player_dying = loadAnimation("images/player_images/playerDying1.png",
    "images/player_images/playerDying2.png", "images/player_images/playerDying3.png", 
    "images/player_images/playerDying4.png", "images/player_images/playerDying5.png");

    dragonGuard_image = loadImage("images/dragonGuard.png")
    dragonKing_image = loadImage("images/dragonKing.png");

    powerup1_image = loadImage("images/powerups/air.png");
    powerup2_image = loadImage("images/powerups/doubleAttack.png");
    powerup3_image = loadImage("images/powerups/earth.png");
    powerup4_image = loadImage("images/powerups/fire.png");
    powerup5_image = loadImage("images/powerups/iceball.png");
    powerup6_image = loadImage("images/powerups/reverseAttack.png");
    powerup7_image = loadImage("images/powerups/shield.png");

    obstacle1_image = loadImage("images/obstacles/obstacle1.png");
    obstacle2_image = loadImage("images/obstacles/obstacle2.png");
    obstacle3_image = loadImage("images/obstacles/obstacle3.png");
    obstacle4_image = loadImage("images/obstacles/obstacle4.png");
    obstacle5_image = loadImage("images/obstacles/obstacle5.png");
    obstacle6_image = loadImage("images/obstacles/obstacle6.png");
    obstacle7_image = loadImage("images/obstacles/obstacle7.png");
}

function setup(){
    createCanvas(displayWidth, displayHeight);

    game = new Game();
  
    player = createSprite(50,180,20,50);
    player.addAnimation("player_running", player_running);
    //trex.scale = 0.5;
    player.velocityX = 3;
        
    ground = createSprite(displayWidth/2, displayHeight/2, displayWidth/2, displayHeight/2);
    ground.addImage(background_image);
    ground.x = ground.width /2;
        
    invisibleGround = createSprite(200,180,400,20);
    invisibleGround.visible = false;
        
    powerupsGroup = new Group();
    obstaclesGroup = new Group();
}

function draw(){
    if(gameState === "start"){
        game.displayStart();
    }
    else if(gameState === "help"){
        game.displayHelp();
    }
    else if(gameState === "menu"){
        game.displayMenu();
    }
    else if(gameState === "play"){
        game.displayPlay();
    }
}