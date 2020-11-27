const Ladders = function() {
    this.ladders = {};
}

Ladders.prototype.getLadders = function () {
    return this.ladders;
}

Ladders.prototype.setLadders = function (ladders) {
    this.ladders = ladders;
}


module.exports = new Ladders();