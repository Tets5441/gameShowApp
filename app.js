const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startBtn = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const letter = document.getElementsByClassName('letter');
const space = document.getElementsByClassName('space');
//const phraseArray = getRandomPhraseAsArray(phrases);
let missed = 0;


//hide overlay when start button clicked
startBtn.addEventListener('click', (event) => {
    overlay.style.display = 'none';
})

const phrases = ['IRON MAIDEN', 'MACHINE HEAD', 'FAITH NO MORE', 'MAD CADDIES', 'PENNYWISE'];

//do stuff to any arr that is passed in 
function getRandomPhraseArray(arr){
    return randomPhrase = arr[math.floor(math.random() * arr.length)];
}


// do stuff any arr that is passed in, and add to `#phrase ul`
function addPhraseToDisplay(arr) {
    for(i = 0; i < arr.length; i += 1) {
        li = document.createElement('li');
        li.textContent = arr[i]
        phraseUL.appendChild('li');
        if (arr[i] = '') {
            li.className = 'letter';
        } else {
            li.className= 'space';
        }
    }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhrasetoDisplay(phraseArray);

// check letter function

function checkLetter() {
    
}




