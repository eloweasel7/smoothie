class Fruit{

    constructor(){
        this.posX = windowWidth/2 + random(-windowWidth/32,windowWidth/32);
        this.posY = -windowHeight/8;

        this.velY = 0;
        
    }

    displayate(){
        this.posY += this.velY;
        if(this.posY < windowHeight/2){
            image(this.f, this.posX, this.posY, windowWidth/16, windowWidth/16);
        }
    }

    display(x, y){
        image(this.f, x, y, windowWidth/8, windowWidth/8);
    }

    startFall(){
        this.velY = windowHeight/64;
    }

    setFruit(fruit1){
        this.f = loadImage(fruit1);
    }
}