// Import stylesheets
import './style.css';
//imports
import random from 'random';
import { handel } from './handel';
//helper function
function between(min: number, max: number) {
  return random.int(min, max);
}
function shuffle1(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (1 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
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
  
  //handling the array
  handel(arrayOfNum, digitsNum);
  return arrayOfNum;
}
/* setInterval(() =>testOfGeneratEqual(generatEqual(between(2,9))), 700); */
/* setInterval(() =>console.log(generatEqual(3)), 500); */

// Write TypeScript code!

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
