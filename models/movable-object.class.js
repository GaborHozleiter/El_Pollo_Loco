class MovebleObject {
    x;
    y;
    img;
    height;
    width; 


    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    moveRight(){
        console.log('Move right');
    }

    moveLeft(){
        
    }
}