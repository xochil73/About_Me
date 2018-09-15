'use strict';

var correctGuesses = 0;

//userName Question

var userName = prompt ('Hi! My name is Xochil! Welcome to my page! What\'s your name?');
console.log('Hi! My name is Xochil! Welcome to my page! What\'s your name? :' + userName);

//Hometown Question
var hometownQuestion = function() {
  var born = prompt('Was Xochil born in Seattle?');
  born= born.toLowerCase();
  if (born==='yes' || born==='y'){
    alert('Bingo, ' + userName + ', born and raised!');
    correctGuesses++;
  }else if (born=== 'no' || 'n'){
    alert ('Whoops!  I was totally born here!');
  }else {
    alert('Come on, answer yes or no!');
  }
  console.log('Was Xochil born in Seattle :' + born);
};

//Own Business Question
var businessQuestion = function() {
  var ownBiz = prompt ('Has Xochil owned her business since 2013?');
  ownBiz = ownBiz.toLowerCase();
  if (ownBiz==='yes' || ownBiz==='y'){
    alert('Yes, that\'s correct, ' + userName +'! I opened up my business, X Spa, in January 2013. Originally started in a small salon on Greenwood, I am now located in the heart of the beautiful Fremont neighborhood!');
    correctGuesses++;
  }else if (ownBiz=== 'no' || ownBiz==='n'){
    alert('Try again, ' + userName );
  }else {
    alert('You have to answer yes or no!');
  }
  console.log('Has Xochil owned her business since 2013:' + ownBiz );
};


//Management Experience
var managementQuestion = function() {
  var manage = prompt ('Does Xochil have management experience?');
  manage= manage.toLowerCase();
  if (manage==='yes' || manage==='y') {
    alert('That\'s right, ' + userName + '! I managed the spa team for several years at a local Seattle neighborhood salon!');
    correctGuesses++;
  }else if (manage==='no' || manage==='n'){
    alert('Try again, ' + userName);
  }else {
    alert('You must answer yes or no!');
  }
  console.log('Does Xochil have management experience:' + manage);
};


//Problem Solving Question
var problemQuestion = function() {
  var problems = prompt ('Does Xochil love to solve problems?');
  problems= problems.toLowerCase();
  if (problems==='yes' || problems==='y') {
    alert('Bingo, ' + userName + ' ! I love finding solutions!');
    correctGuesses++;
  }else if (problems==='no' || problems==='n'){
    alert('Try again,' + userName);
  }else {
    alert('You must answer yes or no!');
  }
  console.log('Does Xochil love to solve problems:' + problems);
};


//Work Question
var workQuestion = function() {
  var work = prompt ('Does Xochil love working & collaborating with others?');
  work= work.toLowerCase();
  if (work==='yes' || work==='y') {
    alert('Bingo, ' + userName + ' , Xochil enjoys working alongside others to create the most dimensional work.');
    correctGuesses++;
  }else if (work==='no' || work==='n'){
    alert('Try again ' + userName);
  }else {
    alert('You must answer yes or no!');
  }
  console.log('Does Xochil love working & collaborating with others:' + work);
};


//Fave Number Question
var faveNumQuestion = function() {
//   var answeredCorrectly = false;
  var faveNum = prompt ('Let\'s have some fun!  I am thinking of a number betweem 1-20. Can you guess it?  You have four tries...');
  console.log('Let\'s have some fun!  I am thinking of a number between 1-20. Can you guess it? You have four tries...' + faveNum);
  var myNum = (Math.floor(Math.random() * Math.floor(20))) + 1;
  console.log('myNum: ' + myNum);
  faveNum = parseInt(faveNum);
  for(var i = 0; i < 4; i++){
    if (faveNum === myNum) {
      alert('Nice work! That is correct ' + userName);
      correctGuesses++;
      console.log('That is correct:' + faveNum);
      break;
    }else if (i === 3) {
      alert('The number was ' + myNum + '.');
      break;
    }else if (faveNum < myNum){
      faveNum = prompt('Think a little higher...');
      faveNum = parseInt(faveNum);
      console.log('Too low:' + faveNum);
    }else {
      faveNum = prompt('Wow! Aiming too high! Try a little less.');
      faveNum = parseInt(faveNum);
      console.log('Too high:' + faveNum);
    }
  }
};


/*Different Jobs Question*/
var diffJobsQuestion = function() {
  var randomJobs = ['doorman', 'bartender', 'ice-cream truck driver', 'grocery store checker'];
  var answeredCorrectly = false;
  var guessCounter = 6;

  do{
    var jobAnswer = prompt('What is a random job Xochil has worked?');
    for(var i=0; i < randomJobs.length; i++){
      if(randomJobs[i] === jobAnswer){
        answeredCorrectly = true;
        break;
      }
    }
    if (answeredCorrectly) {
      alert('That is correct.');
      correctGuesses++;
    } else {
      alert('Nice try. Guess again.');
    }
    guessCounter--;

  }while(guessCounter > 0 && !answeredCorrectly);

  if (!answeredCorrectly) {
    alert('Nice try! Xochil has been a doorman, bartender, ice-cream truck driver, and grocery store checker.');
  }
};


// Call functions
hometownQuestion();
businessQuestion();
managementQuestion();
problemQuestion();
workQuestion();
faveNumQuestion();
diffJobsQuestion();

// End of questions
alert('You answered ' + correctGuesses + ' out of 7 questions correctly!');
