let numButton = document.querySelectorAll('.number');
let oprButton = document.querySelectorAll('.operator');
let equalsButton = document.querySelector('.equal');
let decimalButton = document.querySelector('.decimal');
let currentScreen = document.querySelector('.current-screen');
let previousScreen = document.querySelector('.previous-screen');
let allClear = document.querySelector('.all-clear');
let eraseButton = document.querySelector('.erase');
let factorialButton = document.querySelector('.factorial');
let powerButton = document.querySelector('.power');

let currvalue = '';
let prevvalue = '';
let operator = null;
let temp = '';

const numButtonLength = numButton.length;
const oprLength = oprButton.length;

for(let i = 0; i < numButtonLength; i++)
{
  numButton[i].addEventListener("click", () => {
  numberHandler(numButton[i].innerHTML);  
  currentScreen.textContent = currvalue;
     
  })
  }

for(let i = 0; i < oprLength; i++)
{
  oprButton[i].addEventListener("click", () => {
    operatorHandler(oprButton[i].innerHTML);
    previousScreen.textContent = prevvalue + " " + operator;
    currentScreen.textContent = currvalue;
  })
}

allClear.addEventListener("click", () => {
  prevvalue = '';
  currvalue = '';
  operator = '';
  previousScreen.textContent = prevvalue;
  currentScreen.textContent = currvalue;
})

equalsButton.addEventListener("click", () => {
  if(prevvalue != '' && currvalue != '') 
  {

  calculate();
  previousScreen.textContent = '';
  currentScreen.textContent = prevvalue;

  if (prevvalue.length <= 5)
  currentScreen.textContent = prevvalue;
  else
  currentScreen.textContent = prevvalue.slice(0,5) + "...";

  }
})

decimalButton.addEventListener("click", () => {
  console.log("i'm working!");
  appendDecimal();
})


eraseButton.addEventListener("click", () => {
  currvalue = eraseString(currvalue);
  currentScreen.textContent = currvalue;
})


factorialButton.addEventListener("click", () => {
  factorial(currvalue);
}) 

powerButton.addEventListener("click", () => {
  
  power(currvalue,prevvalue);
})



function power(num1,num2)
{



  for(let i = 1; i <= num2; i++)
  {

  }
 
}

function factorial(num)
{
  let factorial = 1;
  for(let i = 1; i <= num; i++)
  {
      factorial = factorial * i;
  }

  currentScreen.textContent = factorial;
  previousScreen.textContent = currvalue + "!";
}

function eraseString(num)
{
  console.log("Num is: " + num);
  num = num.substr(0, num.length - 1);
  return num;
}



function numberHandler(num)
{
  if (currvalue.length < 5)
  {
  currvalue += num;
  }
  console.log(currvalue);
}

function operatorHandler(opr)
{
  console.log(opr);
  operator = opr;
  prevvalue = currvalue;
  currvalue = '';
}


function calculate()
{
 
  prevvalue = parseInt(prevvalue);
  currvalue = parseInt(currvalue);

  if (operator === "+")
  prevvalue += currvalue;
  if (operator === "-")
  prevvalue -= currvalue;
  if (operator === "*")
  prevvalue *= currvalue;
  if(operator === "/")
  prevvalue /= currvalue;

  prevvalue = numberRounder(prevvalue);
  prevvalue = prevvalue.toString();
  currvalue = prevvalue.toString();

console.log("The prevvalue is: " + prevvalue);

}

function numberRounder(num)
{
  return Math.round(num * 1000) / 1000;
}

function appendDecimal()
{
  console.log(currvalue);
  if(!currvalue.includes("."))
  currvalue += ".";
}