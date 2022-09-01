/*
Whale Talk
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

To accomplish this translation, we can use our knowledge of loops. Let’s get started!

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.
*/

let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for(let i = 0; i < input.length; i++) { // out for loop, looping through the user input
  if (input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i]); // double Es and Us to match the whale language
  }
  for(let j = 0; j < vowels.length; j++)  { //inner for loop to go through the array with vowels
    if(input[i] === vowels[j])  {
      resultArray.push(input[i]); // adding the vowels to the final message.
    }
  }
}
console.log(resultArray.join('').toUpperCase()); // logging the text translated in whale in upper case and joined together.