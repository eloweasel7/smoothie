let p = ["pop", "dance pop", "pop dance", "teen pop", "viral pop", "social media pop", "shimmer pop", "sunshine pop", "bubblegum pop", "candy pop", "post-teen pop", "adult standards", "mellow gold", "soft rock", "heartland rock"];
let edm = ["edm", "electro house", "synthpop", "europop", "electropop", "big room", "disco", "house", "progressive house", "trance", "deep house", "tech house", "slap house", "progressive electro house", "deep groove house"];
let hiphoprap = ["hip hop", "conscious hip hop", "cloud rap", "rage rap", "hip pop", "miami hip hop", "gangster rap", "underground hip hop", "east coast hip hop", "west coast rap", "chicago rap", "detroit hip hop", "queens hip hop", "new orleans rap", "memphis hip hop", "dirty south rap", "rap", "pop rap", "melodic rap", "trap latino", "atl hip hop", "southern hip hop", "french hip hop", "trap argentino", "rap metal", "conscious hip hop", "cloud rap", "rage rap", "hip pop", "miami hip hop"];
let rock = ["rock", "modern rock", "classic rock", "alternative rock", "post-grunge", "nu metal", "hard rock", "modern alternative rock", "indie rock", "punk", "alternative metal", "psychedelic rock", "glam metal", "stomp and holler", "garage rock", "permanent wave", "album rock", "heartland rock", "psychedelic rock", "glam rock", "piano rock", "country rock", "alternative metal", "glam metal", "metalcore", "grunge", "emo rap", "hardcore punk", "post-hardcore", "screamo", "thrash metal", "speed metal"];
let indiealt = ["pov: indie", "indie", "alt z", "modern indie pop", "bedroom pop", "indie pop", "indie rock", "indie folk", "dream pop", "shoegaze", "britpop", "madchester", "indie soul", "garage rock", "post-punk"];
let rb = ["r&b", "soul", "neo soul", "funk", "alternative r&b", "british soul", "contemporary r&b", "indie soul", "funk metal", "funk carioca", "funk mtg", "funk rock", "classic soul", "quiet storm", "neo mellow", "afrobeat"];
let regional = ["k-pop", "j-pop", "filmi", "modern bollywood", "afrobeats", "opm", "turkish pop", "j-rock", "polish hip hop", "anime", "trap brasileiro", "uk hip hop", "ska", "mpb", "pagode", "rap francais", "dance rock", "sleep", "pluggnb", "urbano latino", "reggaeton", "latin pop", "reggaeton flow", "latin alternative", "latin hip hop", "latin rock", "tropical", "tropical house", "urbano espanol", "salsa", "cumbia pop", "reggae fusion", "dembow", "perreo", "musica mexicana", "corrido", "norteno", "sierreno", "banda", "corridos tumbados", "sertanejo universitario", "ranchera", "grupera", "tejano"];
let country = ["country", "contemporary country", "country road", "modern country rock", "folk rock", "singer-songwriter", "singer-songwriter pop", "acoustic pop", "modern folk rock", "alternative country", "ccm", "christian music"];





let gameState = 0;

var bg;
var recipetab;
var blender;
var lid;
var s1;
var s2;
var s3;

var timer;
var lidAngle;

var songImage1;
var songImage2;
var songImage3;
var data1received;
var data2received;
var data3received;

var fruits;
var fruitArray;

var cup;
var filling;
var straw;

var transition;

let color = [];

let font;

function preload(){
    bg = loadImage('background.png');
    recipetab = loadImage("recipetab.png");
    blender = loadImage('blender.png');
    lid = loadImage('lid.png');
    s1 = loadImage('smoothie1.png');
    s2 = loadImage('smoothie2.png');
    s3 = loadImage('smoothie3.png');
    cup = loadImage("cup.png");
    filling = loadImage("filling.png");
    straw = loadImage("straw.png");
    font = loadFont("font.ttf");

    timer = 0;
    lidAngle = 0;


}

function setup() {
    textFont(font, windowWidth/32);

    createCanvas(windowWidth, windowHeight);
    //translate(-windowWidth/2, -windowHeight/2);
    textAlign(CENTER, CENTER);

    imageMode(CENTER);
    
    blender.resize(windowWidth/2, 0);
    lid.resize(windowWidth/2, 0);
    s1.resize(windowWidth/3, 0);
    s2.resize(windowWidth/3, 0);
    s3.resize(windowWidth/3, 0);
    cup.resize(windowWidth/3, 0);
    filling.resize(windowWidth/3, 0);
    straw.resize(windowWidth/3, 0);

    data1received = false;
    data2received = false;
    data3received = false;

    fruits = [];

    fruitArray = [];
    for(let i = 0; i < 9; i++){
        let f = new Fruit();
        fruitArray.push(f);
    }

    transition = false;
}


