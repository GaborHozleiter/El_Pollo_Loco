class MovebleObject  extends DrawableObject{
    speed = 0.2;
    speedY = 0;
    acceleration = 2.5;
    lastHit = 0; 
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