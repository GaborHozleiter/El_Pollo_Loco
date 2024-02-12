class Character extends MovebleObject{
    x = 100;
    width = 75;
    height = 300;
    y = 170;
    speed = 10;
    world;
    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
];

    constructor(){
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

    animate(){
    setInterval(() => {
        if(this.world.keyboard.RIGHT){
            this.x += this.speed;
            this.otherDirection = false;
        }

        if(this.world.keyboard.LEFT){
            this.x -= this.speed;
            this.otherDirection = true;
        }
    }, 1000/60);

        setInterval(() => {
            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT){
                let i = this.currentImage % this.IMAGES_WALKING.length;
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
            
        }, 50);
        
    }


    jump(){

    }
}