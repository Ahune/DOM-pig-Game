/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice, gamePlaying;
init();

//callback is when ex. a eventlistener calls our function.
// anonymous function a function that is not reuseable.
// anonymous functions are good when you only need it one time or for a specific event.
// addEventListener('', function);
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying){
        // 1. random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var score;
        // 2. Display the result
        var diceDom = document.querySelector('.dice')
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';
        score = dice;


        // Update 
        if (dice !== 1){
            // add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            // Nextplayer
        nextplayer();
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying){
        //1. add current score to global score.
        scores[activePlayer] += roundScore; 
        
        //2. update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //3. Did the player won the game?   
        if (scores[activePlayer] >= 100){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active');
            gamePlaying = false;
        }else {
            nextplayer();
        }   
    }
    
});

function nextplayer(){
    // Nextplayer
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active'); 

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    // change CSS property by using style.
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

//****** Setter
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>'+ dice +'</em>';
//***** Getter
//var x = document.querySelector('#score-0').textContent;
//console.log(x);

/*
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        /*****
         * toggle will add and remove if active is in the class it will remove and if its not there it will add active to the html class (player-0-panel).
         * 
         */
        /*
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active'); 
        document.querySelector('.dice').style.display= 'none';
        */