function isKingInCheck(chessboard) {
    for (let i = 0; i < chessboard.length; i++) {
        for (let j = 0; j < chessboard[0].length; j++) {
            if (chessboard[i][j] === "♔") {
                return [i, j];
            }
        }
    }
}

function orthogonalCheck(chessboard, i, j, k1, k2) {
    let [I, J] = [i, j];

    // UP
    while (I >= 0) {
        if (I === k1 && J === k2) {
            return true;
        }
        if (chessboard[I][J] != " " && I != i) {
            break;
        }
        I--;
    }

    // DOWN
    [I, J] = [i, j];
    while (I < chessboard.length) {
        if (I === k1 && J === k2) {
            return true;
        }
        if (chessboard[I][J] != " " && I != i) {
            break;
        }
        I++;
    }

    // LEFT
    [I, J] = [i, j];
    while (J >= 0) {
        if (I === k1 && J === k2) {
            return true;
        }
        if (chessboard[I][J] != " " && J != j) {
            break;
        }
        J--;
    }

    // RIGHT
    [I, J] = [i, j];
    while (J < chessboard[0].length) {
        if (I === k1 && J === k2) {
            return true;
        }
        if (chessboard[I][J] != " " && J != j) {
            break;
        }
        J++;
    }
    return false;
}

function diagonalCheck(chessboard, i, j, k1, k2) {
    let [I, J] = [i, j];

    // UP LEFT
    while (I >= 0 && J >= 0) {
        if (I === k1 && J === k2) {
            return true;
        }
        if (chessboard[I][J] != " " && I != i && J != j) {
            break;
        }
        I--;
        J--;
    }

    // UP RIGHT
    [I, J] = [i, j];
    while (I >= 0 && J < chessboard[0].length) {
        if (I === k1 && J === k2) {
            return true;
        }
        if (chessboard[I][J] != " " && I != i && J != j) {
            break;
        }
        I--;
        J++;
    }

    // DOWN LEFT
    [I, J] = [i, j];
    while (I < chessboard.length && J >= 0) {
        if (I === k1 && J === k2) {
            return true;
        }
        if (chessboard[I][J] != " " && I != i && J != j) {
            break;
        }
        I++;
        J--;
    }

    // DOWN RIGHT
    [I, J] = [i, j];
    while (I < chessboard.length && J < chessboard[0].length) {
        if (I === k1 && J === k2) {
            return true;
        }
        if (chessboard[I][J] != " " && I != i && J != j) {
            break;
        }
        I++;
        J++;
    }
    return false;
}

function kingIsInCheck(chessboard) {
    let knightMoves = [
        [1, 2],
        [-1, 2],
        [1, -2],
        [-1, -2],
        [2, 1],
        [-2, 1],
        [2, -1],
        [-2, -1],
    ];

    let [k1, k2] = findKing(chessboard);

    for (let i = 0; i < chessboard.length; i++) {
        for (let j = 0; j < chessboard[0].length; j++) {
            if (chessboard[i][j] === "♛") {
                if (orthogonalCheck(chessboard, i, j, k1, k2)) {
                    return true;
                } else if (diagonalCheck(chessboard, i, j, k1, k2)) {
                    return true;
                }
            } else if (chessboard[i][j] === "♝") {
                if (diagonalCheck(chessboard, i, j, k1, k2)) {
                    return true;
                }
            } else if (chessboard[i][j] === "♜") {
                if (orthogonalCheck(chessboard, i, j, k1, k2)) {
                    return true;
                }
            } else if (chessboard[i][j] === "♟") {
                if (i + 1 === k1 && j + 1 === k2) {
                    return true;
                } else if (i + 1 === k1 && j - 1 === k2) {
                    return true;
                }
            } else if (chessboard[i][j] === "♞") {
                for (let [dx, dy] of knightMoves) {
                    let [I, J] = [i + dx, j + dy];
                    if (I === k1 && J === k2) {
                        return true;
                    }
                }
            }
        }
    }

    return false;
}