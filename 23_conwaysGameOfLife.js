// Good morning ladies and gents, do we have a treat for you today.
// For our bonus round morning challenge, I present to you, Conway's Game of Life!
// The rules are simple. You are presented with 2d array, containing 1's and 0's.
// 1's represent live cells, 0's represent dead cells.
// Your task is to find what the next generation of the 2d array looks like based on the following rules:
//     If a living cell has fewer than 2 neighbours, it dies.
//     If a living cell has 2 or 3 neighbours, it continues to live.
//     If a living cell has greater than 3 neighbours, it dies.
//     If a dead cell has exactly 3 neighbours, it comes to life.
// Good luck and have fun!

exports.conwaysGameOfLife = function (game) {
// Your code goes here
for (let row in game){
	for (let cell in row){
		// findNeighbours(row, cell)
		console.log(row[cell])
	}}
}

function findNeighbours (row ,cell, game){   
	let neighbours = 0; 
	if (game[row][cell] == 1){
		if (game[row][cell +=1] == 1){
			neighbours += 1
		}
		if (row[cell -1] == 1){
			neighbours += 1
		}
		if ()
	}
}
// let game1 = [
// 	[0, 0, 0, 0, 0],
// 	[0, 0, 1, 1, 0],
// 	[0, 1, 1, 0, 0],
// 	[0, 0, 1, 0, 1],
// 	[0, 0, 1, 0, 0]
//   ]
// conwaysGameOfLife(game1)