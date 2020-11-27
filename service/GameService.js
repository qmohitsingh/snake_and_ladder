const Dice      = require('./DiceRollService')
const constants = require('../utils/constants')
const Users     = require('../model/users')
const Snakes    = require('../model/snakes')
const Ladders   = require('../model/ladders')

const GameService = function () {
    this.chance = 0;
}

GameService.prototype.startGame = function () {

    //Initialization of variable

    this.snakes  = Snakes.getSnakes();
    this.ladders = Ladders.getLadders();
    this.users   = Users.getUsers();

    let userMoveInfo = {};
    let movements    = [];

    while(true) {

        let user = this.users[this.chance];

        this.chance = (this.chance + 1) % this.users.length;

        if (!userMoveInfo[user]) {
            userMoveInfo[user]          = {};
            userMoveInfo[user].position = 0;
        }

        let userMove = userMoveInfo[user];

        let diceRollVal = Dice.getNextDiceRollVal();

        let movement = `${user} rolled a ${diceRollVal} and moved from ${userMove.position} to `;
        if (userMove.position + diceRollVal <= constants.GAME_BOARD_RULE.MAX_VALUE) {
            userMove.position = userMove.position + diceRollVal;

            //ladder check
            if (this.checkLadderPosition(userMove.position)) {
                userMove.position = this.ladders[userMove.position];
            }

            //snake check
            if (this.checkSnakePosition(userMove.position)) {
                userMove.position = this.snakes[userMove.position];
            }

        }

        //move position
        movement += userMove.position;
        movements.push(movement);


        if (userMove.position === 100) {
            movements.push(user+" has won the game.");
            break;
        }
    }

    console.log(movements);
}

GameService.prototype.checkSnakePosition = function (position) {
    return this.snakes[position];
}

GameService.prototype.checkLadderPosition = function (position) {
    return this.ladders[position];
}

module.exports = new GameService();