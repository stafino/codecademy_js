/*
Using array methods, you will transform an array of strings into a secret message!

You should consult the Mozilla Developer Network (MDN) for reference on any method with which you are not familiar.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.
*/

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Use an array method to remove the last string of the array secretMessage.
secretMessage.pop();
// Great! You can check your work by logging the .length of the array.
console.log(secretMessage.length);
// Use an array method to add the words to and Program as separate strings to the end of the secretMessage array.
secretMessage.push('to', 'Program');
// Change the word easily to the word right by accessing the index and replacing it.
secretMessage[7] = 'right';
// Use an array method to remove the first string of the array.
secretMessage.shift();
// Use an array method to add the string Programming to the beginning of the array.
secretMessage.unshift('Programming');
// Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know,.
secretMessage.splice(6, 5, 'know,');
// On one line, use console.log() and .join() to print the secret message as a sentence.
console.log(secretMessage.join(' '));