/*
Build a Library
Congratulations, you’ve become head librarian at your local Books-‘N-Stuff, which is in dire need of your help. They’re still using index cards to organize their content! Yikes.

But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.

Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

Book

Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
Movie

Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
CD

Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
If you’re looking for a challenge, try to create the four classes without using the steps below.
*/

class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    // getters for all properties
    get title() {
      return this._title;
    }
  
    get isCheckedOut()  {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
    //setter 
    set isCheckedOut(isCheckedOut)  {
      this._isCheckedOut = isCheckedOut;
    }
    // all getters common across all classes that are extended from this class
    getAverageRating()  {
      let resultSum = this._ratings.reduce((currentVal, rating) => currentVal + rating, 0);
      return resultSum / this._ratings.length;
    }
  
    toggleCheckOutStatus()  {
      return this._isCheckedOut = !this._isCheckedOut;
    }
  
    addRating(rating) {
      this._ratings.push(rating);
    }
  }
  
  class Book extends Media  {
    constructor(title, author, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    // getters different from Media constructor
    get pages()  {
      return this._pages;
    }
  
    get author()  {
      return this._author;
    }
  }
  
  class Movie extends Media {
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    // getters different from Media constructor
    get director()  {
      return this._director;
    }
    
    get runTime() {
      return this._runTime;
    }
  }
  
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544); // declaring the historyOfEverything
  console.log(historyOfEverything); // prints the historyOfEverything
  historyOfEverything.toggleCheckOutStatus(); // toggle the status of the check out status
  console.log(historyOfEverything.isCheckedOut); // prints the status of a checkout process on historyOfEverything
  
  historyOfEverything.addRating(4); // add sample ratings
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating()); // prints the average rating
  
  // same as above with the book
  const speed = new Movie('Speed', 'Jan de Bont', 116); 
  console.log(speed.toggleCheckOutStatus()); 
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
