let canvas;
let world;
let keyboard = new Keyboard();


function startGame(){
    document.getElementById('canvas').style.display = 'block';
    document.getElementById('startscreen').style.display = 'none';
    initLevel();
    init();
    activateKeyboardControls();
    activateButtonControls();
   
}

function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    console.log('My character is', world.character);
}

function activateKeyboardControls(){
    window.addEventListener("keydown", (e) => {
        if(e.keyCode == 68){
            keyboard.D = true;
        }
        if(e.keyCode == 39 ){
            keyboard.RIGHT = true;
        }
        if(e.keyCode == 37){
            keyboard.LEFT = true;
        }
        if(e.keyCode == 38){
            keyboard.UP = true;
        }
        if(e.keyCode == 40){
            keyboard.DOWN = true;
        }
        if(e.keyCode == 32){
            keyboard.SPACE = true;
        }
    });
    
    window.addEventListener("keyup", (e) => {
        if(e.keyCode == 68){
            keyboard.D = false;
        }
        if(e.keyCode == 39){
            keyboard.RIGHT = false;
        }
        if(e.keyCode == 37){
            keyboard.LEFT = false;
        }
        if(e.keyCode == 38){
            keyboard.UP = false;
        }
        if(e.keyCode == 40){
            keyboard.DOWN = false;
        }
        if(e.keyCode == 32){
            keyboard.SPACE = false;
        }
    });
}

function activateButtonControls(){
    document.getElementById('arrowLeft').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });
    document.getElementById('arrowRight').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });
    document.getElementById('jump').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });
    document.getElementById('throw').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.D = true;
    });
    document.getElementById('arrowLeft').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });
    document.getElementById('arrowRight').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });
    document.getElementById('jump').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });
    document.getElementById('throw').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.D = false;
    });
}

