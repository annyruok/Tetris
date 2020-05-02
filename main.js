const canvas = document.getElementById("board");
const context = canvas.getContext("2d");

context.canvas.width = COLUMNS * BLOCK_SIZE;
context.canvas.height = ROWS * BLOCK_SIZE;

// scale blocks to avoid recaclulating block sizes
context.scale(BLOCK_SIZE, BLOCK_SIZE);

