// here the main game starts

let score=document.querySelector('.score');
let live=document.querySelector('.livecomment');
let playto=document.querySelector('#playingto');

let p1=document.querySelector('#player1');
let p2=document.querySelector('#player2');
let reset=document.querySelector('#reset');


let score1=0;
let score2=0;

function winCase(){
    p1.disabled=true;
    p2.disabled=true;
    if (score1===parseInt(playto.value)){
        live.innerText="Player 1 wins";
        p1.classList.toggle('green');
        p2.classList.toggle('red');
    }
    else{
        p2.classList.toggle('green');
        p1.classList.toggle('red');
        live.innerText="Player 2 wins";
    }
}

function scoreUpdate(){
    score.innerText=`Score : ${score1} of ${score2}`;
    if(score1>score2){
        live.innerText=`Player 1 leads by ${score1-score2} points`;
    }
    else if(score2>score1){
        live.innerText=`Player 2 leads by ${score2-score1} points`;   
    }
    else if(score1===0 && score2===0){
        live.innerText="Start the game";
    }
    else{
        live.innerText="No one leads";
    }
}

p1.addEventListener('click',function(e){
    if(playto.value){
        score1++;
        scoreUpdate();
        if(score1==playto.value){
            winCase();
        }
    }
    else{
        alert('Please select first Playing To number');
    }
})

p2.addEventListener('click',function(e){
    if(playto.value){
        score2++;
        scoreUpdate();
        if(score2==playto.value){
            winCase();
        }
    }
    else{
        alert('Please select first Playing To number');
    }
})

console.dir(playto)


window.addEventListener('keydown',function(e){

    if(e.key==="1"){
        if(playto.value){
            score1++;
            scoreUpdate();
            if(score1==playto.value){
                winCase();
            }
        }
        else{
            alert('Please select first Playing To number');
        }
        
    }
    else if(e.key==="2"){
        if(playto.value){
            score2++;
            scoreUpdate();
            if(score2==playto.value){
                winCase();
            }
        }
        else{
            alert('Please select first Playing To number');
        }
    }
})

reset.addEventListener('click',function(e){
    playto.selectedIndex=0;
    p1.disabled=false;
    p2.disabled=false;
    score1=0;
    score2=0;
    p1.classList.remove('green')
    p1.classList.remove('red')
    p2.classList.remove('green')
    p2.classList.remove('red')
    scoreUpdate();
})