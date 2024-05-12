// Game Logic



const player = {
    playerName: "",
    level: 0
};

// All pages removed must be delcared as global vars do this in a serpeerate module

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
};


function levelOne() {
    const password = document.getElementById('pass').value;
    const manners = document.getElementById('hint');
    const wrong = document.getElementById('wrong');
    const nextLevel = document.getElementById('oneCall');
    // Hints and wrong answer
    if (password.toLowerCase() === "unlock") {
        manners.style.display = "block";
        wrong.style.display = 'none';
    } else if (password.toLowerCase() === "please unlock") {
        nextLevel.style.display = 'none';
        player.level++
        console.log(player)
    } else {
        manners.style.display = "none";
        wrong.style.display = 'block';
    }
};


document.getElementById('levelOneButton').addEventListener('click', levelOne)
document.getElementById('nameButton').addEventListener('click', infoIntake);
   


