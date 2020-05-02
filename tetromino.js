class Tetrominoes {
    x;
    y;
    color;
    shape;
    context;

    constructor(context) {
        this.context = context;
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
        this.context.fillStyle = this.color;
        this.shape.forEach((row, y) => {
            row.forEach((val, x) => {
                // this.x, this.y ==> top left corner pos of tile
                // x, y gives position of block in the shape
                // this.x + x is then the position of the block on the board
                if (value > 0) {
                    this.context.fillRect(this.x + x, this.y + y, 1, 1);
                }

            })
        })
    }


}