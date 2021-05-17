// Import stylesheets
import './style.css';
//imports
import random from 'random';

//helper function
function between(min: number, max: number) {
  return random.int(min, max);
}
//test of generatEqual function
function testOfGeneratEqual(array: Array<number>) {
  let sum = 0;
  let testOn: boolean;
  for (let c = 0; c < array.length; c++) {
    sum += array[c];
  }
  if (sum == 10) {
    testOn = true;
  } else {
    testOn = false;
  }
  console.log(array);
  console.log(sum);
  console.log(testOn);
}
//main function
function generatEqual(digitsNum: number) {
  let range = 10,
    first = between(1, 9);
  let arrayOfNum = new Array();
  arrayOfNum.push(first);
  let numWeHave = range - first;
  for (let i = 1; i < digitsNum; i++) {
    if (i == digitsNum - 1) {
      if (numWeHave > 0) {
        arrayOfNum.push(numWeHave);
      } else {
        arrayOfNum.push(0);
      }
    } else {
      if (numWeHave > 0) {
        let sum = between(0, numWeHave);
        arrayOfNum.push(sum);
        numWeHave -= sum;
      } else {
        let sum = between(0, numWeHave);
        arrayOfNum.push(sum);
      }
    }
  }
  return arrayOfNum;
}
/* setInterval(() =>testOfGeneratEqual(generatEqual(between(4,9))), 500); */
/* setInterval(() =>console.log(generatEqual(3)), 500); */

// Write TypeScript code!

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
