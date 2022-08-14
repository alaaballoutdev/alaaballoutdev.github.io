function getAnswerIndex(element){
    var arrows= document.getElementsByClassName("question-box");
    for(i=0;i<arrows.length;i++){
        if(element==arrows[i]){
            return i;
        }

    }
    return -1;
} 

function displayAnswer(element){
    var index = getAnswerIndex(element);
    var answers= document.getElementsByClassName("answer");
    var arrows = document.getElementsByClassName("arrow");
    var answer=answers[index];
    var questions=document.getElementsByClassName("question");
    
    question = questions[index];
    
    answer.classList.toggle("answer-active");
    question.classList.toggle("question-active");
    
    for(i=0;i<answers.length;i++){
        if(answer != answers[i] && answers[i].classList.contains("answer-active")){
            answers[i].classList.remove("answer-active");
            arrows[i].classList.remove("open");
            questions[i].classList.remove("question-active");
        }   
    }
    
    var arrow = arrows[index];
   var open = arrow.classList.contains("open");
   if(open){
        arrow.classList.remove("open");
   }
   else{
    arrow.classList.add("open");
   }
    
   
    
    
}