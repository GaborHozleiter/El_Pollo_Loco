class Cloud extends MovebleObject{
    y = 50;
    width = 500;
    height = 150;

    constructor(){
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = 100 + Math.random() * 500;
       
    }
}