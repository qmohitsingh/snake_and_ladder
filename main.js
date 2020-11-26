const fs = require('fs');

if (require.main === module) {
    let filename = process.argv[2];
    console.log('filename: ', filename)
    let inputData = fs.readFileSync(filename);

    console.log(inputData.toString());
    console.log(inputData.toString().split('\n'))
    inputData = inputData.toString().split('\n');


    //snakes input format
    let snakes = {};
    let numOfSnakes = parseInt(inputData[0]);
    let i;
    for(i=1; i<=numOfSnakes; i++) {
        snakes[parseInt(inputData[i].split(' ')[0])] = parseInt(inputData[i].split(' ')[1]);
    }

    //console.log(snakes)
    //ladders
    let ladders = {};
    let numOfLadders = i + parseInt(inputData[i++]);
    for(; i<=numOfLadders; i++) {
        ladders[parseInt(inputData[i].split(' ')[0])] = parseInt(inputData[i].split(' ')[1]);
    }

    //console.log(ladders)

    //users info
    let users = [];
    let numOfUsers = i + parseInt(inputData[i++]);
    for(; i<=numOfUsers; i++) {
        users.push(inputData[i]);
    }

    //console.log(users)
}