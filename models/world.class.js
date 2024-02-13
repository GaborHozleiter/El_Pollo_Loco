class World {
character = new Character();
StatusBarHealth = new StatusBarHealth();
StatusBarCoins = new StatusBarCoins();
StatusBarBottles = new StatusBarBottles();
numberOfCoins = 1;
numberOfBottles = 0;
level = level1;
ctx;
canvas;
keyboard;
camera_x = 0;
throwableObjects = [];


    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.run();
    }

    run(){
        setInterval(() => {
           this.checkcollisions();
           this.checkTrowObjects();
           this.addCoinsToStatusbar();
           this.addBottlesToStatusbar();
           this.checkThrowObjects();
        }, 200);
    }

    checkTrowObjects(){
        if(this.keyboard.D  && this.numberOfBottles > 0){
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100) ;
            this.throwableObjects.push(bottle);
        }
    }

    setWorld(){
        this.character.world = this;
    }

    draw(){
        this.ctx.clearRect(0, 0,  this.canvas.width,  this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.StatusBarHealth);
        this.addToMap(this.StatusBarBottles);
        this.addToMap(this.StatusBarCoins);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.salsaBottles);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.clouds);
        this.ctx.translate(-this.camera_x, 0);
       
       

        let self = this;
        requestAnimationFrame(function(){
            self.draw();
        });
    }

    checkcollisions(){
        setInterval(() => {
            this.level.enemies.forEach( (enemy) => {
                if(this.character.isColliding(enemy)){
                    this.character.hit();
                    this.StatusBarHealth.setPercentage(this.character.energy);
                }
            })
        }, 100);
    }

    checkThrowObjects(){
        if(this.keyboard.D && this.numberOfBottles > 0){
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100) ;
            this.throwableObjects.push(bottle);
            this.numberOfBottles--;
        }
    }

    addCoinsToStatusbar(){
        this.level.coins.forEach( (coin) => {
            if(this.character.isColliding(coin)){
               
                this.StatusBarCoins.setNumberOfCoins(this.numberOfCoins);
                coin.y = -200;
                this.numberOfCoins++;
               
            }
        })
    }

    addBottlesToStatusbar(){
        this.level.salsaBottles.forEach( (salsaBottle) => {
            if(this.character.isColliding(salsaBottle)){
                this.numberOfBottles++;
                setInterval(() => {
                    this.StatusBarBottles.setNumberOfBottles(this.numberOfBottles);
                }, 200);
                
                salsaBottle.y = -200;
                
               
            }
        })
    }

    addObjectsToMap(objects){
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

    addToMap(mo){
        if(mo.otherDirection){
           this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if(mo.otherDirection){
            this.flipImageBack(mo);
        }
    }

    flipImage(mo){
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo){
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}