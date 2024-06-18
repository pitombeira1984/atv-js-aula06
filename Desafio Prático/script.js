document.addEventListener('DOMContentLoaded', () => {
    const rollDiceButton = document.getElementById('rollDice');
    const resultText = document.getElementById('result');
    const pointText = document.getElementById('point');
    let point = null;

    rollDiceButton.addEventListener('click', () => {
        const roll = rollDice();
        resultText.textContent = `Você tirou ${roll}.`;

        if (point === null) {
            if (roll === 7 || roll === 11) {
                resultText.textContent += ' Você ganhou!';
                resetGame();
            } else if (roll === 2 || roll === 3 || roll === 12) {
                resultText.textContent += ' Craps! Você perdeu!';
                resetGame();
            } else {
                point = roll;
                pointText.textContent = `Seu Ponto é ${point}. Continue jogando.`;
            }
        } else {
            if (roll === point) {
                resultText.textContent += ' Você tirou seu ponto novamente e ganhou!';
                resetGame();
            } else if (roll === 7) {
                resultText.textContent += ' Você tirou 7 e perdeu!';
                resetGame();
            } else {
                resultText.textContent += ' Continue jogando.';
            }
        }
    });

    function rollDice() {
        const die1 = Math.floor(Math.random() * 6) + 1;
        const die2 = Math.floor(Math.random() * 6) + 1;
        return die1 + die2;
    }

    function resetGame() {
        point = null;
        pointText.textContent = '';
    }
});
