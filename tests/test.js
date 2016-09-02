var chai = require('chai');
var expect = chai.expect;

var elo = require('../dist/rating');

describe('Elo rating', function() {
  it('function should return asdas', function() {
    var player1 = { currentRanking: 2400, wins: 1 };
    var player2 = { currentRanking: 2000, wins: 0 };
    expect(elo(player1, player2, 32)).to.equals({
      player1: { currentRanking: 2403 },
      player2: { currentRanking: 1997 }
    });
  });
})
