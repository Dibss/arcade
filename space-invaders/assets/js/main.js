const grid = document.querySelector('#grid');
const errorCount = document.querySelector('#errors');

const cell = [
  'bomb',
  'bone',
  'dinosaur',
  'gamepad',
  'sunglasses',
  'shoes'
];

// dunlichiamo tutti gli elementi dell'array cell
const deck = [...cell, ...cell];

let pick = [];

let errors = 0;

errorCount.innerText = errors;

// it mixes the deck to get random placements of the cards
deck.sort(function(){
  return 0.5 - Math.random();
})

// console.table(deck);

for (let i = 0; i < deck.length; i++) {
  const cell = document.createElement('div');
  const cellName = deck[i];
  cell.classList.add('cell')
  // con questo abbiamo messo data-name="nomeDellImmagine" in ogni rispettiva carta
  cell.setAttribute('data-name', cellName)
  // al click giriamo la cella
  cell.addEventListener('click', flip);

  grid.appendChild(cell);
}

function flip(event){
  const cell = event.target;

  // se la carta è flipped la funzione si interrompe
  if(cell.classList.contains('flipped')) return;

  cell.classList.add(cell.getAttribute('data-name'), 'flipped')

  pick.push(cell);

  if(pick.length === 2){
    checkMatch();
  } 

}

function checkMatch(){

  const cell1 = pick[0];
  const cell2 = pick[1];
  const cell1Name = cell1.getAttribute('data-name');
  const cell2Name = cell2.getAttribute('data-name');

  if(cell1Name == cell2Name){
    if(document.querySelectorAll('.flipped').length == deck.length){
      winLose('Hai trovato tutte le coppie!')
    }
  } else {
    setTimeout(function(){
      cell1.classList.remove(cell1Name, 'flipped');
      cell2.classList.remove(cell2Name, 'flipped');
      errors++;
      errorCount.innerText = errors;
    }, 500);
  }
  
  pick = [];

}