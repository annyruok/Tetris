class Tetromino {
    x;
    y;
    color;
    shape;
    ctx;

    constructor(ctx) {
        this.ctx = ctx;
        this.spawn();
        
    }


    spawn() {
        this.color = 'blue';
        this.shape = [
            [2, 0, 0], 
            [2, 2, 2],
            [0, 0, 0]
        ];


        /// starting pos
        this.x = 3;
        this.y = 0;

    }



    draw() {
        this.ctx.fillStyle = this.color;
        this.shape.forEach((row, y) => {
            row.forEach((val, x) => {
                // this.x, this.y ==> top left corner pos of tile
                // x, y gives position of block in the shape
                // this.x + x is then the position of the block on the board
                if (val > 0) {
                    this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
                }

            })
        })
    }


}