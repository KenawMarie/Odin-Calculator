            // DOM element selection
const display=document.querySelector('.display')
const btns=document.querySelectorAll('.digit,.operator')
const equal=document.querySelector('.equal-to')
const operators=document.querySelectorAll('.operator');
const clear=document.querySelector('.erase');

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
  if(b===0){display.textContent="I am frozen! I can't calculate";return}
  return a / b
}
function power(a,b){
  return a ** b
}

function operate(operator,numOne,numTwo){
    if(operator==='+'){
     return add(numOne,numTwo)
    }
    else if(operator==='−'){
     return subtract(numOne,numTwo)
    }
    else if(operator==='×'){
     return multiply(numOne,numTwo)
    }
    else if(operator==='÷'){
     return divide(numOne,numTwo)
    }
    else if(operator==='^'){
     return power(numOne,numTwo)
    }
  }


  function calculate(e){
      display.textContent='';
      content += e.target.textContent;
      display.textContent=content.split(/([+−×÷^])/)[0];
      for(const operator of operators){
        operator.addEventListener('click',(e)=>{
          e.target.style.backgroundColor='#fff'; 
          display.textContent=content.split(/([+−×÷^])/)[0];
        })
        operator.style.backgroundColor='#222'
      }
      clear.addEventListener('click',()=>{
        content='';
        display.textContent=content;
      })
      let splitted=content.split(/([+−×÷^])/g).filter((e)=>e!='');
      if(splitted.length>2){
        let spliced=splitted.splice(0,3);
        let numberOne=+spliced[0];
        let operatorOne= spliced[1]
        let numberTwo=+spliced[2];
        for(const operator of operators){
          operator.addEventListener('click',(e)=>{
            let result=operate(operatorOne,numberOne,numberTwo);
            const numStr = result.toString();
            if (numStr.includes('.')&& numStr.split('.')[1].length>5 ) {
              display.textContent=result.toFixed(5);
            }
            else{
              display.textContent=result;
            }
            e.target.style.backgroundColor='#fff';
          })
          operator.style.backgroundColor='#222'
        }
        display.textContent=numberTwo;
        let result=operate(operatorOne,numberOne,numberTwo);
        equal.addEventListener('click',()=>{
          result=operate(operatorOne,numberOne,numberTwo);
          const numStr = result.toString();
          if (numStr.includes('.')&& numStr.split('.')[1].length>5 ) {
            display.textContent=result.toFixed(5);
          }
          else{
            display.textContent=result;
          }
          content='';
        })
        clear.addEventListener('click',()=>{
          content='';
          result=0
          display.textContent=result;
        })
        let filtered=splitted.filter((e)=>e !='');
        while(filtered.length>1){
          let numOne=result;
          let operatorTwo= filtered.shift();
          let numTwo=+filtered.shift();
          result =operate(operatorTwo,numOne,numTwo);
          for(const operator of operators){
            operator.addEventListener('click',(e)=>{
              result =operate(operatorTwo,numOne,numTwo);
              const numStr = result.toString();
              if (numStr.includes('.')&& numStr.split('.')[1].length>5 ) {
                  display.textContent=result.toFixed(5);
              }
              else{
                display.textContent=result;
              }
              e.target.style.backgroundColor='#fff';
            })
          }
          display.textContent=numTwo;
          equal.addEventListener('click',()=>{
            result=operate(operatorTwo,numOne,numTwo);
            const numStr = result.toString();
            if(numStr.includes('.')&& numStr.split('.')[1].length>5 ) {
                display.textContent=result.toFixed(5);
              }
              else{
                display.textContent=result;
              }
              content='';
          })
          clear.addEventListener('click',()=>{
            content='';
            result=0
            display.textContent=result;
          })
        }
      }
  }
display.textContent=0

// event listener

let content="";
for(const btn of btns){
  btn.addEventListener('click',calculate);
}