            // DOM element selection
const display=document.querySelector('.display')
display.textContent=12345
const btns=document.querySelectorAll('button')
            //functions
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
for(const btn of btns){
    btn.addEventListener('click',(e)=>{
       let content= display.textContent=e.target.textContent;
       console.log(content);
    })
}