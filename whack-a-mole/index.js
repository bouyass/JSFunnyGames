var cellsIds = [0,1,2,3,4,5,6,7,8];
var lastCell = 0;
var score = 0;
var currentPosition = undefined;
var scoreElement = document.getElementById('score');

document.addEventListener("DOMContentLoaded", (event) => {
    startTrack();
    startTimer();
    const moveMole = setInterval(mover,1500);
    function mover(){
        document.getElementById(lastCell).innerHTML = "";
        let cell = Math.floor(Math.random() * 9);
        lastCell = cell;
        element = document.createElement('img');
        element.setAttribute('src','images/monster.png');
        document.getElementById(cell).appendChild(element);
        currentPosition = cell;
    } 
});

const startTrack = function(){
    window.addEventListener('keyup', function(e){
        console.log(e.key+ " et "+ currentPosition);
        if(e.key === currentPosition){
            scoreElement.innerHTML = score++;235796
        }
    });
};

const startTimer = function(){

};