function draw() {


    if(!data1received){
        if(document.getElementById("song1url").innerText.length>0){
            data1received = true;
            var imageData1 = document.getElementById("song1url").innerText;
            songImage1 = loadImage(imageData1);
        }
    }

    if(!data2received){
        if(document.getElementById("song2url").innerText.length>0){
            data2received = true;
            var imageData2 = document.getElementById("song2url").innerText;
            songImage2 = loadImage(imageData2);
        }
    }

    if(!data3received){
        if(document.getElementById("song3url").innerText.length>0){
            data3received = true;
            var imageData3 = document.getElementById("song3url").innerText;
            songImage3 = loadImage(imageData3);
        }
    }


    //background(200);
    image(bg, windowWidth/2, windowHeight/2);

    if(gameState === 0){
        textSize(width/16);
        fill(214, 92, 21);
        text("Spotify Smoothie",width/2,height/3);

        if(mouseX > width/2 - width/32 && mouseX < width/2 + width/32 && mouseY > height*3/4 - height/32 && mouseY < height*3/4 + height/32){
            fill(100);
        }else{
            fill(0);
        }
        textSize(width/32);
        text("start", windowWidth/2, windowHeight*3/4);

        fill(0);
    }
    
    
    
    else if(gameState === 1){

        //console.log(document.getElementById("popularity").innerText);
        text("Welcome to Spotify Smoothie!", width/2, height/8);
        text("Spotify smoothie is a web application that transforms", width/2, height*2/8);
        text("your music taste into a custom smoothie.", width/2, height*3/8);


        text("click anywhere to start", width/2, height*5/8);





            

    }



    else if(gameState === 2){
        timer ++;

        if(timer < 40){
            push();
            let angle = -PI/32;
            let shearFactor = 1 / tan(HALF_PI - angle);

            applyMatrix(1, 0, shearFactor, 1, 0, 0);
            slideIn(blender, windowWidth*3/2 - windowWidth/64, windowWidth/2 - windowWidth/64, windowHeight/2, 50, timer);
            slideIn(lid, windowWidth*3/2 - windowWidth/16.5, windowWidth/2 - windowWidth/16.5, windowHeight/2 - windowWidth/8, 50, timer);
            if(transition === true){
                console.log('going');
                slideIn(s1, windowWidth/4 + windowWidth/256, -windowWidth + windowWidth/4, windowHeight*3/5, 50, timer);
                slideIn(s2, windowWidth/2 + windowWidth/256, -windowWidth + windowWidth/2, windowHeight*3/5, 50, timer);
                slideIn(s3, windowWidth*3/4 + windowWidth/256, -windowWidth + windowWidth*3/4, windowHeight*3/5, 50, timer);
            }
            pop();
            
            //alt sliding mechanism

        }else if (timer >= 40 && timer < 50){
            push();
            let angle = -1*(abs(50 - timer)/10*PI/32);
            let shearFactor = 1 / tan(HALF_PI - angle);

            applyMatrix(1, 0, shearFactor, 1, 0, 0);
            slideIn(blender, windowWidth*3/2 - windowWidth/64, windowWidth/2 - windowWidth/64, windowHeight/2, 50, timer);
            slideIn(lid, windowWidth*3/2 - windowWidth/16.5, windowWidth/2 - windowWidth/16.5, windowHeight/2 - windowWidth/8, 50, timer);
            pop();
        }else if (timer >= 50 && timer < 100){
            image(blender, windowWidth/2 - windowWidth/64, windowHeight/2);
            image(lid, windowWidth/2 - windowWidth/16.5, windowHeight/2 - windowWidth/8);
        }else if (timer >= 100 && timer < 150){
            openCloseLid(-3*PI/4, 50);
        }else if(timer >= 150 && timer <300){
            for(let i = 0; i < 9; i++){
                if(timer > 175 + i*10){
                    fruitArray[i].startFall();
                }
                fruitArray[i].displayate();
            }

            image(blender, windowWidth/2 - windowWidth/64, windowHeight/2);
            push();
            translate(windowWidth/2 - windowWidth/16.5, windowHeight/2 - windowWidth/8);
            rotate(lidAngle);
            image(lid, 0,0);
            pop();
        }else if(timer >= 300 && timer <350){
            openCloseLid(3*PI/4, 50);
        }else if (timer >= 350 && timer < 400){
            image(blender, windowWidth/2 - windowWidth/64, windowHeight/2);
            image(lid, windowWidth/2 - windowWidth/16.5, windowHeight/2 - windowWidth/8);
        }else if(timer >= 400 && timer <650){
            shake();
        }else if(timer >= 650 && timer <700){
            image(blender, windowWidth/2 - windowWidth/64, windowHeight/2);
            image(lid, windowWidth/2 - windowWidth/16.5, windowHeight/2 - windowWidth/8);
        }else if (timer >= 700 && timer < 710){
            push();
            let angle = -1*(PI/32 - abs(710 - timer)/10*PI/32);
            let shearFactor = 1 / tan(HALF_PI - angle);

            applyMatrix(1, 0, shearFactor, 1, 0, 0);
            slideIn(blender, windowWidth/2 - windowWidth/64, -windowWidth/4 - windowWidth/64, windowHeight/2, 750, timer);
            slideIn(lid, windowWidth/2 - windowWidth/16.5, -windowWidth/4 - windowWidth/16.5, windowHeight/2 - windowWidth/8, 750, timer);
            pop();
        }else if (timer >= 710 && timer < 750){
            push();
            let angle = -PI/32;
            let shearFactor = 1 / tan(HALF_PI - angle);

            applyMatrix(1, 0, shearFactor, 1, 0, 0);
            slideIn(blender, windowWidth/2 - windowWidth/64, -windowWidth/4 - windowWidth/64, windowHeight/2, 750, timer);
            slideIn(lid, windowWidth/2 - windowWidth/16.5, -windowWidth/4 - windowWidth/16.5, windowHeight/2 - windowWidth/8, 750, timer);
            pop();
        }
        
        
        //blender goes out
        
        
        
        
        else if(timer >= 750 && timer < 790){
            push();
            let angle = -PI/32;
            let shearFactor = 1 / tan(HALF_PI - angle);

            applyMatrix(1, 0, shearFactor, 1, 0, 0);
            slideIn(recipetab, windowWidth*3/2, windowWidth/2, windowHeight/2, 800, timer);
            tint(document.getElementById("popularity").innerText*2.55,document.getElementById("popularity").innerText*2.55,document.getElementById("popularity").innerText*2.55);
            slideIn(straw, windowWidth*3/2 - windowWidth/64, windowWidth/2 - windowWidth/64, windowHeight*4/7, 800, timer);
            tint(color[0], color[1], color[2]);
            slideIn(filling, windowWidth*3/2 - windowWidth/64, windowWidth/2 - windowWidth/64, windowHeight*4/7, 800, timer);
            tint(255);
            slideIn(cup, windowWidth*3/2 - windowWidth/64, windowWidth/2 - windowWidth/64, windowHeight*4/7, 800, timer);
            pop();

        }else if (timer >= 790 && timer < 800){
            push();
            let angle = -1*(abs(800 - timer)/10*PI/32);
            let shearFactor = 1 / tan(HALF_PI - angle);

            applyMatrix(1, 0, shearFactor, 1, 0, 0);
            slideIn(recipetab, windowWidth*3/2, windowWidth/2, windowHeight/2, 800, timer);
            tint(document.getElementById("popularity").innerText*2.55,document.getElementById("popularity").innerText*2.55,document.getElementById("popularity").innerText*2.55);

            slideIn(straw, windowWidth*3/2 - windowWidth/64, windowWidth/2 - windowWidth/64, windowHeight*4/7, 800, timer);
            tint(color[0], color[1], color[2]);
            slideIn(filling, windowWidth*3/2 - windowWidth/64, windowWidth/2 - windowWidth/64, windowHeight*4/7, 800, timer);
            tint(255);
            slideIn(cup, windowWidth*3/2 - windowWidth/64, windowWidth/2 - windowWidth/64, windowHeight*4/7, 800, timer);
            pop();
        }
        else if (timer >= 800){
            image(recipetab, windowWidth/2, windowHeight/2);
            tint(document.getElementById("popularity").innerText*2.55,document.getElementById("popularity").innerText*2.55,document.getElementById("popularity").innerText*2.55);

            image(straw, windowWidth/2 - windowWidth/64, windowHeight*4/7);
            tint(color[0], color[1], color[2]);
            image(filling, windowWidth/2 - windowWidth/64, windowHeight*4/7);
            tint(255);
            image(cup, windowWidth/2 - windowWidth/64, windowHeight*4/7);
            textAlign(CENTER);
            text("Ingredients", width/6, height/5);
            textSize(width/64);
            text("hover over the images!", width/6, height/4);
            textSize(width/32);

            //top left
            fruitArray[0].display(width/6 - width/16, height/5 + height/4);
            //bottom left
            fruitArray[8].display(width/6 - width/16, height/5 + height/2);
            //top right
            fruitArray[4].display(width/6 + width/16, height/5 + height/4);

            fill(document.getElementById("popularity").innerText*2.55);
            ellipse(width/6 + width/16, height/5 + height/2, width/16, width/16);
            fill(0);

            if(mouseX > width/6 - width/16 - width/50 && mouseX < width/6 - width/16 + width/50 && mouseY > height/5 + height/4 - width/50 && mouseY < height/5 + height/4 + width/50){
                image(recipetab, windowWidth*8/7, windowHeight/2, -1*width, height);
                text(fruits[0].split(".")[0], width*13/16, height/5);
                
                image(songImage1, width*13/16, height/2, width/6, width/6);
                textSize(width/64);
                text("represents", width*13/16, height/2 - height/4);
                text("your number one song:", width*13/16, height/2-height/5);
                text(document.getElementById("song1").innerText, width*13/16, height/2+height/5);
                textSize(width/32);
            }else if(mouseX > width/6 + width/16 - width/50 && mouseX < width/6 + width/16 + width/50 && mouseY > height/5 + height/4 - width/50 && mouseY < height/5 + height/4 + width/50){
                image(recipetab, windowWidth*8/7, windowHeight/2, -1*width, height);
                text(fruits[1].split(".")[0], width*13/16, height/5);
                image(songImage2, width*13/16, height/2, width/6, width/6);
                textSize(width/64);
                text("represents", width*13/16, height/2 - height/4);
                text("your number two song:", width*13/16, height/2-height/5);
                text(document.getElementById("song2").innerText, width*13/16, height/2+height/5);
                textSize(width/32);
            }else if(mouseX > width/6 - width/16 - width/50 && mouseX < width/6 - width/16 + width/50 && mouseY > height/5 + height/2 - width/50 && mouseY < height/5 + height/2 + width/50){
                image(recipetab, windowWidth*8/7, windowHeight/2, -1*width, height);
                text(fruits[2].split(".")[0], width*13/16, height/5);
                image(songImage3, width*13/16, height/2, width/6, width/6);
                textSize(width/64);
                text("represents", width*13/16, height/2 - height/4);
                text("your number three song:", width*13/16, height/2-height/5);
                text(document.getElementById("song3").innerText, width*13/16, height/2+height/5);
                textSize(width/32);
            }else if(mouseX > width/6 + width/16 - width/50 && mouseX < width/6 + width/16 + width/50 && mouseY > height/5 + height/2 - width/50 && mouseY < height/5 + height/2 + width/50){
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                image(recipetab, windowWidth*8/7, windowHeight/2, -1*width, height);
                text("Straw Color", width*13/16, height/5);
                //image(songImage3, width*13/16, height/2, width/6, width/6);
                fill(document.getElementById("popularity").innerText*2.55, document.getElementById("popularity").innerText*2.55, document.getElementById("popularity").innerText*2.55);
                ellipse(width*13/16, height/2, width/6, width/6);
                fill(0);
                textSize(width/64);
                text("represents", width*13/16, height/2 - height/4);
                text("your number one artist:", width*13/16, height/2-height/5);
                text(document.getElementById("artist1").innerText, width*13/16, height/2+height/5);
                //text("popularity of " + toString(document.getElementById("popularity").innerText) + "/100", width*13/16, height/2+height/5 + height/32);
                text("darker color is less popular", width*13/16, height/2+height/5 + height*2/32);
                text("and lighter is more popular", width*13/16, height/2+height/5 + height*3/32);
                textSize(width/32);
            }
            if(mouseX > width/2 - width/10 && mouseX < width/2 + width/10 && mouseY > height*5/6 - height/32 && mouseY < height*5/6 + height/32){
                fill(100);
            }else{
                fill(0);
            }
            text("back to login", width/2, height*5/6);
            fill(0);
        }
    }
}



