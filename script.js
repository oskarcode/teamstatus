const team = {
    _players: [
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11,
        }
    ],
    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27,
        }
    ],
    get games() {
        return this._games
    },
    get players() {
        return this._players
    },
    addPlayer(firstName, lastName, age) {
        const player = {
            firstName,
            lastName,
            age,
        }
        this._players.push(player)
    },
    addGame(opponent, teamPoints, opponentPoints) {
        const game = {
            opponent,
            teamPoints,
            opponentPoints
        }
        this._games.push(game)
    }

}
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Boston Celtics', 100, 110)
team.addGame('Chicago Bulls', 90, 80)
team.addGame('Brooklyn Nets', 80, 100)

var point = 0;
const myteamtotalScore = () => {
    for (var i = 0; i < team._games.length; i++) {
        point = point + team._games[i].teamPoints
    }
    return point
}

var opponentpoint = 0;
const opponenttotalScore = () => {
    for (var i = 0; i < team._games.length; i++) {
        opponentpoint = opponentpoint + team._games[i].opponentPoints
    }
    return opponentpoint
}

const myteamAveragescore = () => {
    return myteamtotalScore() / team._games.length
}

const teamplayersDisplay = () => {
    const playersDisplay = `Totally we have ${team._players.length} players.`
    document.getElementById('demo2').innerHTML = ''
    team._players.forEach(player => {
        document.getElementById('demo2').innerHTML += ` One of them is  ${player.firstName} ${player.lastName} and he is ${player.age} years old. <br/>`
    })
    document.getElementById('demo1').innerHTML = playersDisplay
}

const gameDisplay = () => {
    document.getElementById('demo3').innerHTML = `Totally we have played ${team._games.length} games.`
    team._games.forEach(game => {
        document.getElementById('demo4').innerHTML += `We played against ${game.opponent},we got ${game.teamPoints} and the our opponent got ${game.opponentPoints} <br/>`

    })
}

const summaryDisplay = () => {
    document.getElementById('demo5').innerHTML = `Our team total score is ${myteamtotalScore()}`
    document.getElementById('demo6').innerHTML = `Our opponent total score is ${opponenttotalScore()}`
    document.getElementById('demo7').innerHTML = `My team average score is ${myteamAveragescore()}`
}
