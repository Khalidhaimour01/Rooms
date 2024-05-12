// Game Logic



const player = {
    playerName: "",
    level: 0
}

// All pages removed must be delcared as global vars do this in a serpeerate module

function infoIntake() { 
    let name = document.getElementById('name').value;
    player.playerName = name;
    player.level++;
    console.log(player);
    let intro = document.getElementById('introCall');
    intro.style.display = 'none';
    let nextLevel = document.getElementById('oneCall');
    nextLevel.style.display = 'block';
}


function levelOne() {
    let password = document.getElementById('pass').value
    

}




document.getElementById('nameButton').addEventListener('click', infoIntake);
   


