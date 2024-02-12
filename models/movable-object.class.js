class MovebleObject {
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.2;
    speedY = 0;
    acceleration = 2.5;
    otherDirection = false;
    


    applyGravity(){
        setInterval(() => {
            if(this.isAboveGround()){
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            }
        }, 1000/25);
    }

    isAboveGround(){
        
            return this.y < 150;
        
    }

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
       
    }

    playAnimation(images){
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight(){
        console.log('Move right');
    }

    moveLeft(){
        setInterval(() => {
            this.x -= this.speed;
        }, 1000/60);
       
    }

    
}