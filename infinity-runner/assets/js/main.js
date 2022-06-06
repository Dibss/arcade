const score = document.querySelector('#score');

const road = document.querySelectorAll('#grid > div');

const rockSpeed = 400;

const ghostIdx = 1;
const ghost = road[ghostIdx];
ghost.classList.add('ghost');

function addRock(){
  let rockIdx = road.length - 1;
  road[rockIdx].classList.add('rock');

  const rockMovement = setInterval(function(){
    road[rockIdx].classList.remove('rock');
    rockIdx--;
    
    if(rockIdx < 0){
      clearInterval(rockMovement);
      addRock();
      return;
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
