const KING = '♔', S = 8;
const TOME = {
    '♛': {
        propagate: S,
        moves: [[1, 1], [1, -1], [-1, 1], [-1, -1], [0, 1], [0, -1], [-1, 0], [1, 0]]
    },
    '♝': {propagate: S, moves: [[1, 1], [1, -1], [-1, 1], [-1, -1]]},
    '♜': {propagate: S, moves: [[0, 1], [0, -1], [-1, 0], [1, 0]]},
    '♞': {
        propagate: 1,
        moves: [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [-1, 2], [1, -2], [-1, -2],]
    },
    '♟': {propagate: 1, moves: [[1, 1], [1, -1]]},
};

function kingIsInCheck(bd) {
    const isValid = (p, x, y, i) => 0 <= x && x < S && 0 <= y && y < S && i < p.propagate;
    const kingInLine = (p, a, b) => p.moves.some(([dx, dy]) => {
        for (let i = 0, x = a + dx, y = b + dy; isValid(p, x, y, i); i++, x += dx, y += dy) {
            if (bd[x][y] == KING) return true;
            if (bd[x][y] != ' ') return false;
        }
    });
    return bd.some((r, a) => r.some((c, b, _, p = TOME[c]) => p && kingInLine(p, a, b)));
}

