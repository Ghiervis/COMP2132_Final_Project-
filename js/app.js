$(document).ready(function () {
    let playerScore = 0;
    let computerScore = 0;
    let rollsLeft = 3;

    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    function calculateScore(dice1, dice2) {
        if (dice1 === 1 || dice2 === 1) {
            return 0;
        } else if (dice1 === dice2) {
            return (dice1 + dice2) * 2;
        } else {
            return dice1 + dice2;
        }
    }

    function updateDisplay(playerDice1, playerDice2, computerDice1, computerDice2) {
        $('#player-dice').text(`Player Dice: ${playerDice1} and ${playerDice2}`);
        $('#computer-dice').text(`Computer Dice: ${computerDice1} and ${computerDice2}`);
        $('#player-score').text(playerScore);
        $('#computer-score').text(computerScore);
    }

    function checkWinner() {
        if (rollsLeft === 0) {
            if (playerScore > computerScore) {
                $('#winner-message').text('Player wins!');
            } else if (playerScore < computerScore) {
                $('#winner-message').text('Computer wins!');
            } else {
                $('#winner-message').text('It\'s a tie!');
            }
        }
    }

    $('#roll-button').on('click', function () {
        if (rollsLeft > 0) {
            const playerDice1 = rollDice();
            const playerDice2 = rollDice();
            const computerDice1 = rollDice();
            const computerDice2 = rollDice();

            playerScore += calculateScore(playerDice1, playerDice2);
            computerScore += calculateScore(computerDice1, computerDice2);

            updateDisplay(playerDice1, playerDice2, computerDice1, computerDice2);

            rollsLeft--;

            checkWinner();
        }
    });

    $('#reset-button').on('click', function () {
        playerScore = 0;
        computerScore = 0;
        rollsLeft = 3;
        $('#player-dice').text('Player Dice: ');
        $('#computer-dice').text('Computer Dice: ');
        $('#player-score').text('0');
        $('#computer-score').text('0');
        $('#winner-message').text('');
    });
});
