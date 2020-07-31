const container = document.querySelector('.container');

let operator = '';
let decimalPressed = false;
let operatorPressed = false;
let eqPressed = false;
let CEpressed = false;
let lastValue = 0;
let currentValue = 0;

// const display = document.createElement('input');
// display.classList.add('display');
// container.appendChild(display);

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
    console.log(lastValue, currentValue);
    CEpressed = true;
}

const operatorsContainer = document.createElement('div');
operatorsContainer.classList.add('operatorsContainer');
let operatorsArray = ['+','-','x','÷']
for(i of operatorsArray){
    let operatorButton = document.createElement('button');
    operatorButton.classList.add('operatorButton');
    operatorButton.textContent = i;
    operatorButton.addEventListener('click', clickOperator);
    operatorsContainer.appendChild(operatorButton);
}
container.appendChild(operatorsContainer);


function clickOperator(e){
    operatorPressed = true;

    // if(CEpressed == true){
    //     lastValue = currentValue;
    //     CEpressed = false;
    //     console.log('trick');
    // }
   
    if(lastValue != 0){
        if(eqPressed == false){
            calculation(); 
        }
    }   
       
    operator = e.target.textContent;
    lastValue = Number(display.value);
    
    
    console.log(lastValue, currentValue);
    
    
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
    console.log(lastValue, currentValue);
    //console.log(typeof display.value);  
    if (display.value.length > 10) {
        display.value = display.value.slice(0,10); 
    }
    
    
}

const decimalPoint = document.createElement('button');
decimalPoint.classList.add('decimalPoint');
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
            console.log(lastValue, currentValue);            
            break;
        case '-':
            display.value = lastValue - currentValue;
            lastValue -= currentValue;
            console.log(lastValue, currentValue);        
            break;
        case 'x':
            display.value = lastValue * currentValue;
            lastValue *= currentValue;
            console.log(lastValue, currentValue);            
            break;
        case '÷':

            if(currentValue == 0){
                let errMs = document.querySelector('.display');
                errMs.textContent = 'Can not divide by 0 !'; 
                errMs.setAttribute('style', 'font-size: 3rem;');
                display.value = errMs.textContent;
                
            }else{
                
                display.value = lastValue / currentValue;
                lastValue /= currentValue;
                console.log(lastValue, currentValue);            
            break;  
            }
    
    }    
}

// function clickEq(){

//     eqPressed = true;


// }


















// let check = document.createElement('button');
// check.addEventListener('click', checkOp);
// container.appendChild(check);

// function checkOp(){
//     alert(operator);
// }











// let operatorsContainer = document.createElement('div');
// operatorsContainer.classList.add('operatorsContainer')
// operatorsContainer.classList.add('operatorsContainer')
// let operatorsArray = ['+','-','x','/'];
// for(i of operatorsArray){
//     let operatorButton = document.createElement('button');
//     operatorButton.textContent = i;
//     operatorButton.classList.add('operatorButton');
//     operatorsContainer.appendChild(operatorButton);
// }
// container.appendChild(operatorsContainer);