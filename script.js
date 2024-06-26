const targetNumber = Math.floor(Math.random() * 100) + 1;
function checkGuess() {
    const userGuess = parseInt(document.getElementById('userInput').value);
    const feedback = document.getElementById('feedback');

    if (userGuess > targetNumber) {
        feedback.textContent = 'Greater than the target number.';
    } else if (userGuess < targetNumber) {
        feedback.textContent = 'Smaller than the target number.';
    } else if (userGuess === targetNumber) {
        feedback.textContent = 'Equal than the target number.';
    } else {
        feedback.textContent = 'Please enter a valid number.';
    }
}
