class Game{
    constructor(){
        this.title = createElement("h2");
        this.story = createElement("h5");
        this.playButton = createButton("PLAY");
        this.helpButton = createButton("HELP");
        this.menuButton = createButton("MENU");
        this.backButton = createButton("BACK");

        this.rule1 = createElement("h5");
        this.rule2 = createElement("h5");
        this.rule3 = createElement("h5");
        this.rule4 = createElement("h5");
        this.rule5 = createElement("h5");

        this.level1 = createButton("Level 1");
        this.level2 = createButton("Level 2");
        this.level3 = createButton("Level 3");
        this.level4 = createButton("Level 4");
        this.level5 = createButton("Level 5");
        this.level6 = createButton("Level 6");
        this.level7 = createButton("Level 7");
        this.level8 = createButton("Level 8");
        this.level9 = createButton("Level 9");
        this.level10 = createButton("Level 10");
    }

    displayStart(){
        background("lightblue");
        
        this.title.position(displayWidth/2.8, displayHeight/300);
        this.title.style("font-size", "75px");
        this.title.style("font-family", "cursive");
        this.title.style("color", "blue");
        this.title.html("Dragon Slayer");

        this.story.position(displayWidth/25, displayHeight/7);
        this.story.style("font-size", "35px");
        this.story.style("font-family", "cursive");
        this.story.style("color", "blue");
        this.story.html("You have traveled away from the warmth of your home into the realm of monsters, in search of Dragon King, so you can slay him once and for all! But why do you embark on this journey? The human kingdom and the monster realm have been at war for centuries, and your king has chosen you to go kill the Dragon King so that you can free humankind from the burden of protecting their land from the monster realm. Do you accept this challenge? If so, press 'Play' now!! Your journey awaits you!!")
        
        this.playButton.position(displayWidth/2.15, displayHeight/2);
        this.playButton.style("font-size", "25px");
        this.playButton.style("background-color", "blue");
        this.playButton.style("color", "white");
        this.playButton.style("width", "100px");
        this.playButton.style("height", "60px");
        this.playButton.style("font-family", "cursive");
        this.playButton.mousePressed(()=>{
            this.title.hide();
            this.story.hide();
            this.playButton.hide();
            this.helpButton.hide();
            this.menuButton.hide();
            this.backButton.show();

            gameState = "play";
        })

        this.helpButton.position(displayWidth/2.15, displayHeight/1.6);
        this.helpButton.style("font-size", "25px");
        this.helpButton.style("background-color", "blue");
        this.helpButton.style("color", "white");
        this.helpButton.style("width", "100px");
        this.helpButton.style("height", "60px");
        this.helpButton.style("font-family", "cursive");
        this.helpButton.mousePressed(()=>{
            gameState = "help";
        })

        this.menuButton.position(displayWidth/2.15, displayHeight/1.3);
        this.menuButton.style("font-size", "25px");
        this.menuButton.style("background-color", "blue");
        this.menuButton.style("color", "white");
        this.menuButton.style("width", "100px");
        this.menuButton.style("height", "60px");
        this.menuButton.style("font-family", "cursive");
        this.menuButton.mousePressed(()=>{
            gameState = "menu";
        })
    }

    displayHelp(){
        this.story.hide();
        this.title.hide();
        this.playButton.hide();
        this.helpButton.hide();
        this.menuButton.hide();
        this.backButton.show();

        this.rule1.show();
        this.rule2.show();
        this.rule3.show();
        this.rule4.show();            
        this.rule5.show();

        background("pink");

        this.rule1.position(displayWidth/18, displayHeight/11);
        this.rule1.style("font-size", "35px");
        this.rule1.style("font-family", "cursive");
        this.rule1.style("color", "purple");
        this.rule1.html("1. You have 3 lives.")

        this.rule2.position(displayWidth/18, displayHeight/6);
        this.rule2.style("font-size", "35px");
        this.rule2.style("font-family", "cursive");
        this.rule2.style("color", "purple");
        this.rule2.html("2. You get to choose one additonal weapon (since you already have a gun) before starting the game.")
        
        this.rule3.position(displayWidth/18, displayHeight/4);
        this.rule3.style("font-size", "35px");
        this.rule3.style("font-family", "cursive");
        this.rule3.style("color", "purple");
        this.rule3.html("3. Once you start the game, use the spacebar to jump over the obstacles (elves, dwarves, other spirits, etc.) and to collect any power ups you may find.")
        
        this.rule4.position(displayWidth/18, displayHeight/2.5);
        this.rule4.style("font-size", "35px");
        this.rule4.style("font-family", "cursive");
        this.rule4.style("color", "purple");
        this.rule4.html("4. If you land on an obstacle then you will have to battle it before moving on with the game.")
        
        this.rule5.position(displayWidth/18, displayHeight/2);
        this.rule5.style("font-size", "35px");
        this.rule5.style("font-family", "cursive");
        this.rule5.style("color", "purple");
        this.rule5.html("5. Once you reach the Dragon King, you will have to battle it, and if you win, then you will unlock the next level, but if you lose, then you will have to redo the level.")
        
        this.backButton.position(displayWidth/9, displayHeight/1.4);
        this.backButton.style("font-size", "25px");
        this.backButton.style("background-color", "blue");
        this.backButton.style("color", "white");
        this.backButton.style("width", "100px");
        this.backButton.style("height", "60px");
        this.backButton.style("font-family", "cursive");
        this.backButton.mousePressed(()=>{
            this.story.show();
            this.title.show();
            this.backButton.hide();
            this.playButton.show();
            this.helpButton.show();
            this.menuButton.show();

            this.rule1.hide();
            this.rule2.hide();
            this.rule3.hide();
            this.rule4.hide();
            this.rule5.hide();
            
            gameState = "start";
        })
    }

