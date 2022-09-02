/*
Team Stats
We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.

After we create these data structures in this project, feel free to challenge yourself to gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.
*/

const team =  {
  _players : [
    {firstName : 'Cristiano', lastName: 'Ronaldo', age: 37},
    {firstName : 'Eden', lastName: 'Hazard', age: 31},
    {firstName : 'Kevin', lastName: 'De Bruyne', age: 31}
  ],
  _games : [
    {opponent: 'Chelsea FC', teamPoints : 33, opponentPoints: 16},
    {opponent: 'FC Barcelona', teamPoints : 44, opponentPoints: 40},
    {opponent: 'AC Milan', teamPoints : 17, opponentPoints: 40}
  ],
  
  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer : function(firstName, lastName, age)  {
    const newPlayer = {
      newFirstName : firstName,
      newLastName : lastName,
      newAge : age
      };

      this._players.push(newPlayer);
  },

  addGame: function(opponentName, teamPoints, opponentPoints) {
    const newGame = {opponent: opponentName,
                    teamPoints: teamPoints,
                    opponentPoints: opponentPoints};
    this._games.push(newGame);
  },
}

team.addPlayer('Sandio', 'Mane', '30');
team.addPlayer('Mohammed', 'Salah', '30');

team.addGame('Cardiff', 6, 33);
team.addGame('PSG', 27, 22);
console.log(team.players); 
console.log(team.games); 