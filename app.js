// Global variables

const qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
const startBtn= document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const title = document.querySelector('.title');
const button = document.querySelector('.btn__reset');
const keyboardButton = qwerty.querySelectorAll('button');
const heart = document.getElementsByTagName('img');
const UL = document.querySelector('ul');
let missed = 0;

// create array
const phrases = ['iron maiden', 'machine head', 'faith no more', 'mad caddies', 'pennywise'];

//hide overlay when start button clicked
startBtn.addEventListener('click', (event) => {
  overlay.style.display = 'none';
});

//do stuff to any arr that is passed in 
const getRandomPhraseArray = arr => {
  return phrase = arr[Math.floor(Math.random() * arr.length)]; 
}

//Set the game display
const addPhraseToDisplay = arr => {
  for(let i = 0; i < arr.length; i += 1) {
      let li = document.createElement('li');
      li.textContent = arr[i];
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

// check if guessed letter is correct

const checkLetter = yourGuess => {
  const letters = document.querySelectorAll('.letter');
  let letterFound = null;
  for(let i = 0; i < letters.length; i+= 1) {
    if (letters[i].textContent === yourGuess ) {
      letters[i].classList.add('show');
      letterFound = true;
    }
  } return letterFound
}

// Check win or lose

function checkWin() {
  let show = document.querySelectorAll('.show');
  let letter = document.querySelectorAll('.letter');
  let next = getRandomPhraseArray(phrases);
  if (show.length === letter.length ) {
    overlay.className = 'win';
    overlay.style.display = 'flex';
    title.textContent = 'Well done, you won!'
    button.textContent = 'Play again?';
  } else if (missed === 5) {
    overlay.className = 'lose';
    overlay.style.display = 'flex';
    title.textContent = 'Oops you lost!'
    button.textContent = 'Play again?';
  }

    startBtn.addEventListener('click', (event) => {
      missed = 0;
      UL.textContent = '';
      overlay.style.display = 'none';
      for (let i = 0; i < heart.length; i+= 1) {
        heart[i].src = 'images/liveHeart.png';
      }
      for (i = 0; i < keyboardButton.length; i+= 1) {
        keyboardButton[i].removeAttribute('class');
        keyboardButton[i].removeAttribute('disabled');
      }
      addPhraseToDisplay(next);
    });
}

// add event listener to keyboard

qwerty.addEventListener('click', (event) => {
  let target = event.target;
  const button = target.textContent;
  if (target.type === 'submit') {
    target.classList.add('chosen');
    target.setAttribute('disabled', ' ');
    let letterFound = checkLetter(button);
    if (letterFound === null) {
    for (let i = 0; i < heart.length; i++) {
      heart[missed].src = 'images/lostHeart.png';
      }
    missed += 1;
   }
  }
  checkWin();
});
