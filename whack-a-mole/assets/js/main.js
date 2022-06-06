let time = 0;
let score = 0;

const timeSpan = document.querySelector('#timer').innerHTML = time;
const scoreSpan = document.querySelector('#score').innerHTML = score;

const cells = document.querySelectorAll('.cell');

let randNum = Math.floor(Math.random() * cells.length);
const cell = cells[randNum];

cell.classList.add('ant');

if (condition) {
  cell.classList.add('splat');
}
