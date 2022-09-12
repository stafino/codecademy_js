/*
School Catalogue
Let’s put your knowledge of classes to the test by creating a digital school catalog for the New York City Department of Education. The Department of Education wants the catalog to hold quick reference material for each school in the city.

We need to create classes for primary and high schools. Because these classes share properties and methods, each will inherit from a parent School class. Our parent and three child classes have the following properties, getters, setters, and methods:

School

Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
Getters: all properties have getters
Setters: the numberOfStudents property has a setter
Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)
Primary

Includes everything in the School class, plus one additional property
Properties: pickupPolicy (string)
Middle

Does not include any additional properties or methods
High

Includes everything in the School class, plus one additional property
Properties: sportsTeams (array of strings)
If you’re looking for a challenge, create the constructor() and getters for the four classes above. Then, use the setter and methods specifications in steps five, six, and seven to finish the project.
*/

class School {
    constructor(name, level, numberOfStudents)  {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    get name()  {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents()  {
      return this._numberOfStudents;
    }
    set numberOfStudents(numberOfStudents)  {
      if(typeof numberOfStudents === number)  {
        this._numberOfStudents = numberOfStudents;
      } console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  
    quickFacts()  {
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`);
    }
    static substituteTeachers(arr) {
      let randomValue = Math.floor(arr.length * Math.random()); 
      return arr[randomValue];
    }
  }
  
  const zakladna = new School('Zakladna', 1, 30);
  