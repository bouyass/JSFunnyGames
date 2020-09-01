var size = 5;
var board = document.getElementById('gameBoard');
var turn = 'green';

document.addEventListener('DOMContentLoaded', (event) => {
    initGame(); 
});

const initGame = function(){
    // creating the board 
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

const addListener = function(element){
    element.addEventListener('click', (event) => {
        if(turn === 'green'){

        }else{

        }
        checkGame();
    })
}


const checkGame = function (){

}