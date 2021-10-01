let game = document.getElementById('game');
let res =  document.getElementById('res')
let hod = 1;
let btnGame = document.getElementById('again');
game.addEventListener('click', init);
let turns = document.getElementById('turns');
let step = false;
let plane = '&#9992';
let cloud = '&#9729';
for (let i = 0; i < 9; i++){
    document.getElementById('game').innerHTML+='<div class="block"></div>';
}
let allblock = document.querySelectorAll('.block');
function stepPlane(target){
target.innerHTML = plane;
target.classList.add('x');
let pl1 = document.getElementById('pl1').style.backgroundColor =  'rgb(230, 135, 76)'; 
  let pl2 = document.getElementById('pl2').style.backgroundColor = 'seagreen'; 
  turns.innerHTML = 'Number of turns' + ' ' + hod; 
hod++
}
function stepCloud(target){
target.innerHTML = cloud;
target.classList.add('o');
let pl1 = document.getElementById('pl1').style.backgroundColor = 'seagreen'; 
let pl2 = document.getElementById('pl2').style.backgroundColor = 'rgb(230, 135, 76)'; 
turns.innerHTML = 'Number of turns' + ' ' + hod; 
hod++
}
function init (e){
    if(!step) {stepPlane(e.target);
    
    }else stepCloud(e.target);
    step = !step;
    
win()
}
function newGame(){
step = false;
hod = 1;
res.innerText = '';
allblock.forEach(item => {
    item.innerHTML = '';
    item.classList.remove('x', 'o', 'active');
});
game.addEventListener('click', init)
}
function win(){
let comb = [
 [0, 1, 2],
 [3, 4, 5],
 [6, 7, 8],
 [0, 3, 6],
 [1, 4, 7],
 [2, 5, 8],
 [2, 4, 6],
 [0, 4, 8]
];
for( let i = 0; i < comb.length; i++){
    if(allblock[comb[i][0]].classList.contains('x') &&
    allblock[comb[i][1]].classList.contains('x') &&
    allblock[comb[i][2]].classList.contains('x')) {
        allblock[comb[i][0]].classList.add('active');
         allblock[comb[i][1]].classList.add('active');
         allblock[comb[i][1]].classList.add('active');
         res.innerText = 'Player 1 WON!!!';
         game.removeEventListener('click', init);
    }
    else if(allblock[comb[i][0]].classList.contains('o') &&
    allblock[comb[i][1]].classList.contains('o') &&
    allblock[comb[i][2]].classList.contains('o')) {
        allblock[comb[i][0]].classList.add('active');
         allblock[comb[i][1]].classList.add('active');
         allblock[comb[i][1]].classList.add('active');
         res.innerText = 'Player 2 WON!!!';
         game.removeEventListener('click', init);
    }else if(hod == 10){
        res.innerText = 'IT IS A DRAW!!!';
        game.removeEventListener('click', init);
    }
}
btnGame.addEventListener('click', newGame);
}


