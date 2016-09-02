# elo-rating
Module for calculating ello rating
    
# installation
```sh
    npm install elo-ranking --save
```
    
# usage
```js
    var ranking = require('elo-ranking');
    
    var player1 = { currentRanking: 2400, wins: 1 }; 
    var player2 = { currentRanking: 2000, wins: 0 };
    var kFactor = 42; //default is 32
    var result = ranking(player1, player2, kFactor);
    //result includes two object 
    //player1 = { currentRanking: ? }
    //player2 = { currentRanking: ? }
```
