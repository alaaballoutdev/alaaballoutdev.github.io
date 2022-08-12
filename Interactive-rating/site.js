var rating= document.getElementsByClassName("rate-box");
function select(element){
   var rates=  document.getElementsByClassName("rate-box");
    element.classList.add("clicked");
    for(i=0;i<5;i++){
        if(rates[i]!=element){
            rates[i].classList.remove("clicked");
        }
    }
    var message=document.getElementById("message");
        message.innerHTML="";
}
function getElementClicked(rates){
    for(i=0;i<5;i++){
        if(rates[i].classList.contains("clicked")){
            return i+1;
        }
    }
    return 0;
}
function submit(){
    var rate=getElementClicked(rating);
    var container = document.getElementsByClassName("container")[0];
    var rateState=document.getElementById("rating-state");
    var thanksState = document.getElementById("thanks-state");
    var rateSelected = document.getElementById("rate-selected");
    
    if(rate==0){
        var message=document.getElementById("message");
        message.innerHTML="Please select a rate";
    }else{
        
        rateSelected.innerHTML=""+rate;
    rateState.style.display="none";
    thanksState.style.display="block";
    
    }
}

