/*// function constructor

var john = {
    name: 'John',
    yearOfBirth: 1998,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // this.calculateAge = function() {
    //     console.log(2018 - this.yearOfBirth);
    //}
}

// inheritance
Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth)
};

Person.prototype.lastName = "Smith";

var john = new Person('John', 1998, 'teacher');
john.calculateAge();

var jane = new Person('Jane', 1969, 'designer');
jane.calculateAge();
var mark = new Person('Mark', 1948, 'retired');
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

/******************************************************************************/

/*// Object.create
var personProto = {
    calculateAge: function() {
        console.log(2018 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, 
{
    name: { value: 'Jane'},
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});
*/

/******************************************************************************/
/*// Primatives vs Objects

// primatives
var a = 23;
var b = a;
a = 46; // will hold their own value

// objects
var obj1 = {
    name: 'John',
    age: 26
}
var obj2 = obj1;
obj1.age = 30; // changes obj2

// functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
}

function change(a, b) {
    a = 30;
    b.city = 'San Franciso';
}

change(age, obj); // changes obj's references so changes values
*/

/******************************************************************************/
/*// Passing Functions as Arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if(el >= 18 && el <= 81)
        return Math.round(206.9 - (0.67 * el));

    return -1;
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate)
console.log(rates);
*/

/******************************************************************************/
/*// Functions returning Functions

function interviewQuestion(job) { // returns an object
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is?');
        } 
    } else if(job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('Jane');

interviewQuestion('teacher')('Mark');
*/

/******************************************************************************/
/*// IIFE

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }

// game();

(function() { // treats it as an expression, not a declaration because of ), this is an IIFE
        var score = Math.random() * 10;
        console.log(score >= 5);
    })();

//console.log(score); // cannot see score variable

// new scope, data privacy, and safely keep variables safe
(function(goodLuck) { 
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5); // how to pass parameters
*/

/******************************************************************************/
/*// Closures

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log(retirementAge - age + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);

//retirement(66)(1993);

// My answer
function interviewQuestion(job) {
    return function(name) {
        switch(job) {
            case 'designer':
                console.log(name + ', can you please explain what UX design is?');
                break;
            case 'teacher':
                console.log('What subject do you teach, ' + name + '?');
                break;
            default:
                console.log('Hello ' + name + ', what do you do?');
                break;
        }
    }
}

interviewQuestion('teacher')('John');
interviewQuestion('designer')('Jane');
interviewQuestion('police officer')('Mark');
*/

/******************************************************************************/
// Bind, call, and apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('Good ' + 
                        timeOfDay + ', Ladies and gentlemen! I\'m ' + 
                        this.name + ', I\'m a ' + 
                        this.job + ' and I\'m ' + 
                        this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + 
                        this.name + ', I\'m a ' + 
                        this.job + ' and I\'m ' + 
                        this.age + ' years old. Have a nice ' +
                        timeOfDay + '.'); 
        }
    }
}

john.presentation('formal', 'morning');

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation.call(emily, 'friendly', 'afternoon'); // method borrowing

//john.presentation.apply(emily, ['friendly', 'afternoon']); // not work cause not expecting array

var johnFriendly = john.presentation.bind(john, 'friendly'); // bind creates copy of presentation, and returns the function - called carrying
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');