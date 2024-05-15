
// Game Logic


// Lives


let heartsRemaining = 3;
let heartOne = document.getElementById('heart1');
let heartTwo = document.getElementById('heart2');
let heartThree = document.getElementById('heart3');

function loseheart() {    
    if (heartsRemaining === 2) {
        heartOne.classList.add('empty-heart')
    } else if (heartsRemaining === 1) {
        heartTwo.classList.add('empty-heart')
    } else if (heartsRemaining === 0) {
        heartThree.classList.add('empty-heart')
    };
    
restart();

};

// Restart Function
const restartPage = document.getElementById('restartPage')

function restart() {
    const blockElements = document.querySelectorAll('[style*="display: block"]');
    if (heartsRemaining === 0) {
        blockElements.forEach(element => {
            element.style.display = 'none';
        });
        restartPage.style.display = 'block';
        heartsRemaining = 3;
        player.level = 0;
    };

};


// Player object for saves

const player = {
    playerName: "",
    level: 0
};


// Tutorial

function tutorial() {
    const tutorials = document.getElementById('tutorials');
    const tutorials2 = document.getElementById('tutorials2');
    tutorials.style.display = 'none';
    tutorials2.style.display = 'block'; 
    document.getElementById('typingSounds').play();
    
};

function tutorial2() {
    const tutorials2 = document.getElementById('tutorials2');
    const intro = document.getElementById('introCall');
    tutorials2.style.display = 'none';
    intro.style.display = 'block'
    restartPage.style.display = 'none';
};


// Name intake
function infoIntake() { 
    const name = document.getElementById('name').value;
    const level1Text = document.getElementById('levelOneNameInput');
    const intro = document.getElementById('introCall');
    const nextLevel = document.getElementById('oneCall');
    player.playerName = name;
    player.level++;
    console.log(player);
    intro.style.display = 'none';
    nextLevel.style.display = 'block';
    level1Text.innerHTML = `Hi ${name} <br>Welcome to the first room <br>'Please Unlock' Me, We Need to Start Testing`;
    level1Text.classList.add('typeAnimation');
    document.getElementById('typingSounds').play();
    restartPage.style.display = 'none';
};

// Level one
function levelOne() {
    const password = document.getElementById('pass').value;
    const trimmedPass = password.trim();
    const manners = document.getElementById('hint');
    const wrong = document.getElementById('wrong');
    const nextLevel = document.getElementById('oneCall');
    // Hints and wrong answer
    if (trimmedPass.toLowerCase() === "unlock") {
        manners.style.display = "block";
        wrong.style.display = 'none';
    } else if (trimmedPass.toLowerCase() === "please unlock") {
        nextLevel.style.display = 'none';
        player.level++;
    } else if (trimmedPass.toLowerCase() === 'unlock please') {
        manners.innerHTML = `Pay attention, order is important`;
        manners.style.display = 'block';
        wrong.style.display = 'none';
    } else {
        manners.style.display = 'none';
        wrong.style.display = 'block';
        heartsRemaining--
        loseheart();
    };
    
   
};


function levelTwo() {
    
};


document.getElementById('nextButton').addEventListener('click', tutorial); 
document.getElementById('nextButton2').addEventListener('click', tutorial2);
document.getElementById('nameButton').addEventListener('click', infoIntake);
document.getElementById('levelOneButton').addEventListener('click', levelOne);
document.getElementById('Quit').addEventListener('click', tutorial2);
document.getElementById('restartYes').addEventListener('click', infoIntake);
