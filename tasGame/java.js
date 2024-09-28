// varieables
    let tac = document.querySelectorAll('.tas'); 
    // player1
        let Player1 = document.querySelector('#scorePlayer-1');
        let currentP1 = document.querySelector('#currentScore-p1');
        // player1caculate
            let scorePlayer1 = Number(Player1.innerHTML);
            let currentScoreP1 = Number(currentP1.innerHTML);
    // player2
        let Player2 = document.querySelector('#scorePlayer-2');
        let currentP2 = document.querySelector('#currentScore-p2');
            //player2caculate
                let scorePlayer2 = Number(Player2.innerHTML);
                let currentScoreP2 = Number(currentP2.innerHTML);
    //backgroundForPlayersTurn
        let backgroundLeft = document.querySelector('.leftBox')
        let backgroundRight = document.querySelector('.rightBox');
        
//globalVariable
let turn = 0;
let i = 1 ;
console.log('i='+i)

document.getElementsByClassName('mainBoxBut')[1].addEventListener('click', () => {   
    const randome = Math.floor((Math.random()*6)+1);
    // console.log(randome);
    tac[0].classList.remove('hidden');
    tac[0].src=`images/${randome}.png`;
    
    if (randome==1){
        turn+=1;
        console.log('turn = '+turn);
        i = (turn%2)+1 ;
        console.log('i in if = '+i)
        
        if (i==1) {
            backGround1 = backgroundRight
            backGround2 = backgroundLeft
        } else {
            backGround1 =  backgroundLeft
            backGround2 = backgroundRight
        }
        
        backGround1.classList.remove('active');
        backGround2.classList.add('active');

        // (i === 1) ? (backGround1 = backgroundRight, backGround2 = backgroundLeft) :
        //  (backGround1 = backgroundLeft, backGround2 = backgroundRight);
        // backGround1.classList.remove('active');
        // backGround2.classList.add('active');    
    }else{
        // TODO: باید وقتی جا به جا شد امتیاز هایی ک هولد نشد 0 شود
        if( i===1 ){
            backgroundRight.classList.remove('active');
            backgroundLeft.classList.add('active');
            currentScoreP1 = caculate(currentScoreP1,randome);
            console.log('currentScoreP1 ='+currentScoreP1)
            currentP1.innerHTML =currentScoreP1
        }else if(i === 2 ){
            backgroundLeft.classList.remove('active');
            backgroundRight.classList.add('active');
            currentScoreP2 = caculate(currentScoreP2,randome)
            console.log('currentScoreP2 ='+currentScoreP2)
            currentP2.innerHTML = currentScoreP2
        }
        console.log('i in last loop = '+ i)
        
    }
    
    
});

function caculate(scorePlayerX,random){
    scorePlayerX =scorePlayerX + Number(random);
    return scorePlayerX;
}
// document.getElementsByClassName('mainBoxBut')[1].addEventListener('click', () => {   
//     tac[randome].classList.add('visiablee');
//     tac[randome].style.display = 'none';

// });
