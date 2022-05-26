const cells = document.querySelectorAll('.cell');

let turn = 0;

const cellSigns = [];

for (let i = 0; i < cells.length; i++) {
  
  const cell = cells[i];
  cell.addEventListener('click', function(){

    if(cellSigns[i]){
      return;
    }

    turn++;

    let sign;
    if(turn % 2 === 0){
      sign = 'O';
    } else {
      sign = 'X';
    }

    cell.innerText = sign;
    cellSigns[i] = sign;

    // const random = Math.floor(Math.random() * cells.length)
    
    let win = checkWin();

    if(win){
      winLose(`${sign} ha vinto!`);
      removeEventListener('click', cell);
    } else if(turn === 9){
      winLose(`Pareggio!`);
      removeEventListener('click', cell);
    }

  })
  
}


function checkWin(){
  const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < combinations.length; i++) {
    const combination = combinations[i];
    
    const a = combination[0];
    const b = combination[1];
    const c = combination[2];
    
    if(cellSigns[a] && cellSigns[a] === cellSigns[b] && cellSigns[b] === cellSigns[c]){
      return true;
    }
  }

  return false;
}



