const fs        = require('fs');
const Users     = require('./model/users');
const Snakes    = require('./model/snakes');
const Ladders   = require('./model/ladders');
const GameService= require('./service/GameService');

if (require.main === module) {
    let filename = process.argv[2];

    let inputData = fs.readFileSync(filename);

    inputData = inputData.toString().split('\n');

    //snakes input format
    let snakes = {};
    let numOfSnakes = parseInt(inputData[0]);
    let i;
    for(i=1; i<=numOfSnakes; i++) {
        snakes[parseInt(inputData[i].split(' ')[0])] = parseInt(inputData[i].split(' ')[1]);
    }

    //ladders
    let ladders = {};
    let numOfLadders = i + parseInt(inputData[i++]);
    for(; i<=numOfLadders; i++) {
        ladders[parseInt(inputData[i].split(' ')[0])] = parseInt(inputData[i].split(' ')[1]);
    }

    //users info
    let users = [];
    let numOfUsers = i + parseInt(inputData[i++]);
    for(; i<=numOfUsers; i++) {
        users.push(inputData[i]);
    }

    Users.setUsers(users);
    Snakes.setSnakes(snakes);
    Ladders.setLadders(ladders);

    GameService.startGame();

}