function windowResized(){
    resizeCanvas(windowWidth, windowHeight); 

    blender.resize(windowWidth/2, 0);
    lid.resize(windowWidth/2, 0);

}
    
function mouseClicked(){
    if(gameState === 0){
        if(mouseX > width/2 - width/32 && mouseX < width/2 + width/32 && mouseY > height*3/4 - height/32 && mouseY < height*3/4 + height/32){
            console.log(findLiquid());
            findFruits();
            transition = false;
            gameState += 1;
            timer = 0;
        }
    }


    else if(gameState === 1){
        
            console.log(findLiquid());
            findFruits();
            transition = false;
            gameState += 1;
            timer = 0;
        
    }

    else if(gameState === 2){
        if(timer > 800 && mouseX > width/2 - width/10 && mouseX < width/2 + width/10 && mouseY > height*5/6 - height/32 && mouseY < height*5/6 + height/32){

            window.location.replace('http://localhost:5173/callback');
        }

    }
}



function imageLoad(){
    var imageData1 = document.getElementById("song1url").innerText;
    console.log(imageData1);
    songImage1 = createImg(imageData1);
    songImage1.filter(GRAY);
}

function openCloseLid(angle, time){
    lidAngle += angle/time;
    image(blender, windowWidth/2 - windowWidth/64, windowHeight/2);
    push();
    translate(windowWidth/2 - windowWidth/16.5, windowHeight/2 - windowWidth/8);
    rotate(lidAngle);
    image(lid, 0,0);
    pop();
}

