// targeting element
let game_container = document.querySelector('.game-container');
let score = document.querySelector('.score h1');
let mario = document.querySelector('.mario');
let obstacle = document.querySelector('.obstacle');


let marioPosition = 0;
// Tool 1: Jump/fall
function jump() {
    let startPosition = marioPosition;
    let endPosition = 300;

    let upInterval = setInterval(() => {
        if (marioPosition <= endPosition) {
            marioPosition += 20;
            mario.style.bottom = marioPosition + "px";
        } else {
            clearInterval(upInterval);
            fall();
        }
    }, 20)

}

function fall() {
    let startPosition = 300;
    let endPosition = 2;    

    let downInterval = setInterval(() => {
        if (marioPosition >= endPosition) {
            marioPosition -= 20;
            mario.style.bottom = marioPosition + "px";
        } else {
            clearInterval(downInterval);
        }
    }, 20)
}

// move mario left / right
function moveMario(direction) {
}

window.addEventListener("keydown", (e) => {
    switch (e.key) {

        // up
        case " ":
        case "ArrowUp":
            jump();
            break;

        // left
        case "ArrowLeft":
        case "a":
        case "A":
            moveMarrio("left");
            break;

        // right
        case "ArrowRight":
        case "d":
        case "D":
            moveMarrio("right");
            break;
    }
})