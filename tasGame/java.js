let elements = {
    tac: document.querySelectorAll('.tas'),
    player1: {
      Player1: document.querySelector('#scorePlayer-1'),
      currentP1: document.querySelector('#currentScore-p1'),
      scorePlayer1: Number(document.querySelector('#scorePlayer-1').innerHTML),
      currentScoreP1: Number(document.querySelector('#currentScore-p1').innerHTML)
    },
    player2: {
      Player2: document.querySelector('#scorePlayer-2'),
      currentP2: document.querySelector('#currentScore-p2'),
      scorePlayer2: Number(document.querySelector('#scorePlayer-2').innerHTML),
      currentScoreP2: Number(document.querySelector('#currentScore-p2').innerHTML)
    },
    backGrounds: {
      backgroundLeft: document.querySelector('.leftBox'),
      backgroundRight: document.querySelector('.rightBox')
    }
  };
  
   // دسترسی به scorePlayer1 یا scorePlayer2 به صورت دینامیک
  
//globalVariable
let turn = 0;
let i = 1 ;
console.log('i out of if='+i)

//functionBackGroundTurn
function backGround(i){
    if(i==1) {
        backGround1 = elements['backGrounds']['backgroundRight']
        backGround2 = elements['backGrounds']['backgroundLeft']
    } else {
        backGround1 =  elements['backGrounds']['backgroundLeft']
        backGround2 = elements['backGrounds']['backgroundRight']
    }
    
    backGround1.classList.remove('active');
    backGround2.classList.add('active');
}

//caculate function
function caculate(scorePlayerX,random){
    scorePlayerX =scorePlayerX + Number(random);
    return scorePlayerX;
}


document.getElementsByClassName('mainBoxBut')[1].addEventListener('click', () => {   
    const randome = Math.floor((Math.random()*6)+1);
    // console.log(randome);
    elements['tac'][0].classList.remove('hidden');
    elements['tac'][0].src=`images/${randome}.png`;
    
    if (randome==1){
        if (elements[`player${i}`][`currentScoreP${i}`]!==0){
            elements[`player${i}`][`currentScoreP${i}`] = 0;
            elements[`player${i}`][`currentP${i}`].innerHTML =0;
        }
        turn+=1;
        console.log('turn = '+turn);
        i = (turn%2)+1 ;
        console.log('i in if = '+i)
        
        backGround(i);   
    }else{
        backGround(i)
        currentScore = elements[`player${i}`][`currentScoreP${i}`];
        console.log(currentScore);
        current = elements[`player${i}`][`currentP${i}`];
        elements[`player${i}`][`currentScoreP${i}`] = caculate(Number(currentScore),randome);
        console.log(currentScore);
        current.innerHTML = elements[`player${i}`][`currentScoreP${i}`];
        
    }    
});

document.getElementById('Hold').addEventListener('click',()=>{
    elements[`player${i}`][`scorePlayer${i}`]= elements[`player${i}`][`scorePlayer${i}`] + elements[`player${i}`][`currentScoreP${i}`];
    elements[`player${i}`][`Player${i}`] .innerHTML= elements[`player${i}`][`scorePlayer${i}`];
    elements[`player${i}`][`currentScoreP${i}`] = 0;
    elements[`player${i}`][`currentP${i}`].innerHTML =0;
    turn+=1;
    console.log('turn = '+turn);
    i = (turn%2)+1 ;
    console.log('i in if = '+i)
        
    backGround(i);
})
