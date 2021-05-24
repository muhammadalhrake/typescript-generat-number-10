//imports
import random from 'random';
//helper function
function compareArrays(a: any[], b: any[]) {
  return a.reduce((acc, next, index) => acc && next === b[index], true);
}
function between(min: number, max: number) {
  return random.int(min, max);
}
/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a: any[]) {
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
function ansGenerat(correctAns: number) {
  let sCorrentAns = correctAns.toString();
  let arr = sCorrentAns.split('').map(num => +num);
  return shuffle(arr);
}
// main function
function ansArray(ones: number, num: number) {
  let first = ones * num;
  let digits = first.toString().length;
  let second = +ansGenerat(first).join('');
  let third = between(
    +new Array(digits).fill(1).join(''),
    +new Array(digits).fill(9).join('')
  );
  let fourth = between(
    +new Array(digits).fill(1).join(''),
    +new Array(digits).fill(9).join('')
  );
  return [first, second, third, fourth];
}
