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