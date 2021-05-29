// Import stylesheets
import './style.css';

// imports
import { generateQuestion } from './generateQuestion';
import{generateQuestionR}from './generate-question'

/* setInterval(()=>console.log(generateQuestion(5,4,"=10")),500); */

/* setInterval(() =>testOfGeneratEqual(generatEqual(between(3,9))), 500); */
/* setInterval(() => console.log(ansArray(111,+generatEqual(5).join(''))), 500); */

function multQuestion(cont:number,ons:number,digits:number,stat:string){
  let questions=new Array<generateQuestionR>();
  for(let i =0;i<cont;i++){
    questions.push(generateQuestion(ons,digits,stat))
  }
  return questions
}
// Write TypeScript code!


console.log(multQuestion(5,3,4,"=10"));
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
