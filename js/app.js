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
        hint: "An animal considered to be mans's best friend."
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
const init = (() => {
    correctLtrGuesses = [];
    incorrectGuessCount = 0;
    spacemanImg.src = 'images/hangman-0.svg';
    incorrectGuesses.innerText = `${incorrectGuessCount} / ${maxGuesses}`;
    wordDisplay.innerHTML = currentWord.split('').map(() => `<li class='letter'></li>`).join('');
    keyboard.querySelectorAll('button').forEach((button) => button.disabled = false);
    resultsDisplay.classList.remove('show');
    //render();
});

const wordSelector = (() => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    hintDisplay.textContent = hint;
    //console.log(currentWord);
    init();
});

wordSelector();



/*----------- Event Listeners ----------*/

