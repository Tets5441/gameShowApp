const qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
const startBtn = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const UL = document.querySelector('ul');
const title = document.createElement('title');
const letter = document.getElementsByClassName('letter');
const space = document.getElementsByClassName('space');
const mainContainer = document.querySelector('.main-container');
const div = document.createElement('div');
const keyboardButton = qwerty.querySelectorAll('button');
const playAgainButton = document.createElement('button');
const scoreBoard = document.getElementById('scoreboard');
var scoreboardList = scoreBoard.children;
let missed = 0;
let lostHeart = 5;


//hide overlay when start button clicked
startBtn.addEventListener('click', (event) => {
    overlay.style.display = 'none';
})

// create array
const phrases = ['IRON MAIDEN', 'MACHINE HEAD', 'FAITH NO MORE', 'MAD CADDIES', 'PENNYWISE'];

//do stuff to any arr that is passed in 
const getRandomPhraseArray = arr => {
    return phrase = arr[Math.floor(Math.random() * arr.length)]; 
}

// set phrase
const addPhraseToDisplay = arr => {
    for(let i = 0; i < arr.length; i += 1) {
        let li = document.createElement('li');
        li.textContent = arr[i].toUpperCase();
        UL.appendChild(li);
        if (arr[i] != ' ') {
            li.className = 'letter';
        } else {
            li.className = 'space';
        }
    }
}

const phraseArray = getRandomPhraseArray(phrases);
addPhraseToDisplay(phraseArray);

// add event listener to keyboard

qwerty.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const button = e.target;
    button.classList.add("chosen");
    button.disabled = "true";
    const checked = checkLetter(button);
      if (checked === null) {
        missed += 1;
        console.log("That's! " + missed + " incorrect guess(s).");
        document.querySelector(".tries").className = "lostheart";
      }
      checkWin();
  }
});

// check letter
//this is not working, does not show as correct when  correct letter is picked

const checkLetter = yourGuess => {
    let li = document.querySelectorAll('.letter');
    let letterFound;
    for (let i = 0; i < li.length; i++) {
      const letter = li[i];
      if (yourGuess.textContent == letter.textContent) {
      letter.classList.add("show");
      letterFound = letter;
    }
  }
    if (letterFound) {
      console.log("That's correct!");
      return letterFound;
  } else {
      return null;
  }
}

  function checkWin() {
    const liLetter = document.querySelectorAll(".letter");
    const liShow = document.querySelectorAll(".show");
    if (liLetter.length === liShow.length) {
      playAgain();
      title.textContent = "You win";
      div.id = "win";
      div.classList.add("win");
      console.log("You win!");
    }
    if (missed == 5) {
      playAgain();
      title.textContent = "Sorry, you didn't win!";
      div.id = "lose";
      div.classList.add("lose");
      console.log("Sorry, you didn't win!");
    }
  }

  
