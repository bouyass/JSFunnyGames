var size = 15;
var board = document.getElementById('gameBoard');
var turn = 'green';
var level = 4;

document.addEventListener('DOMContentLoaded', (event) => {
    initGame(); 
});

// creating the board 
const initGame = function(){
 
    for(let i =0; i<size;i++){
        tr = document.createElement('tr');
        tr.setAttribute('id',i);
        board.appendChild(tr);
        for(let j=0;j<size;j++){
            td = document.createElement('td');
            td.setAttribute('id', "row-"+i+"-"+j);
            tr.appendChild(td);
            addListener(td);
        }
        board.appendChild(tr);
    }
}

// reset game
const resetGame = function(){
    for (let l = 0; l<size;l++){
        for(let m = 0;m<size;m++){
            document.getElementById(`row-${l}-${m}`).innerHTML = '';   
        }
    }
    turn = "green";
}

// add click listeners to table cells 
const addListener = function(element){
    let id = element.getAttribute('id');
    let indexs = id.split('-');
    element.addEventListener('click', (event) => {
        if(turn === 'green'){
            if(element.children.length === 0){
                let greenCircle = document.createElement('img');
                greenCircle.setAttribute('src','images/green.png');
                greenCircle.setAttribute('id',`${indexs[1]}-${indexs[2]}-green`);
                element.appendChild(greenCircle);
                turn = "red";
            }
        }else{
            if(element.children.length === 0){
                let redCircle = document.createElement('img');
                redCircle.setAttribute('src','images/red.png');
                redCircle.setAttribute('id',`${indexs[1]}-${indexs[2]}-red`);
                element.appendChild(redCircle);
                turn = "green";
            }
        }
        checkGame(turn === 'green' ? "red" : "green");
    })
}

// check alignement function
const checkGame = function (turn){

    let serie = 0;

    // horizontal check
    for (let l = 0; l<size;l++){
        for(let m = 0;m<size;m++){
            if(document.getElementById(`${l}-${m}-${turn}`) !== null){
                serie++;
                // if 4 balls have been aligned, win
                if(serie === level){
                    alert("The "+turn+" player won !!");
                    resetGame();
                }
            }else{
                serie = 0;
            }
        }
    }

    // vertical check
    for(let l = 0; l<size;l++){
        for(let m = 0;m<size;m++){
            if(document.getElementById(`${l}-${m}-${turn}`) !== null){
                serie++;
                // if 4 balls have been aligned, win
                if(serie === level){
                    alert("The "+turn+" player won !!");
                    resetGame();
                }
            }else{
                serie = 0;
            }
        }
    }

    // vertical check
    for (let l = 0; l<size;l++){
        for(let m = 0;m<size;m++){
            if(document.getElementById(`${l+m}-${m}-${turn}`) !== null){
                serie++;
                // if 4 balls have been aligned, win
                if(serie === level){
                    alert("The "+turn+" player won !!");
                    resetGame();
                }
            }else{
                serie = 0;
            }
        }
    }

    for (let l = 0; l<size;l++){
        for(let m = 0;m<size;m++){
            if(document.getElementById(`${l+m}-${m}-${turn}`) !== null){
                serie++;
                // if 4 balls have been aligned, win
                if(serie === level){
                    alert("The "+turn+" player won !!");
                    resetGame();
                }
            }else{
                serie = 0;
            }
        }
    }

    
    
}

