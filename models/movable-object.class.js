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
            if(this.isAboveGround() || this.speedY > 0){
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            }
        }, 1000/25);
    }

    isAboveGround(){
        
            return this.y < 150;
        
    }

    isColliding (mo) {
        return  (this.x + this.width) >= mo.x && this.x <= (mo.x + mo.width) && 
                (this.y + /*this.offsetY +*/ this.height) >= mo.y &&
                this.y /*+ this.offsetY)*/ <= (mo.y + mo.height);

}

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y , this.width, this.height);
       
    }

    drawFrame(ctx){
        if(this instanceof Character || this instanceof Chicken || this instanceof Endboss){
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'blue';
        ctx.rect( this.x, this.y , this.width, this.height,);
        ctx.stroke();
        }
        
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
        this.x += this.speed;
        
       
    }

    moveLeft(){
        this.x -= this.speed;
       
    }

    
}