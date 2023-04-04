 
 function Quiz(questions){
    this.score=0;
    this.questions=questions;
    this.questionIndex=0;
    
}
Quiz.prototype.getQuestionByIndex=function(){
    return this.question[this.questionIndex];
}
Quiz.prototype.isEnded=function(){
    return this.questionIndex===this.question.length;
}
Quiz.prototype.checkOptionWithAnswer=function(Answer){
    if(this.getQuestionByIndex().isCorrectAnswer(Answer)){
        this.score++;
      

    }
    this.questionIndex++;
};

function Question(text,choice,answer){
    this.text=text;
    this.choice=choice;
    this.answer=answer;
}
Question.prototype.isCorrectAnswer=function(choice){
    return this.answer===choice;

}

  

    function loadQuestions(){
        if(quiz.isEnded()){
            showScore();
        }else{
            document.getElementById("question");
            element.innerHTML=quiz.getQuestionByIndex().text;
            var choices=quiz.getQuestionByIndex().choices;
            for(var i=0;i<choices.length;i++){
                var element=document.getElementById("choice"+i);
                element.innerHTML=choices[i];
                handleOptionButton("btn"+i,choices[i]);
            }
            showProgress();

        }
    };
    
    function handleOptionButton(id,choice){
        var button=document.getElementById(id);
        button.onClick=function(){
            quiz.checkOptionWithAnswer(choice);
            loadQuestions();
        }

    };
    function showProgress(){
        var currentQuestionNumber=quiz.questionIndex+1;
        var element=document.getElementById("progress");
        element.innerHTML="question "+currentQuestionNumber+" of "+quiz.question.length;

    };
    function showScore(){
        var gameOverHTML= "<h1>Result</h1>";
        gameOverHTML +="<h2 id='scores : "+quiz.score +".And mark percentage is: "+(quiz.score/questions.length*100)+"%"+"</h2>";
       var element=document.getElementById("quiz");
       element.innerHTML=gameOverHTML;
    };
    var questions=[new  Question("Which language is using for style web pages ?",["HTML","JQuery","XML","CSS"],"CSS"),
               new Question("JavaScript Supports",["Functions","XHTML","CSS","HTML"],"Functions"),
               new Question("which is not a JavaScript Framework ?",["Python Script","JQuery","Django","NodeJs"],"Django"),
               new Question("which is used for connect database ?",["PHP","HTML","JS","All"],"PHP"),
               new Question("JavaScript is a ",["Language","Programing Language","Development","All"],"Programing Language")
];


var quiz= new Quiz(questions);
loadQuestions();