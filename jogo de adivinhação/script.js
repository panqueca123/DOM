document.addEventListener('DOMContentLoaded', () => {
    let targetNumber = generateRandomNumber();
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const resultMessage = document.getElementById('resultMessage');
    const restartButton = document.getElementById('restartButton');

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function processGuess() {
        const userGuess = Number(guessInput.value);
        if (userGuess < 1 || userGuess > 100) {
            resultMessage.textContent = "Por favor, digite um número entre 1 e 100.";
            return;
        }

        if (userGuess < targetNumber) {
            resultMessage.textContent = "Muito baixo! Tente novamente.";
        } else if (userGuess > targetNumber) {
            resultMessage.textContent = "Muito alto! Tente novamente.";
        } else {
            resultMessage.textContent = "Parabéns! Você acertou!";
            guessButton.disabled = true;
            restartButton.style.display = 'block';
        }
    }

    function restartGame() {
        targetNumber = generateRandomNumber();
        guessInput.value = '';
        resultMessage.textContent = '';
        guessButton.disabled = false;
        restartButton.style.display = 'none';
    }

-    guessButton.addEventListener('click', processGuess);

    restartButton.addEventListener('click', restartGame);
});
