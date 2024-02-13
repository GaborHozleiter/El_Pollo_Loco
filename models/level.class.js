class Level {
    enemies;
    clouds;
    backgroundObjects;
    salsaBottles;
    level_end_x = 2200;

    
    constructor(enemies, clouds, backgroundObjects,salsaBottles){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.salsaBottles = salsaBottles;
       
    }
}