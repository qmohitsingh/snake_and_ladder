const constants = require('../utils/constants')

const Dice = function () {
    this.max = constants.DICE_VALUES.MAX_VALUE;
    this.min = constants.DICE_VALUES.MIN_VALUE;
    this.val = constants.DICE_VALUES.DEFAULT_VALUE;
}

Dice.prototype.setNextDiceRollVal= function () {
    this.val = parseInt(Math.random()*(this.max - this.min) + this.min);
}

Dice.prototype.getNextDiceRollVal = function () {
    this.setNextDiceRollVal();
    return this.val;
}

module.exports = new Dice();