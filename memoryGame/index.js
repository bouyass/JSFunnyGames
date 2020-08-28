/* Global variables */
var board = [];
var imageElements = [];
var imageIndexs = [0,1,2,3,4,5,6,7];
var cellIndexs = [0,1,2,3,4,5,6,7];
var imageElements = [];
var rootElement = document.getElementById('memoGame');
var result = document.getElementById('result');
var timer = document.getElementById('timer');
var imagesReturned = undefined;
var score = 0;
var time = 0;

/* Entry point */ 
document.addEventListener("DOMContentLoaded", (event) => {
    initGame();  
});

/* images clicks handler  */
const bindListener = function(i, element){
    element.addEventListener('click',function(){
        element.setAttribute('src',`images/image-${board[i][1]}.png`);
        if(imagesReturned !== undefined){
            if(board[imagesReturned][1] === board[i][1]){
                element.setAttribute('src',`images/image-${board[imagesReturned][1]}.png`);
                score++;
                result.textContent = score;
                setTimeout(()=>{},2000);
                document.getElementById(imagesReturned).setAttribute('src',`images/image-blank.png`);
                document.getElementById(i).setAttribute('src',`images/image-blank.png`);
                imagesReturned = undefined; 
                if(score === 8){
                    document.querySelector('p').innerHTML = "Congratulations";
                    clearInterval(myVar);
                }
            }else{
                element.setAttribute('src',`images/image-${board[i][1]}.png`);
                document.getElementById(imagesReturned).setAttribute('src',`images/image-back.png`);
                document.getElementById(i).setAttribute('src',`images/image-back.png`);
                imagesReturned = undefined;
            }
        }else{
            imagesReturned = i;
        }
    }); 
};

/* init the game */ 
const initGame = function(){
        let cell = undefined;
    for(let i=0;i<imageIndexs.length;i++){
        cell = Math.floor(Math.random() * cellIndexs.length);
        board.push([cellIndexs[cell],i]);
        cellIndexs.splice(cell,1);
        cell = Math.floor(Math.random() * cellIndexs.length);
        board.push([cellIndexs[cell],i]);
        cellIndexs.splice(cell,1);
    }

    board.sort(function (item1, item2) {
        return item1[0] > item2[0];
      });

    printBoard();
}

/* printing the initial board */ 
const printBoard = function(){
    let element = undefined;
    for(let i=0;i<board.length;i++){
            element = document.createElement('img');
            element.setAttribute('src',`images/image-back.png`);
            element.setAttribute('id',`${i}`);
            imageElements.push(element);
            bindListener(i, element);
            rootElement.appendChild(element);
    }
};

/* setting a timer to time the game  */ 
var myVar = setInterval(myTimer, 1000);
function myTimer () {
    if(time > 60){
        timer.textContent = Math.trunc(time/60)+":"+time%60;
        time++;
    }else{
        timer.textContent = time++;
    }
};


