//imports
import random from 'random';
import { handel } from './handel';
import { ansArray } from './generatAnswer';
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
export function generatEqual(digitsNum: number) {
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
  //console.log(shuffle(arrayOfNum));
  return arrayOfNum;
}
