let colour = "black";
let draw = false;

document.body.onmousedown = () => (draw = true)
document.body.onmouseup = () => (draw = false)

function fillBoard(dimensions) {
    let  board = document.querySelector(".board");
    let clear = board.querySelectorAll("div");
    clear.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${dimensions}, 1fr)`;

    let total = dimensions * dimensions
    for(let i = 0; i<=total; i++) {
        let pixels = document.createElement("div");
        pixels.style.backgroundColor = "pink";
        pixels.addEventListener("mouseover", squareColour);
        // board.insertAdjacentElement("beforeend", pixels);
        board.appendChild(pixels);
    }
}

fillBoard(16);

function changeSize(input) {
    if(input >= 1 && input <= 100) {
        document.querySelector(".error").style.display = "none";
        fillBoard(input)
    } else {
        document.querySelector(".error").style.display = "flex";
        console.log("Error")
    }
}

function squareColour() {
    if(draw == true) {
        if(colour == "rainbow") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = colour;
        }
    }
}

function changeColour(choice) {
    colour = choice;
}

function resetBoard() {
    let  board = document.querySelector(".board");
    let clear = board.querySelectorAll("div");
    clear.forEach((div) => div.style.backgroundColor = "pink");
    draw = false;
}

// document.querySelector(".board").addEventListener("mousedown", () => {
//     draw = true;
// })

// document.querySelector(".board").addEventListener("mouseup", () => {
//     draw = false;
// })