class MovebleObject  extends DrawableObject{
    speed = 0.2;
    speedY = 0;
    acceleration = 2.5;
    lastHit = 0; 
    otherDirection = false;
    offset = {
        top : 0,
        left : 0,
        bottom : 0,
        right : 0
    }
    
    applyGravity(){
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0){
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            }
        }, 1000/25);
    }

    isAboveGround(){
        if(this instanceof ThrowableObject){
            return true;
        }else{
            return this.y < 150;
        }
    }

    isColliding (mo) {
        return  this.x + this.width - this.offset.right >= mo.x + mo.offset.left && 
                this.x + this.offset.left <= mo.x + mo.width -mo.offset.right && 
                (this.y +  this.height - this.offset.bottom) >= mo.y + mo.offset.top &&
                this.y + this.offset.top <= mo.y + mo.height - mo.offset.bottom;
        }

    hit(){
        this.energy -= 5;
        if(this.energy < 0){
            this.energy = 0;
        }else{
            this.lastHit = new Date().getTime();
        }
    }

    isDead(){
        return this.energy == 0; 
    }

    isHurt(){
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
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