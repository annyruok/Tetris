class Board {
    grid;


    reset() {
        this.grid = this.getEmptyBoard();
    }

    getEmptyBoard() {
        return Array.from(
            {length, ROWS}, () => Array(COLUMNS).fill(0)
        );
    }
}