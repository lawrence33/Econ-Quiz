//Questions
var theQuestionObj = [{
  question: 'Who is the current Chairman of the Federal Reserve, & who were they appointed by?',
  answers: ['Alan Greenspan', 'Janet Reno', 'Janet Yellen', 'Ben Bernanke'],
  correct: '2',
  // id: 50
}, {
  question: 'Roughly, what is the current US federal debt total?',
  answers: ['$11 trillion', '$950 billion', '$21 trillion', 'Watchu talkin bout Willis?! We dont have no stinkin debt!'],
  correct: '2'
}, {
  question: 'What is the difference between the US debt & the US deficit?',
  answers: ['There is no difference.', 'The deficit is the total of all debts.', 'One is controlled by the Federal Reserve.', 'The deficit is our yearly debt.'],
  correct: '3'
}, {
  question: 'Which president has grown the debt more than every other president combined?',
  answers: ['Abe Lincoln', 'George W. Bush', 'Barack H. Obama', 'Ronald Reagan'],
  correct: '2'
}, {
  question: 'What is the federal governments largest expesnse??',
  answers: ['Social Justice programs', 'Entitlement programs', 'Defense spending', 'Department of Education'],
  correct: '1'
}, {
  question: 'What institution(s) are involved in monetizing the US debt?',
  answers: ['US Treasury & individual banks', 'US Treasury alone', 'Department of Finance & Federal Reserve', 'Federal Reserve & US Treasury'],
  correct: '3'
}, {
  question: 'How is a stock\'s market capitalization (aka market cap) calculated?',
  answers: ['Shares outstanding as a percent of all Dow stocks', 'Stocks + Treasuries added up', 'Stock price * # of shares outstanding', 'Stock shares * cash on hand'],
  correct: '2'
}, {
  question: 'What is supply side economics?',
  answers: ['Studying company management of supplies', 'The same as Voodoo economics', 'Belief growth is most effective by investing in capital and by lowering costs to do business', 'Belief economic output is strongly influenced by consumer demand & spending'],
  correct: '2'
}, {
  question: 'What company has the largest market cap?',
  answers: ['Apple', 'Google', 'Amazon', 'Microsoft'],
  correct: '0'
}, {
  question: 'Who originated the term \'trickle down economics\'?',
  answers: ['Will Rogers', 'Harry Truman', 'Bill Clinton', 'Ronald Reagan'],
  correct: '0'

}];

//Global variable
var theCount = 0;
var totalCount = theQuestionObj.length;
var correctAns = 0;

//print question
function buildTheQuesObj(x) {
  $('.ques').html('<h2>' + theQuestionObj[x].question + '</h2>');

  for (i = 0; i < theQuestionObj[x].answers.length; i++) {
    $('.ans-choices').append(
      '<li>' +
      '<input type="radio" name="ques1" value="'+i+'"/>' + '<span>' +
      theQuestionObj[x].answers[i] + '</span>' +
      '</li>');
  };
};

//Ux answers the question

$(document).ready(function() {
  $('.pages').hide();

  //ask James about degrading of submit vs click again
  $('.start-button').on('click', function() {
    //   //how do i toggle back to this first page? Reset button?
    $('.intro').hide();
    $('.pages').show();
  });

  buildTheQuesObj(theCount);

  
  //Ux picks an answer, now what happens upon hitting submit
  $('.theChoices').on('submit', function(event) {
    event.preventDefault();

    //Ux input assigned to a variable
    var ansChosen = $('input[name=ques1]:checked').attr('value'); //why is this coming back undefined? I have console logged the ans, & it comes back w/ value
    console.log(ansChosen, 'guess');

    //Ux input compared to answer, gives feedback AND keeps count of # of correct answers
    if (ansChosen == theQuestionObj[theCount].correct) {
      correctAns = (correctAns + 1);
      // console.log(correctAns, 'correct');
      $('.rightWrong').html('<i>' + '<h3>' + '<li>' + 'Correct!' + '</li>' + '</h3>' + '</i>');
    } else {
      rightAns = parseInt(theQuestionObj[theCount].correct) + 1;
      textAns = theQuestionObj[theCount].answers[theQuestionObj[theCount].correct];
      correctAns = (correctAns);
      $('.rightWrong').html('<i>' + '<h3>' + '<li>' +
        'Incorrect, the answer is option # ' + rightAns + ', ' + textAns + '.' +
        '</li>' + '</h3>' + '</i>');
    };
    

    //how many right vs wrong
    $('.currently').html('<i>' + '<h3>' + '<li>' + "Currently, you have answered " + correctAns + " right, out of " + (theCount + 1) + " question(s)." + '</li>' + '</h3>' + '</i>');

  });

  //go on to the next question
  function nextQues() {
    theCount = theCount + 1; //why didnt theCount++ work?
    $('.ans-choices').empty();
    buildTheQuesObj(theCount);
    $('.rightWrong').empty();
    console.log(theCount, 'new quescount');
  };

  $('.next').on('click', function() {
    nextQues();
  });
  // console.log(quesCount, 'new quescount');

    //go on to the next question
  function prevQues() {
    theCount = theCount - 1; //why didnt theCount++ work?
    $('.ans-choices').empty();
    buildTheQuesObj(theCount);
    console.log(theCount, 'new quescount');
  };

  $('.prev').on('click', function() {
    prevQues();
  });

  
});