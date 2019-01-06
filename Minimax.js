
getBestMove(board, maximizing = true, callback = () => {}, depth = 0) {
    
     //clear nodes_map if the function is called for a new move
    if(depth == 0) this.nodes_map.clear();
    
     //If the board state is a terminal one, return the heuristic value
    if(board.isTerminal() || depth == this.max_depth ) {
        if(board.isTerminal().winner == 'x') {
            return 100 - depth;
        } else if (board.isTerminal().winner == 'o') {
            return -100 + depth;
        } 
        return 0;
    }
}