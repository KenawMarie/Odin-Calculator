            // DOM element selection
const display=document.querySelector('.display')
const btns=document.querySelectorAll('.digit,.operator')
const equal=document.querySelector('.equal-to')
const clear=document.querySelector('.erase')
const bracket=document.querySelector('.bracket');
const operators=document.querySelectorAll('.operator')
const plusMinus=document.querySelector('.plus-minus')

//functions

//let operator=['+','−','×','÷']
function add(a,b){
  return a + b
}
function subtract(a,b){
  return a - b
}
function multiply(a,b){
  return a * b
}
function divide(a,b){
  return a / b
}

function operate(operator,numOne,numTwo){
    if(operator==='+'){
     return   add(numOne,numTwo)
    }
    else if(operator==='−'){
     return   subtract(numOne,numTwo)
    }
    else if(operator==='×'){
     return   multiply(numOne,numTwo)
    }
    else if(operator==='÷'){
     return   divide(numOne,numTwo)
    }
}
            // event listener
            
clear.addEventListener('click',()=>{
  display.textContent=''
  content=""
})
let count=0
bracket.addEventListener('click',(e)=>{
  display.textContent +=e.target.textContent[count%2]
  count++;
})

let counts=0
let toggle=['','-']
plusMinus.addEventListener('click',()=>{
  display.textContent +=toggle[counts%2]
  counts++;
})

let content=""
for(const btn of btns){
    btn.addEventListener('click',(e)=>{
      content += e.target.textContent;
      display.textContent =content;
      splitted=content.split(/([+−×÷])/).filter(Boolean);
      console.log(splitted);
      let numOne=+splitted[0];
      let operator= splitted[1];
      let numTwo=+splitted[2];
     
      if(splitted.length===4){
        let result=operate(operator,numOne,numTwo);
        display.textContent=result
      }
      equal.addEventListener('click',(e)=>{
        let result=operate(operator,numOne,numTwo);
        display.textContent = result
        console.log(result);
        
      })
    })
}