const timeSpan = document.querySelector('#timer');
let time = 0;
timeSpan.innerText = time;

const scoreSpan = document.querySelector('#score');
let score = 0;
scoreSpan.innerText = score;

const cells = document.querySelectorAll('.cell');

const speed = 800;

function randomAnt(){
  removeAnt();
  const randNum = Math.floor(Math.random() * cells.length);
  const cell = cells[randNum];
  cell.classList.add('ant');
}

function removeAnt(){
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.classList.remove('ant')
  }
}

const movement = setInterval(randomAnt, speed);

for (let i = 0; i < cells.length; i++) {
  const cell = cells[i];
  cell.addEventListener('click', function(){
    if(cell.classList.contains('ant')) {
      cell.classList.add('splat');
      score++;
      scoreSpan.innerText = score;
      setTimeout(removeSplat, 300);
    }
  })
}

function removeSplat(){
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.classList.remove('splat')
  }
}


