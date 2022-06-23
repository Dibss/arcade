
const scoreSpan = document.querySelector('#score');
let score = 0;
scoreSpan.innerHTML = score;

const road = document.querySelectorAll('#grid > div');

let rockSpeed = 350;

const ghostIdx = 1;
const ghost = road[ghostIdx];
ghost.classList.add('ghost');

function addRock(){
  let rockIdx = road.length - 1;
  road[rockIdx].classList.add('rock');

  const rockMovement = setInterval(function(){
    score++;
    scoreSpan.innerHTML = score;

    if(score == 15){
      rockSpeed = 250;
    } else if(score == 30){
      rockSpeed = 200;
    } else if(score == 40){
      rockSpeed = 150;
    } else if(score == 60){
      rockSpeed = 100;
    }
    
    road[rockIdx].classList.remove('rock');
    rockIdx--;
    
    if(rockIdx < 0){
      clearInterval(rockMovement);
      addRock();
      return;
    }

    if(rockIdx === ghostIdx && !road[ghostIdx].classList.contains('ghostUp')){
      clearInterval(rockMovement);
      winLose('Hai perso!');
      road[ghostIdx].classList.remove('ghost');
      road[ghostIdx].classList.add('rock');
    } else if(rockIdx === ghostIdx && road[ghostIdx].classList.contains('ghostUp')){
    }
    
    road[rockIdx].classList.add('rock');

  }, rockSpeed)
}

addRock();


function jump(space){
  console.log(space);
  if(space.code == 'Space' && space.repeat == false){
    ghost.classList.add('ghostUp');
    setTimeout(function(){
      ghost.classList.remove('ghostUp');
    }, 300);
  }
};

document.addEventListener('keydown', jump);
