const grid = document.querySelector('#grid');

const cell = [
  'bomb',
  'bone',
  'dinosaur',
  'gamepad',
  'sunglasses',
  'shoes'
];

const deck = [...cell, ...cell];

deck.sort(function(){
  return 0.5 - Math.random();
})

// console.table(deck);

for (let i = 0; i < deck.length; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell')
  grid.appendChild(cell);
}