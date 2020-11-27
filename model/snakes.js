const Snakes = function() {
    this.snakes = {};
}

Snakes.prototype.getSnakes = function () {
    return this.snakes;
}

Snakes.prototype.setSnakes = function (snakes) {
    this.snakes = snakes;
}


module.exports = new Snakes();