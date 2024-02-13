class StatusBarBottles extends DrawableObject{

    IMAGES_BOTTLE = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png',
    ];

    

    constructor(){
        super();
        this.loadImages(this.IMAGES_BOTTLE);
        this.x = 20;
        this.y = 40;
        this.height = 50;
        this.width = 200;
        this.numberOfBottles;
        this.setNumberOfBottles(0);
    }

    setNumberOfBottles(numberOfBottles){
            this.numberOfBottles = numberOfBottles;
            let path = this.IMAGES_BOTTLE[this.numberOfBottlesIndex()];
            this.img = this.imageCache[path];
    }

    numberOfBottlesIndex(){
        if(this.numberOfBottles == 0){
            return 0;
        }if(this.numberOfBottles == 1){
            return 1;
        }if(this.numberOfBottles == 2){
            return 2;
        }if(this.numberOfBottles == 3){
            return 3;
        }if(this.numberOfBottles == 4){
            return 4;
        }else {
            return 5;
        }
    }   
}