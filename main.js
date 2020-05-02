const canvas = document.getElementById("board");
const context = canvas.getContext("2d");


context.canvas.width = COLUMNS * BLOCK_SIZE;
context.canvas.height = ROWS * BLOCK_SIZE;

// scale blocks to avoid recaclulating block sizes
context.scale(BLOCK_SIZE, BLOCK_SIZE);


let board = new Board();

function play() {
    board.reset();
    console.table(board.grid);

    let piece = new Tetromino();
    piece.draw();

    board.piece = piece;
}

