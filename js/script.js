/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quote = [
  {quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall', author: 'Nelson Mandela'},
  {quote: 'The way to get started is to quit talking and begin doing.', author: 'Walt Disney'},
  {quote: 'If life were predictable it would cease to be life, and be without flavor.', author: 'Eleanor Roosevelt'},
  {quote: "Life is what happens when you're busy making other plans.', author: 'John Lennon"}
];

let counter = 0;

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let getRandom = Math.floor(Math.random() * quote) + 1;
  return getRandomQuote ;
}

console.log( getRandomQuote() );

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);