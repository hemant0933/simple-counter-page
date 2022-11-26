var counterElement = document.getElementById('counterText');

var incrementBtn = document.getElementById('increment');
var decrementBtn = document.getElementById('decrement');
var clearBtn = document.getElementById('clear');

var counter = counterElement.innerText;
var alertText = document.getElementById('alert-text');
function increment(){
    alertText.innerText='';
    counter++;
    console.log(counter);
    counterElement.innerText = counter;
}
function decrement(){
    // if counter is less then 0

    if(counter<=0){
        alertText.innerText='Error : Cannot go below 0';
    }
    //  if counter is greater then zero
    else{
    counter--;
    console.log(counter);
    counterElement.innerText = counter;}
}
function clear(){
    alertText.innerText='';  
    counter=0;
    console.log(counter);
    counterElement.innerText = counter;
}
decrementBtn.onclick=decrement;
incrementBtn.onclick=increment;
clearBtn.onclick=clear;
