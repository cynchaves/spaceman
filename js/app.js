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
let correctGuesses;
let incorrectGuessCounter;


const maxGuesses = 6;


/*----- Cached Element References  -----*/
const wordDisplay = document.querySelector('.word-display');
const hintDisplay = document.querySelector('.hint-display');
const incorrectGuesses = document.querySelector('.incorrect-guesses');
const keyboard = document.querySelector('.keyboard');
//const spacemanImg = document.querySelector('.welcome-div');
const resultsDiv = document.querySelector('.results-div');
const resetBtn = document.querySelector('.reset-button'); 

/*-------------- Functions -------------*/
const init = (() => {
    currentWord = '';
    correctGuesses = '';
    incorrectGuessCounter = 0;
    render();
});

init();



/*----------- Event Listeners ----------*/

