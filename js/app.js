/*-------------- Constants -------------*/
const wordList = [
    {
        word: "giraffe",
        hint: "The tallest mammal in the animal kingdom."
    },
    {
        word: "apple",
        hint: "A red and shiny fruit used to make a popular juice."
    },
    {
        word: "pajamas",
        hint: "Comfy clothes worn to go to sleep."
    },
    {
        word: "canine",
        hint: "An animal considered to be man's best friend."
    },
    {
        word: "vehicle",
        hint: "Used as a primary means of transportation."
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
    currentWord = word;
    hintDisplay.textContent = hint;
});

const init = (() => {
    wordSelector();
    correctLtrGuesses = [];
    incorrectGuessCount = 0;
    spacemanImg.src = 'images/hangman-0.svg';
    incorrectGuesses.innerText = `${incorrectGuessCount} / ${maxGuesses}`;
    wordDisplay.innerHTML = currentWord.split('').map(() => `<li class='letter'></li>`).join('');
    keyboard.querySelectorAll('button').forEach((button) => button.disabled = false);
    resultsDisplay.classList.remove('show');
});

const endGameDisplay = ((isWin) => {
    const resultsText = isWin ? `You found the correct word: ` : `The correct word was: `;
    resultsDisplay.querySelector('img').src = `images/${isWin ? 'victory' : 'lost'}.gif`;
    resultsDisplay.querySelector('h4').innerText = isWin ? 'Congratulations! You Won!' : 'Please try again';
    resultsDisplay.querySelector('p').innerHTML = `${resultsText} <b>${currentWord}</b>`;
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
      spacemanImg.src = `images/hangman-${incorrectGuessCount}.svg`;
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

