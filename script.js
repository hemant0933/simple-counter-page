var counterElement = document.getElementById('counterText');

var incrementBtn = document.getElementById('increment');
var decrementBtn = document.getElementById('decrement');
var clearBtn = document.getElementById('clear');

var counter = counterElement.innerText;
var alertText = document.getElementById('alert-text');
if(counter == 0){
clearBtn.style.display='none';}

function increment(){   
    alertText.innerText='';
    counter++;
    console.log(counter);
    counterElement.innerText = counter;
    clearBtn.style.display='inline-block'; 

}
function decrement(){
    // if counter is less then 0
   
    if(counter<=0){
        alertText.innerText='Error : Cannot go below 0';
        clearBtn.style.display='inline-block';
    }
    //  if counter is greater then zero
    else{
     counter--;
     console.log(counter);
     if(counter==0){
        clearBtn.style.display='none'; 
     }
     counterElement.innerText = counter;}
}
function clear(){
    alertText.innerText='';  
    counter=0;
    console.log(counter);
    counterElement.innerText = counter;
    clearBtn.style.display='none'; 
}
decrementBtn.onclick=decrement;
incrementBtn.onclick=increment;

clearBtn.onclick=clear;
