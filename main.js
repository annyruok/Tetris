const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");


ctx.canvas.width = COLUMNS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// scale blocks to avoid recaclulating block sizes
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);


let board = new Board();

function play() {
    board.reset();
    console.table(board.grid);

    let piece = new Tetromino(ctx);
    piece.draw();

    board.piece = piece;
}

