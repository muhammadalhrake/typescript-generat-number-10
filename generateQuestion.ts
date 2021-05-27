import { ansArray } from './generatAnswer';
import { generatEqual } from './generateEqual';
import { generateQuestionR } from './generate-question';
export function generateQuestion(
  numberOfOns: number,
  digitsNum: number,
  stateDigits: string
) {
  let generate : generateQuestionR
  let multNum: number;
  let answers: any[];
  if (stateDigits == '=10') {
    multNum = +generatEqual(digitsNum).join('');
  } else if (stateDigits == '>10') {
    //multNum=+generatelarg(digitsNum).join('')
  } else if (stateDigits == '<10') {
    //multNum= +generatLessThan(digitsNum).join('')
  }
  answers = ansArray(numberOfOns, multNum);
  generate.answers=answers;
  generate.multiplyNum=multNum
  return generate
}
