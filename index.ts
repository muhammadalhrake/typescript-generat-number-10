// Import stylesheets
import './style.css';
//imports
import random from 'random';
import { handel } from './handel';
//helper function
function between(min: number, max: number) {
  return random.int(min, max);
}
/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  let array = [...a];
  let j, x, i;
  if (array.length == 3) {
    if (array[1] == array[2]) {
      if (array[1] > 0) {
        array[1] -= 1;
        array[2] += 1;
        return array;
      } else if (array[1] == 0) {
        array[0] -= 1;
        array[2] += 1;
        return array;
      }
    } else {
      x = array[1];
      array[1] = array[2];
      array[2] = x;
      return array;
    }
  } else {
    for (i = array.length - 1; i > 1; i--) {
      if (i == 2) {
        j = 1;
      } else if (i > 2) {
        j = between(1, i - 1);
      }
      x = array[i];
      array[i] = array[j];
      array[j] = x;
    }
    if (compareArrays(array, a)) {
      console.log(array, a);
      return shuffle(array);
    } else {
      return array;
    }
  }
}
function compareArrays(a: any[], b: any[]) {
  return a.reduce((acc, next, index) => acc && next === b[index], true);
}
/* function shuffle1(array) {
  let array1 = [...array];
  let currentIndex = array1.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (1 != currentIndex) {
    // Pick a remaining element...
    randomIndex = between(1, currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array1[currentIndex];
    array1[currentIndex] = array1[randomIndex];
    array1[randomIndex] = temporaryValue;
  }

  return array1;
}
 */
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
  //Shuffel array
  console.log(shuffle(arrayOfNum));
  return arrayOfNum;
}
/* setInterval(() =>testOfGeneratEqual(generatEqual(between(3,9))), 500); */
/* setInterval(() =>console.log(generatEqual(3)), 500); */

// Write TypeScript code!

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
