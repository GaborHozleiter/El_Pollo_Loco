class Coin extends MovebleObject {
   
    width = 100;
    height = 100;

    constructor(){
        super().loadImage('img/8_coin/coin_2.png');
        this.x = 200 + Math.random() * 1500;
        this. y = 290 - Math.random() * 200;
       
    }
   
}