function slideIn(img, location1, location2, yPos, time, currentTime){
    var change = (location1-location2)/50;
    image(img, location2 + change * (time - currentTime), yPos);
}



function shake(){
    var tempX = random(-width/256,width/256);
    var tempY = random(-width/256,width/256);
    push();
    translate(windowWidth/2+ tempX, windowHeight/2 + tempY)
    image(blender, -1*windowWidth/64, 0);
    image(lid, -1*windowWidth/16.5, -1*windowWidth/8);
    pop();
}


function findLiquid(){
    var result = [];
    for(let j = 1; j < 4; j++){
        if(j === 1){
            var temporary = document.getElementById("genre1").innerText;
        }else if(j === 1){
            var temporary = document.getElementById("genre2").innerText;
        }else{
            var temporary = document.getElementById("genre2").innerText;
        }






        for(let i = 0; i < pop.length; i++){
            if(temporary === p[i]){
                result[0] = (p[i][0]);
                result[1] = ("2% milk");
                return result;
            }
        }
    
        for(let i = 0; i < edm.length; i++){
            if(temporary === edm[i]){
                result.push(edm[i]);
                result.push("energy drink");
                return result;
            }
        }
    
        for(let i = 0; i < hiphoprap.length; i++){
            if(temporary === hiphoprap[i]){
                result.push(hiphoprap[i]);
                result.push("orange juice");
                return result;
            }
        }
    
        for(let i = 0; i < rock.length; i++){
            if(temporary === rock[i]){
                result.push(rock[i]);
                result.push("grapefruit juice");
                return result;
            }
        }
    
        for(let i = 0; i < indiealt.length; i++){
            if(temporary === indiealt[i]){
                result.push(indiealt[i]);
                result.push("oat milk");
                return result;
            }
        }
    
        for(let i = 0; i < rb.length; i++){
            if(temporary === rb[i]){
                result.push(rb[i]);
                result.push("coconut water");
                return result;
            }
        }
        
        for(let i = 0; i < regional.length; i++){
            if(temporary === regional[i]){
                result.push(regional[i]);
                result.push("apple juice");
                return result;
            }
        }
        
        for(let i = 0; i < country.length; i++){
            if(temporary === country[i]){
                result.push(country[i]);
                result.push("whole milk");
                return result;
            }
        }

    }

    result.push(document.getElementById("genre1").innerText);
    result.push("water");
    return result;
}

