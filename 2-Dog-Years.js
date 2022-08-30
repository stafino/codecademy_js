/*
Dog Years
Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
Before you start doing the math in your head, let a computer take care of it! With your knowledge of math operators and variables, use JavaScript to convert your human age into dog years.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.
*/

let myName = 'oLIveR'.toLowerCase(); // my name
let myAge = 22; // My Age
let earlyYears = 2; // Early Dog Years are counted differently than it's later years.

earlyYears *= 10.5; 
// Multiplying early dog years by 10.5 to calculate Human years.

let laterYears = myAge - 2; 
// Subtracting 2 from My Age since we already saved that in earlyYears parameter

laterYears *= 4;
// Multiplying remaining years by 4

// console.log('early years = ' + earlyYears + ', later years = ' + laterYears);

let myAgeInDogYears = earlyYears + laterYears;
// Calculating my age in dog years. 

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears}years old in dog years.`);