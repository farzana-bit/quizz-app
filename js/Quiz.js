import  Question from './Question.js';

export default function Quiz (questions) {
        this.questions = questions;
        this.score = 0;
        this.currentIndex = 0;

}

Quiz.prototype.getCurrentQuestion = function () {
        return this.questions[this.currentIndex];
}

Quiz.prototype.nextIndex = function () {
    this.currentIndex++;
}

Quiz.prototype.hasEnded = function () {
     return this.currentIndex === this.questions.length; 
}

Quiz.prototype.increaseScore = function (guess) {
         const currQues = this.getCurrentQuestion();
         if(currQues.isCorrect(guess)) {
             this.score++;

         }
         this.nextIndex();
}

Quiz.prototype.reset = function () {
    this.currentIndex = 0
    this.score = 0
}