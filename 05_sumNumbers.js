// Write a method that will take an array player scores for a series of games
// and return the name of the player with the highest total score.
// Test your solution:
// npm test

addScores = (scores) => {
// Calculates the total score.
    let total = 0;
for (let score of scores){
   total += score;
}
return total;
}

function findWinner(players) {
    let winner = players[0].name;   
    let winnerScore = addScores(players[0].scores) 
    for (let ind = 1; ind < players.length; ind++){
        let playerTotalScore = addScores(players[ind].scores);
        if (playerTotalScore > winnerScore){
            winner = players[ind].name; 
            winnerScore =  playerTotalScore;
        }        
    }
    return winner
}

module.exports = {
    findWinner
}