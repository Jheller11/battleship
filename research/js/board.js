class Board {
  constructor(player, board) {
    this.player = player
    this.board = board
    this.shipsRemaining = 5
    this.hitsRemaining = 17
  }

  // receive letter/number shot information
  evaluateIncomingShot(shot) {
    //   if shot = hit ====> hitsRemaing -= 1, check boats remaining
    //   else miss => return miss
  }

  // check if all boats sunk, return true if player has lost all boats
  evaluateLoss() {
    if (this.hitsRemaining === 0 && this.shipsRemaining === 0) {
      return true
    } else {
      return false
    }
  }
}

let board = {
  A: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  B: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  C: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  D: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  E: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  F: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  G: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  H: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  I: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  J: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}

let ships = [
  { name: 'carrier', hits: 5 },
  { name: 'battleship', hits: 4 },
  { name: 'submarine', hits: 3 },
  { name: 'destroyer', hits: 3 },
  { name: 'patrol', hits: 2 }
]