    displayMenu(){
        this.story.hide();
        this.title.hide();
        this.playButton.hide();
        this.helpButton.hide();
        this.menuButton.hide();
        this.backButton.show();

        background("lightgreen");

        this.level1.position(displayWidth/8, displayHeight/6);
        this.level1.style("font-size", "25px");
        this.level1.style("background-color", "green");
        this.level1.style("color", "white");
        this.level1.style("width", "125px");
        this.level1.style("height", "60px");
        this.level1.style("font-family", "cursive");
        this.level1.mousePressed(()=>{
            gameState = "play";
        })
        this.level2.position(displayWidth/3.5, displayHeight/6);
        this.level2.style("font-size", "25px");
        this.level2.style("background-color", "green");
        this.level2.style("color", "white");
        this.level2.style("width", "125px");
        this.level2.style("height", "60px");
        this.level2.style("font-family", "cursive");
        this.level2.mousePressed(()=>{
            gameState = "play";
        })
        this.level3.position(displayWidth/2.25, displayHeight/6);
        this.level3.style("font-size", "25px");
        this.level3.style("background-color", "green");
        this.level3.style("color", "white");
        this.level3.style("width", "125px");
        this.level3.style("height", "60px");
        this.level3.style("font-family", "cursive");
        this.level3.mousePressed(()=>{
            gameState = "play";
        })
        this.level4.position(displayWidth/1.6, displayHeight/6);
        this.level4.style("font-size", "25px");
        this.level4.style("background-color", "green");
        this.level4.style("color", "white");
        this.level4.style("width", "125px");
        this.level4.style("height", "60px");
        this.level4.style("font-family", "cursive");
        this.level4.mousePressed(()=>{
            gameState = "play";
        })
        this.level5.position(displayWidth/1.3, displayHeight/6);
        this.level5.style("font-size", "25px");
        this.level5.style("background-color", "green");
        this.level5.style("color", "white");
        this.level5.style("width", "125px");
        this.level5.style("height", "60px");
        this.level5.style("font-family", "cursive");
        this.level5.mousePressed(()=>{
            gameState = "play";
        })
        this.level6.position(displayWidth/8, displayHeight/3);
        this.level6.style("font-size", "25px");
        this.level6.style("background-color", "green");
        this.level6.style("color", "white");
        this.level6.style("width", "125px");
        this.level6.style("height", "60px");
        this.level6.style("font-family", "cursive");
        this.level6.mousePressed(()=>{
            gameState = "play";
        })
        this.level7.position(displayWidth/3.5, displayHeight/3);
        this.level7.style("font-size", "25px");
        this.level7.style("background-color", "green");
        this.level7.style("color", "white");
        this.level7.style("width", "125px");
        this.level7.style("height", "60px");
        this.level7.style("font-family", "cursive");
        this.level7.mousePressed(()=>{
            gameState = "play";
        })
        this.level8.position(displayWidth/2.25, displayHeight/3);
        this.level8.style("font-size", "25px");
        this.level8.style("background-color", "green");
        this.level8.style("color", "white");
        this.level8.style("width", "125px");
        this.level8.style("height", "60px");
        this.level8.style("font-family", "cursive");
        this.level8.mousePressed(()=>{
            gameState = "play";
        })
        this.level9.position(displayWidth/1.6, displayHeight/3);
        this.level9.style("font-size", "25px");
        this.level9.style("background-color", "green");
        this.level9.style("color", "white");
        this.level9.style("width", "125px");
        this.level9.style("height", "60px");
        this.level9.style("font-family", "cursive");
        this.level9.mousePressed(()=>{
            gameState = "play";
        })
        this.level10.position(displayWidth/1.3, displayHeight/3);
        this.level10.style("font-size", "25px");
        this.level10.style("background-color", "green");
        this.level10.style("color", "white");
        this.level10.style("width", "125px");
        this.level10.style("height", "60px");
        this.level10.style("font-family", "cursive");
        this.level10.mousePressed(()=>{
            gameState = "finalPlay";
        })
    }
}