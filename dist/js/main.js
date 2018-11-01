window.addEventListener("load",init);

// Availaible Levels
const levels = {
  easy:5,
  medium:3,
  hard:1
}

// to change level
const currentLevel = levels.easy;

//Globals
let time = currentLevel;
let Score= 0;
let isPlaying;

//DOM elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");
const scoreDisplay = document.querySelector("#score");

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

    //show number of seconds in UI
    seconds.innerHTML = currentLevel;
    
    //load word from array
    showWord(words);

    //start matching on word input
    wordInput.addEventListener("input",startMatch);


    //call countDown every second
    setInterval(countDown,1000);

    //check game status
    setInterval(checkStatus , 50);
  }

  // start match
  function startMatch(){
    if(matchWords()){
      isPlaying = true;
      time = currentLevel + 1;
      showWord(words);
      wordInput.value = "";
      Score++;
    }
    if(Score === -1){
      scoreDisplay.innerHTML = 0;
    }else{
      scoreDisplay.innerHTML = Score;
    }
    ;
  }

  //match current word to wordInput
  function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
      message.innerHTML = "correct!";
      return true;
    }else{
      message.innerHTML = "";
      return false;
    }
  }

  // pick and show random word
  function showWord(words){
    //generate random array index
    const randIndex = Math.floor(Math.random() * words.length);

    // output a random word
    currentWord.innerHTML = words[randIndex];


  }

  //countDown timer
  function countDown(){
    //makesure time is not runout
    if(time > 0){
      //Decrement time
      time--;
      
    }else if(time === 0){
      //game is over
      isPlaying = false;
    }

    //show time 
    timeDisplay.innerHTML = time;

  }

  //check game status
  function checkStatus(){
    if(!isPlaying && time === 0){
      message.innerHTML = "Game Over!";
      Score =-1;
    }
  }