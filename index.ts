// Import stylesheets
import './style.css';
//imports
import random from 'random'

//helper function
function between(min: number, max: number) {
  return random.int(min, max);
}
//main function 

// Write TypeScript code!

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;