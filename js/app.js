/*-------------- Constants -------------*/
const wordList = [
    {
        word: "earth",
        hint: "The third planet from the Sun."
    },
    {
        word: "mars",
        hint: "Also known as the Red Planet."
    },
    {
        word: "mercury",
        hint: "The smallest planet in the Solar System."
    },
    {
        word: "jupiter",
        hint: "The largest planet in the Solar System."
    },
    {
        word: "uranus",
        hint: "Planet named after the Greek god Ouranos."
    },
    {
        word: "venus",
        hint: "The brightest planet in the Solar System."
    },
    {
        word: "saturn",
        hint: "Planet known for its many rings."
    },
    {
        word: "neptune",
        hint: "Known for possesing the fastest wind speed of any planet."
    },
    {
        word: "galaxy",
        hint: "A system of stars, interstellar gas and dark matter."
    },
    {
        word: "astronomy",
        hint: "The study of the universe beyond Earth's atmosphere."
    },
];

/*---------- Variables (state) ---------*/
let currentWord;
let correctLtrGuesses;
let incorrectGuessCount;
let button;
const maxGuesses = 6;

/*----- Cached Element References  -----*/
const wordDisplay = document.querySelector('.word-display');
const hintDisplay = document.querySelector('.hint-display');
const incorrectGuesses = document.querySelector('.incorrect-guesses b');
const keyboard = document.querySelector('.keyboard');
const spacemanImg = document.querySelector('.welcome-display img');
const resultsDisplay = document.querySelector('.results-display');
const resetBtn = document.querySelector('.reset-button');

/*-------------- Functions -------------*/
const wordSelector = (() => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = `${word}`;
    hintDisplay.textContent = `Hint - ${hint}`;
});

const init = (() => {
    wordSelector();
    correctLtrGuesses = [];
    incorrectGuessCount = 0;
    spacemanImg.src = 'images/star-0.png';
    incorrectGuesses.innerText = `${incorrectGuessCount} / ${maxGuesses}`;
    wordDisplay.innerHTML = currentWord.split('').map(() => `<li class='letter'></li>`).join('');
    keyboard.querySelectorAll('button').forEach((button) => button.disabled = false);
    resultsDisplay.classList.remove('show');
});

const endGameDisplay = ((isWin) => {
    resultsDisplay.querySelector('img').src = `images/${isWin ? 'win' : 'lost'}.gif`;
    resultsDisplay.querySelector('h4').innerText = isWin ? 'Congratulations! You Won!' : 'Please try again';
    resultsDisplay.classList.add('show');
});

for (let i = 97; i <= 122; i++) {
    button = document.createElement('button');
    button.innerText = String.fromCharCode(i);
    keyboard.appendChild(button);
    button.addEventListener('click', (event) => gamePlay(event.target, String.fromCharCode(i)));
};

const gamePlay = ((button, selectedLetter) => {
    if (currentWord.includes(selectedLetter)) {
        [...currentWord].forEach((letter, index) => {
        if (letter === selectedLetter) {
          correctLtrGuesses.push(letter);
          wordDisplay.querySelectorAll('li')[index].innerText = letter;
          wordDisplay.querySelectorAll('li')[index].classList.add('guesses');
        }
      });
    }
    else {
      incorrectGuessCount++;
      spacemanImg.src = `images/star-${incorrectGuessCount}.png`;
    }
    button.disabled = true;
    incorrectGuesses.innerText = `${incorrectGuessCount} / ${maxGuesses}`;
    if (correctLtrGuesses.length === currentWord.length) {
      return endGameDisplay(true);
    }
    else if (incorrectGuessCount === maxGuesses) {
        return endGameDisplay(false);
    };
});

init();

/*----------- Event Listeners ----------*/

resetBtn.addEventListener('click', (init));

