const timeSpan = document.querySelector('#timer');
let time = 30;
timeSpan.innerText = time;

const scoreSpan = document.querySelector('#score');
let score = 0;
scoreSpan.innerText = score;

const cells = document.querySelectorAll('.cell');
const speed = 800;

const start = document.querySelector('#start');

start.addEventListener('click', function(){
  randomAnt();
  removeAnt();
  const movement = setInterval(randomAnt, speed);
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.addEventListener('click', function(){
      if(cell.classList.contains('ant')) {
        score++;
        scoreSpan.innerText = score;
  
        cell.classList.remove('ant');
        cell.classList.add('splat');
  
        setTimeout(function(){
          cell.classList.remove('splat');
        }, 200);
      }
    })
  }
  
  const timer = setInterval(function(){
    time--;
    timeSpan.innerText = time;
    if(time == 0){
      clearInterval(timer);
      clearInterval(movement);
      removeAnt();
      winLose('Tempo scaduto!');
    }
  }, 1000);
})

// const restart = document.querySelector('#restart');
// restart = restart.addEventListener('click', window.location.reload());

function randomAnt(){
  removeAnt();
  const randNum = Math.floor(Math.random() * cells.length);
  const cell = cells[randNum];
  cell.classList.add('ant');
  if(score == 15){
    speed = 700;
  } else if(score == 20){
    speed = 600;
  }
}

function removeAnt(){
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.classList.remove('ant');
  }
}


