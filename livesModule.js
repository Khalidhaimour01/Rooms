// Lives
const heartContainers = document.querySelectorAll('.heart-container');
let heartsRemaining = 3;

function loseHeart() {
    const heartContainer = document.getElementById(`heart${heartsRemaining}`);
    const heart = heartContainer.querySelector('.heart');
    heart.style.backgroundColor = '#f0f0f0'; // Change heart color to empty
    checkHeartsRemaining();
}

function checkHeartsRemaining() {
    if (heartsRemaining === 0) {
        restartGame();
    }
}

function restartGame() {
    // You can implement your logic to restart the game to level one here
    // For demonstration purposes, let's just reload the page
    window.location.reload();
}


export { loseHeart, checkHeartsRemaining, restartGame, heartsRemaining, heartContainers};