const Users = function() {
    this.users = [];
}

Users.prototype.getUsers = function () {
    return this.users;
}

Users.prototype.setUsers = function (users) {
    this.users = users;
}


module.exports = new Users();