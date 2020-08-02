const container = document.querySelector('.container');

let operator = '';
let decimalPressed = false;
let operatorPressed = false;
let eqPressed = false;
let CEpressed = false;
let lastValue = 0;
let currentValue = 0;

const display = document.createElement('input');
display.classList.add('display');
display.disabled = true;
display.value = 0;
container.appendChild(display);

const displayTransparent = document.createElement('input');
displayTransparent.classList.add('displayTransparent');
displayTransparent.disabled = true;
displayTransparent.value = 8888888888;
container.appendChild(displayTransparent);

const acButton = document.createElement('button');
acButton.classList.add('acButton');
acButton.textContent = 'AC';
acButton.addEventListener('click', clickAC);
container.appendChild(acButton);

function clickAC(){
    lastValue = 0;
    currentValue = 0;
    decimalPressed = false;
    display.value = 0;    
}

const ceButton = document.createElement('button');
ceButton.classList.add('ceButton');
ceButton.textContent = '⇦';
ceButton.addEventListener('click', clickCE);
container.appendChild(ceButton);

function clickCE(){
    display.value = display.value.slice(0, -1);
    currentValue = Number(display.value);
    console.log('slice');

    CEpressed = true;
}


let operatorsArray = ['+','-','x','÷']
for(let[i, v] of operatorsArray.entries()){
    let operatorButton = document.createElement('button');
    operatorButton.classList.add('allButton');
    operatorButton.textContent = v;
    operatorButton.style.gridRow = i + 3;
    operatorButton.style.gridColumn = 4;
    console.log(i, v);
    operatorButton.addEventListener('click', clickOperator);
    container.appendChild(operatorButton);
}



function clickOperator(e){
    operatorPressed = true;
    
    if(lastValue != 0){
        if(eqPressed == false){//calculation for multiple times
            calculation();      // click on operators button
        }
    }          
    operator = e.target.textContent;
    lastValue = Number(display.value);       
    
    decimalPressed = false;      
}

let digitsArray = ['7','8','9','4','5','6','1','2','3','0']
for(i of digitsArray){
    let digitButton = document.createElement('button');
    digitButton.classList.add('allButton');
    digitButton.textContent = i;
    digitButton.addEventListener('click', clickDigit);
    container.appendChild(digitButton);
}

function clickDigit(e){
    if(display.value == 0 || operatorPressed == true){
        display.value = ''; 
        operatorPressed = false;    
    }   
    display.value += e.target.textContent;
    currentValue = Number(display.value);    
    
    if (display.value.length > 10) {
        display.value = display.value.slice(0,10); 
    }
    
    
}

const decimalPoint = document.createElement('button');
decimalPoint.classList.add('allButton');
decimalPoint.textContent = '.';
decimalPoint.addEventListener('click', clickDecimalPoint);
container.appendChild(decimalPoint);

function clickDecimalPoint(e){
    if(decimalPressed === false){
        display.value += e.target.textContent;
        decimalPressed = true;
    }
}

const eqButton = document.createElement('button');
eqButton.classList.add('eqButton');
eqButton.textContent = '=';
eqButton.addEventListener('click', calculation);
eqButton.addEventListener('click', () => eqPressed = true);
container.appendChild(eqButton);

function calculation(){

    switch(operator){

        case '+':
            display.value = lastValue + currentValue;
            lastValue += currentValue;                    
            break;
        case '-':
            display.value = lastValue - currentValue;
            lastValue -= currentValue;                
            break;
        case 'x':
            display.value = lastValue * currentValue;
            lastValue *= currentValue;                    
            break;
        case '÷':

            if(currentValue == 0){
                let errMs = document.querySelector('.display');
                errMs.textContent = 'Err ÷ 0';                 
                display.value = errMs.textContent;  
                break;              
            }else{                
                display.value = lastValue / currentValue;
                lastValue /= currentValue;                        
                break;  
            }
    
    }    
}

