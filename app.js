const qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
const startBtn = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const letter = document.getElementsByClassName('letter');
const space = document.getElementsByClassName('space');
const UL = document.querySelector('UL')
let missed = 0;


//hide overlay when start button clicked
startBtn.addEventListener('click', (event) => {
    overlay.style.display = 'none';
})

const phrases = ['IRON MAIDEN', 'MACHINE HEAD', 'FAITH NO MORE', 'MAD CADDIES', 'PENNYWISE'];

//do stuff to any arr that is passed in 
function getRandomPhraseArray(arr){
    return phrase = arr[Math.floor(Math.random() * arr.length)]; 
}

// set phrase
function addPhraseToDisplay(arr) {
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

// check if the letter selected is correct 

function checkLetter(selected) {
    let letterFound = null;
    let answers = UL.children;
    for(let i = 0; i < answers.length; i += 1); {
        if (answers[i].textContent() === selected) {
           answers[i].classList.add('show');
            letterFound = true;
        }
    }
    return letterFound;
}

// get letter pressed on keyboard and check against phrase
qwerty.addEventListener('click', (e) => {

});
   












