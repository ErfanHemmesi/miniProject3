// variables
let userGuess = document.querySelectorAll('.items');
// console.log(userGuess);
let cpuGuess = document.querySelectorAll('.weapon');
// console.log(cpuGuess);

// let randomNumber = Math.floor((Math.random()*10)/4);

let usScore = document.querySelectorAll('#scoore1 h2');
let cpScore = document.querySelectorAll('#scoore2 h2');

// hiddden function
function hidddenOther(i){
        for(let j = 0; j < userGuess.length; j++) {
            if (j != i) {
                userGuess[j].classList.toggle('hidden');
            }
        }
}
//gradeSystem function
function gradeSystem(user,cpu){
    if (user !== cpu) {
        userScore = Number(usScore[1].innerHTML);
        cpuScore = Number(cpScore[1].innerHTML);
        if (user == 0){
            if (cpu == 1){
                cpScore[1].innerHTML = cpuScore + 1
                
            }else{
                usScore[1].innerHTML = userScore + 1
                
            }
        }else if (user ==1){
            if (cpu == 2){
                cpScore[1].innerHTML = cpuScore + 1
            }else{
                 usScore[1].innerHTML = userScore + 1
            }
        }else if(user == 2){
            if (cpu == 0){
                cpScore[1].innerHTML = cpuScore + 1
            }else{
                 usScore[1].innerHTML = userScore + 1
            }
        }
    }

}


// main caculator
for(let i = 0; i < userGuess.length; i++) {
    userGuess[i].addEventListener('click',()=> {
        hidddenOther(i);
        let randomNumber = Math.floor((Math.random()*10)/4);
        console.log(randomNumber);
        cpuGuess[randomNumber].classList.remove('hidden');
        gradeSystem(i,randomNumber)
    });
}
//resetFunction
function reset(){
    for(let i=0; i<userGuess.length ; i++ ){
        userGuess[i].classList.remove('hidden');
        cpuGuess[i].classList.add('hidden');
    }
}

// refresh
let but = document.getElementById("resetBut");
but.addEventListener('click', ()=>{
    reset();
    usScore[1].innerHTML = 0;
    cpScore[1].innerHTML = 0;
})

//keydown
document.addEventListener('keydown',(e)=>{
    if (e.key == 'r'){
        reset()
    }
})