function findFruits(){

    songImage1.loadPixels();
    songImage1.copy(0,0,songImage1.width, songImage1.height,0,0,1,1);
    var temp1 = songImage1.get(0,0);

    songImage2.loadPixels();
    songImage2.copy(0,0,songImage2.width, songImage2.height,0,0,1,1);
    var temp2 = songImage2.get(0,0);

    songImage3.loadPixels();
    songImage3.copy(0,0,songImage3.width, songImage3.height,0,0,1,1);
    var temp3 = songImage3.get(0,0);

    console.log(temp2[0], temp2[1], temp2[2]);
    //now each temp variable holds a color that represents the entire song cover

    fruits.push(toFruit(rgbToRoygbiv(temp1[0], temp1[1], temp1[2])));
    fruits.push(toFruit(rgbToRoygbiv(temp2[0], temp2[1], temp2[2])));
    fruits.push(toFruit(rgbToRoygbiv(temp3[0], temp3[1], temp3[2])));


    for(let i = 0; i < 9; i++){
        if(i < 3){
            fruitArray[i].setFruit(fruits[0]);
        }else if(i<6){
            fruitArray[i].setFruit(fruits[1]);
        }else{
            fruitArray[i].setFruit(fruits[2]);
        }
}




    var temp = [0,0,0];

    console.log('running');
    for(let i = 0; i < 3; i++){
        if(fruits[i] === "strawberry.png"){
            temp[0] += 255;
            temp[1] += 107;
            temp[2] += 107;
        }else if(fruits[i] === "peach.png"){
            temp[0] += 255;
            temp[1] += 173;
            temp[2] += 51;
        }else if(fruits[i] === "mango.png"){
            temp[0] += 255;
            temp[1] += 248;
            temp[2] += 51;
        }else if(fruits[i] === "kale.png"){
            temp[0] += 32;
            temp[1] += 158;
            temp[2] += 74;
        }else if(fruits[i] === "blueberry.png"){
            temp[0] += 22;
            temp[1] += 35;
            temp[2] += 171;
            console.log('yay');
            console.log(temp);
        }else if(fruits[i] === "grape.png"){
            temp[0] += 193;
            temp[1] += 107;
            temp[2] += 217;
        }else if(fruits[i] === "banana.png"){
            temp[0] += 255;
            temp[1] += 255;
            temp[2] += 255;
        }else if(fruits[i] === "blackberry.png"){

        }
    }

    color = [temp[0]/3, temp[1]/3, temp[2]/3];
    console.log(color);
    
}


