const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        let flip_audio = new Audio();
    flip_audio.src = "flip.mp3";
    flip_audio.volume = 0.5;
    
       return flip_audio.play(); 
        
    }
flip_audio.src = "flip.mp3";
    flip_audio.volume = 0.5;
    
    
    secondCard = this;

    checkForMatch();
}
function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();
cards.forEach(card => card.addEventListener('click', flipCard));








    function selectedColor(){
        var index;
    var rows;
        tableHallOfFame = document.getElementById("hall-of-fame-tableID");


        for(var i = 0; i < tableHallOfFame.rows.length; i++)
    {
        tableHallOfFame.rows[i].onclick = function ()
        {
            index = this.rowIndex;
            this.classList.toggle("selected");
            console.log(index)
        }

    }
    }











// var ToggleButton = document.getElementById("ToggleButton");
// var ToggleTarget = document.getElementById("ToggleTarget");
// ToggleTarget.style.visibility = "hidden";

// function ToggleDisplayFunction(){
//     if (ToggleTarget.style.visibility === "hidden") {
//         ToggleTarget.style.visibility = "visible";
//     } else {
//         ToggleTarget.style.visibility = "hidden";
//     }
// }

// ToggleButton.addEventListener("click", ToggleDisplayFunction);

function showToggle() {
    var ToggleButton = document.getElementById("ToggleButton");
    var ToggleTarget = document.getElementById("ToggleTarget");
    if (ToggleTarget.style.display === "none") {
        ToggleTarget.style.display = "block";
    } else {
        ToggleTarget.style.display = "none";
    }
  }





  function refresh(){
    window.location.reload("Refresh")
  }





// let flip_audio = new Audio();
//     flip_audio.src = "flip.mp3";
//     flip_audio.volume = 0.5;