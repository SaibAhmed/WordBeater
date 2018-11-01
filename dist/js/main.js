window.addEventListener("load",init);

//Globals
let time = 5;
let Score= 0;
let isPlaying;

//DOM elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const timeDisplay = document.querySelector("#score");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];

  //Initialize Game
  function init() {
    console.log("init");
  }