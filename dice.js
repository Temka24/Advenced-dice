window.alert('Welcome to my dice game ')

var ActivePlayer = 1

var holdscore = document.getElementById("player" + ActivePlayer + "-hold-scr").textContent
holdscore = Number(holdscore)


document.getElementById("roll-btn").addEventListener("click", function(){

    var DiceNumber = Math.ceil(Math.random()*6)
    document.getElementById("img").src = 'dice-' + DiceNumber + '.png'
 
    holdscore = holdscore + DiceNumber
    document.getElementById("player" + ActivePlayer + "-hold-scr").textContent = holdscore

    if(DiceNumber === 1){

        holdscore = 0
        document.getElementById("player" + ActivePlayer + "-hold-scr").textContent = 0

        if(ActivePlayer === 1){
            ActivePlayer = 2
        }
        else{
            ActivePlayer = 1
        }
    }
    
})

document.getElementById("hold-btn").addEventListener("click", function(){

    var score = holdscore
    score = Number(score)

    ownscore = document.getElementById("player" + ActivePlayer + "-scr").textContent 
    ownscore = Number(ownscore)

    document.getElementById("player" + ActivePlayer + "-scr").textContent = score + ownscore

    holdscore = 0
    document.getElementById("player" + ActivePlayer + "-hold-scr").textContent = 0






    if(document.getElementById("player" + ActivePlayer + "-scr").textContent  >= 50){
        window.alert("Player" + ActivePlayer  + "winn !!")
        ActivePlayer = 1
   document.getElementById("player1-hold-scr").textContent = 0
   document.getElementById("player2-hold-scr").textContent = 0
   document.getElementById("player1-scr").textContent = 0
   document.getElementById("player2-scr").textContent = 0

        
    }

    if(ActivePlayer === 1){
        ActivePlayer = 2
    }
    else{
        ActivePlayer = 1
    }

})



document.getElementById("newgame").addEventListener("click", function(){

   ActivePlayer = 1
   document.getElementById("player1-hold-scr").textContent = 0
   document.getElementById("player2-hold-scr").textContent = 0
   document.getElementById("player1-scr").textContent = 0
   document.getElementById("player2-scr").textContent = 0

})