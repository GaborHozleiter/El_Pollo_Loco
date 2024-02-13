class StatusBarCoins extends DrawableObject{

    IMAGES_COIN = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png',  
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png',
    ]

    

   

    constructor(){
        super();
        this.loadImages(this.IMAGES_COIN);
        this.x = 20;
        this.y = 80;
        this.height = 50;
        this.width = 200;
        this. numberOfCoins;
        this.setNumberOfCoins(0);
    }

    setNumberOfCoins(numberOfCoins){
            this.numberOfCoins = numberOfCoins;
            let path = this.IMAGES_COIN[this. numberOfCoinsIndex()];
            this.img = this.imageCache[path];
            
    }

    numberOfCoinsIndex(){
        if(this.numberOfCoins == 0){
            return 0;
        }else if(this.numberOfCoins == 1){
            return 1;
        }else if(this.numberOfCoins == 2){
            return 2;
        }else if(this.numberOfCoins == 3){
            return 3;
        }else if(this.numberOfCoins == 4){
            return 4;
        }else {
            return 5;
        }
    }   
}