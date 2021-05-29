import { ansArray } from './generatAnswer';
import { generatEqual } from './generateEqual';
import { generateQuestionR } from './generate-question';
export function generateQuestion(
  numberOfOns: number,
  digitsNum: number,
  stateDigits: string
) {
  let onsNumber = +new Array(numberOfOns).fill(1).join('');
  let generate: generateQuestionR;
  let a ={answers:[1,4,2,5],multiplyNum:5}
  let multNum: number;
  let answers: any[];
  if (stateDigits == '=10') {
    multNum = +generatEqual(digitsNum).join('');
  } else if (stateDigits == '>10') {
    //multNum=+generatelarg(digitsNum).join('')
  } else if (stateDigits == '<10') {
    //multNum= +generatLessThan(digitsNum).join('')
  }
  answers = ansArray(onsNumber, multNum);
  a.answers=answers;
  a.multiplyNum=multNum;
  generate=a;
  /*   generate.answers = answers;
  generate.multiplyNum = multNum;*/

  return generate; 
}