function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
  
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
  
    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return { h, s, l };
  }
  
  function hslToRoygbiv(h, s, l) {
      if (s === 0) {
        if(r > 150){
            return "white";
        }else{
            return "black";
        }
      }

      

      const hueDegrees = h * 360;
  
      if (hueDegrees >= 0 && hueDegrees < 15){
        console.log(hueDegrees); return "red";
      }
      if (hueDegrees >= 15 && hueDegrees < 30) return "orange";
      if (hueDegrees >= 30 && hueDegrees < 52) return "yellow";
      if (hueDegrees >= 52 && hueDegrees < 155) return "green";
      if (hueDegrees >= 155 && hueDegrees < 270) return "blue";
      if (hueDegrees >= 270 && hueDegrees < 330) return "violet";
      return "red";
  }
  
  function rgbToRoygbiv(r, g, b) {
    if(r+g+b>660){
        return "white";
    }else if(r+g+b<90){
        return "black";
    }
      const { h, s, l } = rgbToHsl(r, g, b);
      return hslToRoygbiv(h, s, l);
  }


  function toFruit(c){
    if(c === "red"){
        return "strawberry.png";
    }else if(c === "orange"){
        return "peach.png";
    }else if(c === "yellow"){
        return "mango.png";
    }else if(c === "green"){
        return "kale.png";
    }else if(c === "blue"){
        return "blueberry.png";
    }else if(c === "purple"){
        return "grape.png";
    }else if(c === "white"){
        return "banana.png";
    }else if(c === "black"){
        return "blackberry.png";
    }
  }

  function smoothieColor(){
    var temp = [0,0,0];

    console.log('running');
    for(let i = 0; i < 3; i++){
        if(fruitArray[i] === "strawberry.png"){
            temp[0] += 255;
            temp[1] += 107;
            temp[2] += 107;
        }else if(fruitArray[i] === "peach.png"){
            temp[0] += 255;
            temp[1] += 173;
            temp[2] += 51;
        }else if(fruitArray[i] === "mango.png"){
            temp[0] += 255;
            temp[1] += 248;
            temp[2] += 51;
        }else if(fruitArray[i] === "kale.png"){
            temp[0] += 32;
            temp[1] += 158;
            temp[2] += 74;
        }else if(fruitArray[i] === "blueberry.png"){
            temp[0] += 22;
            temp[1] += 35;
            temp[2] += 171;
            console.log('yay');
        }else if(fruitArray[i] === "grape.png"){
            temp[0] += 193;
            temp[1] += 107;
            temp[2] += 217;
        }else if(fruitArray[i] === "banana.png"){
            temp[0] += 255;
            temp[1] += 255;
            temp[2] += 255;
        }else if(fruitArray[i] === "blackberry.png"){

        }
    }

    color = [temp[0]/3, temp[1]/3, temp[2]/3];
  }