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
// Primatives vs Objects

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