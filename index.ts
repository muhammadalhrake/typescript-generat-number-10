// Import stylesheets
import './style.css';

// imports
import { generateQuestion } from './generateQuestion';


/* setInterval(()=>console.log(generateQuestion(5,5,"=10")),500); */

/* setInterval(() =>testOfGeneratEqual(generatEqual(between(3,9))), 500); */
/* setInterval(() => console.log(ansArray(111,+generatEqual(5).join(''))), 500); */

// Write TypeScript code!

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
