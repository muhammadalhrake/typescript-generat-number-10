// imports
import random from 'random';

//helper function
function between(min: number, max: number) {
  return random.int(min, max);
}
function handlePos(arrayOfNum, digitsNum, getpos, setpos) {
  let myNumber = arrayOfNum[getpos];
  if (myNumber > 2 && myNumber < 5) {
    //console.log("I'm in hnndelpos 1");
    arrayOfNum[getpos] -= 1;
    let rand = between(0, setpos);
    arrayOfNum[digitsNum - 1 - rand] += 1;
  } else if (myNumber == 5 || myNumber == 6) {
    //console.log("I'm in hnndelpos 2");
    arrayOfNum[getpos] -= 3;
    let rand1 = between(0, setpos);
    let rand2 = between(0, setpos);
    arrayOfNum[digitsNum - 1 - rand1] += 2;
    arrayOfNum[digitsNum - 1 - rand2] += 1;
  } else if (myNumber > 6 && myNumber <= 9) {
    //console.log("I'm in hnndelpos 3");
    arrayOfNum[getpos] -= 4;
    let rand1 = between(0, setpos);
    let rand2 = between(0, setpos);
    let rand3 = between(0, setpos);
    arrayOfNum[digitsNum - 1 - rand1] += 2;
    arrayOfNum[digitsNum - 1 - rand2] += 1;
    arrayOfNum[digitsNum - 1 - rand3] += 1;
  }
  return arrayOfNum;
}
export function handel(arrayOfNum, digitsNum) {
  if (digitsNum == 4 || digitsNum == 5) {
    handlePos(arrayOfNum, digitsNum, 0, 2);
    //console.log("I'm in hnndel 1");
  } else if (digitsNum == 6 || digitsNum == 7) {
    handlePos(arrayOfNum, digitsNum, 0, 2);
    handlePos(arrayOfNum, digitsNum, 1, 3);
    //console.log("I'm in hnndel 2");
  } else if (digitsNum == 8 || digitsNum == 9) {
    handlePos(arrayOfNum, digitsNum, 0, 2);
    handlePos(arrayOfNum, digitsNum, 1, 3);
    handlePos(arrayOfNum, digitsNum, 2, 3);
    //console.log("I'm in hnndel 3");
  }
  return arrayOfNum;
}
