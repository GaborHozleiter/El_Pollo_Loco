class SalsaBottle extends MovebleObject {
    y = 390;
    width = 50;
    height = 60;

    constructor(){
        super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.x = 200 + Math.random() * 1500;
       
    }
   
}