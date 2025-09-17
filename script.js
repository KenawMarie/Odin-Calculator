            // DOM element selection
const display=document.querySelector('.display')
const btns=document.querySelectorAll('.digit,.operator')
const equal=document.querySelector('.equal-to')
const clear=document.querySelector('.erase')
const bracket=document.querySelector('.bracket');
const operators=document.querySelectorAll('.operator')
const dot=document.querySelector('.dot')
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
let operator=['+','−','×','÷']
            // event listener
            
clear.addEventListener('click',()=>{
  display.textContent=''
})
let count=0
bracket.addEventListener('click',(e)=>{
  count++;
  if(count%2!==0){
    display.textContent +=e.target.textContent[0]
    console.log(count);
}
else{
  display.textContent +=e.target.textContent[1]

  console.log(count);
}
})

for(const btn of btns){
    btn.addEventListener('click',(e)=>{
      let arr=[]
        display.textContent += e.target.textContent;
          arr.push(display.textContent);
          let trimmed=arr.join().trim()
          operator
          if(trimmed.includes('+')){
              let number=trimmed.split('+');
              let number1=Number(number[0])
              let number2=Number(number[1])
              equal.addEventListener('click',()=>{
                let result=  operate('+',number1,number2)
                display.textContent=result
                console.log(result);
              })
            }
          else if(trimmed.includes('−')){
                let number=trimmed.split('−');
              let number1=Number(number[0])
              let number2=Number(number[1])
              equal.addEventListener('click',()=>{
                let result=  operate('−',number1,number2)
                display.textContent=result
                console.log(result);
              })
            }
          else if(trimmed.includes('×')){
            let number=trimmed.split('×');
              let number1=Number(number[0])
              let number2=Number(number[1])
              equal.addEventListener('click',()=>{
                let result=  operate('×',number1,number2)
                display.textContent=result
                console.log(result);
              })
            }
          else if(trimmed.includes('÷')){
            let number=trimmed.split('÷');
              let number1=Number(number[0])
              let number2=Number(number[1])
              equal.addEventListener('click',()=>{
                let result=  operate('÷',number1,number2)
                display.textContent=result
                console.log(result);
              })
            }
          
    })
}