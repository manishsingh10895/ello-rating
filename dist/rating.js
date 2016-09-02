//Description
//pass player details as parameter
//player has
//currentRanking, win(boolean),
module.exports = function(player1, player2, kFactor)
{
  var r1 = player1.currentRanking;
  var r2 = player2.currentRanking;

  var R1 = pow(10, (r1/400)); //Tranformed Rating for player 1
  var R2 = pow(10, (r2/400)); //Tranformed Rating for player 2

  var E1 = R1 /(R1  +  R2); //Expected score for player 1
  var E2 = 1 - E1;          //Expected score for player 2

  var S1,S2; // Actual Scores for PLayer 1 and player 2

  if((player1.wins && player2.wins)) {
    //if game draws actual score is 0.5
    S1 = S2 = 0.5;
  } else {
    S1 = player1.wins ? 1 : 0;
    S2 = player2.wins ? 1 : 0;
  }

  var updatedR1 = r1 + kFactor * (S1 - E1);
  var updatedR2 = r2 + kFactor * (S2 - E2);



  var player1 = {};
  var player2 = {};

  player1.currentRanking = Math.round(updatedR1);
  player2.currentRanking = Math.round(updatedR2);

  console.log("Player1", player1);
  console.log("Player2", player2);
  console.log();

  return { player1: player1, player2: player2 };
}

function pow(a, b)
{
  if(b===1) return a;
  if(b===0) return 1;

  var x = pow(a, Math.floor(b/2));
  return x * x * pow(a, b%2);
}
