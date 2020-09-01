var cellsIds = [0,1,2,3,4,5,6,7,8];
var lastCell = 7;
var score = 0;
var currentPosition = undefined;
var scoreElement = document.getElementById("score");
var time = document.getElementById("time");
var totalTime = 60;

document.addEventListener("DOMContentLoaded", (event) => {
    startTrack();
    time.textContent = totalTime;
    const moveMole = setInterval(mover,1500);
    function mover(){
        document.getElementById(lastCell).innerHTML = "";
        let cell = Math.floor(Math.random() * 9);
        lastCell = cell;
        element = document.createElement('img');
        element.setAttribute('src','images/monster.png');
        document.getElementById(cell).appendChild(element);
        currentPosition = cell;
        totalTime--;
        if(totalTime === 0){
            windows.removeEventListener('keyup',this);
        }else{
            time.textContent = totalTime;
        }
    } 
});

const startTrack = function(){
    window.addEventListener('keyup', function(e){
        if(e.key == currentPosition){
            score++;
            scoreElement.textContent = score;
        }  
        document.getElementById(e.key).style.background = 'white';
    });

    window.addEventListener('keypress', function(e){
        document.getElementById(e.key).style.background = 'black';
    });
};



