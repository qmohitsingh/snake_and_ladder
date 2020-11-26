let GameBoard = function () {
    this.snakes     = {};
    this.ladders    = {};
    this.users      = [];
    this.movesInfo  = [];
    this.chance     = 0;
    this.momvements = [];
}


GameBoard.prototype.setSnakes = function (snakes) {
    this.snakes = snakes;
}

GameBoard.prototype.setLadders = function(ladders)  {
    this.ladders = ladders;
}

GameBoard.prototype.setUsers = function (users) {
    this.users = users;
}

GameBoard.prototype.startGame = async function () {
    new Promise((resolve, reject) => {
        while(true) {
            let user = this.users[this.chance];

            if (!user)
                return reject('User Not found');

            //move to next user turn
            this.chance = (this.chance + 1)%this.users.length;

            if (!this.movesInfo[user]) {
                this.movesInfo[user] = {}
                this.movesInfo[user].position = 0
            }

            let move = this.movesInfo[user];
            let diceRoll = parseInt(Math.random() * (6 - 1) + 1)

            let movement = `${user} rolled a ${diceRoll} and moved from ${move.position} to `;
            if (move.position + diceRoll <= 100) {
                move.position = move.position + diceRoll;

                //if there is a snake on current block
                if (this.snakes[move.position]) {
                    move.position = parseInt(this.snakes[move.position]);
                }

                //if there is a ladder on current block
                if (this.ladders[move.position]) {
                    move.position = parseInt(this.ladders[move.position]);
                }

            }

            this.movesInfo[user] = move;
            //keeping track of move
            movement      = movement + move.position;
            this.momvements.push(movement);

            console.log(movement);
            if (move.position === 100) {
                this.momvements.push(user +  " wins the game.");
                resolve('success')
                break;
            }

        }
    })

}

GameBoard.prototype.getWinner = async function(){
    await this.startGame();
    console.log("movements: ", this.momvements);
}

// let obj = new GameBoard();
//
// console.log(obj)
//
// obj.setSnakes({
//
//     62: 5,
//     33: 6,
//     49: 9,
//     88: 16,
//     41: 20,
//     56: 53,
//     98: 64,
//     93: 73,
//     95: 75,
//
// })
//
// obj.setLadders({
//     2: 37,
//     27: 46,
//     10: 32,
//     51: 68,
//     61: 79,
//     65: 84,
//     71: 91,
//     81: 100
// })
//
// obj.setUsers(["Gaurav",
//     "Sagar"])
//
// obj.getWinner()

module.exports = new GameBoard();