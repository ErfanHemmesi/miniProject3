let randomNumber = Math.floor(Math.random()*20);
console.log(randomNumber)

document.querySelector("#buttonArea").addEventListener('click',()=>{
    let userguss=Number(document.querySelector("#userGuess").value);
    let result = document.querySelector('#historyArea > h2')
    if (userguss && userguss>1){
        if(userguss>randomNumber){
            result.textContent = "too big"
        }else if(userguss<randomNumber){
            result.textContent = "too small"
        }else{
            document.querySelector('body').style.backgroundColor = 'rgb(0,250,0)';
            result.style.color= 'red'
            result.innerHTML= "win"
            document.querySelector("#userGuess").disabled = true ;
            
        }
    }else{
        test()
    }
})

function test(){
    alert("Enter Number")
}