"use strict";
// To install >npm install -g typescript
// To transpile >tsc fileName.ts
// To check version >tsc -v
// Help List >tsc -h
Object.defineProperty(exports, "__esModule", { value: true });
let message = 'Hello world hi'; //let will change into var in .js
console.log(message);
let x = 10; //let can be initialized without a value and can be changed 
const y = 20; //const cant be changed and it has to be initialized while declaring it.
let sum; // no error for no initialization
const title = 'code'; //error will be thrown if declared witout value assigning
//TYPES IN TYPESCRIPT.....................................................................................
//Basic type in typescript: boolean , number, script
let isBeginner = true;
let total = 0;
let name = 'sohail';
//embedding multiple lines and variable in a string using backticks `` and ${}
let Name = `My name is ${name}
and i am a trainee`;
console.log(Name);
//Use of these types helps you in static typing
//We also get suggestions for the functions/Properties, we have for that type eg: name.(property)
//Few subtypes which do not actually make much of a difference
let n = null;
let u = undefined;
//These can be assigned to boolean and string respectively as subtypes with no conflict when 'strict' is commented out in tsconfig.json file
let b = null;
let s = undefined;
//Array of number (any one of these, both are similar)
let list1 = [1, 2, 3];
let list2 = [1, 2, 3];
//For mixed datatypes, we have tuples where the order and number of variables are fixed
let person1 = ['manav', 10];
//enum type, user defined datatype with default index=0, else change it as shown (now red starts with 5)
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(c);
//any type is dynamic in nature, you can use it for any data type, any function or any property
//it wont give any errors
let myVariable = 10;
myVariable = 'Sohail';
myVariable = null;
myVariable = undefined;
//myVariable.name;          //wont show error but cant read the property
//myVariable();             //wont show error but cant read the property
//myVariable.toUpperCase();   //wont show error but cant read the property
//Another similar type is 'unknown' type
//In this you can assign any value but cant call it as a function and cant access its properties
let myVariable2 = 10;
myVariable2 = undefined; //no error in assigning so far
myVariable2 = null;
myVariable2 = 'Sohail';
//error here as we cant access the properties of unknown type
//myVariable2.name;          
//myVariable2();
//But we can use type assertion to use the property
//It is similar to type casting, 
//telling the ts code that we have checked the datatype of the variable and ready to use the property
myVariable2.toUpperCase(); //no error now
//We can also declare a function for checking the .name property for that unknown variable
//  And put it in a function to avoid error by checking before accessing it
function hasName(obj) {
    return !!obj &&
        typeof obj === 'object' &&
        'name' in obj;
}
if (hasName(myVariable2)) {
    console.log(myVariable2.name); //no error now
}
//Concept of type inference where TS helps us to automatically detect and infer the type
let a; //it has type 'any' for now as it has not been initialized by a value
a = 10; //still 'any' type
a = true; //still 'any' type
//whereas when we initialize it by a value, it infers the type and provides us the properties of that type
//For that we will get error if we try to change the value
let inferedVariable = 10; //takes a type 'number'
//inferedVariable = true;       //shows error now as type has been infered now as 'number'
//Union type or Multi-type support with intelli-sense (suggestions for properties for that type)
//Here we can restrict a variable to few types as shown below:
let multiType;
multiType = 10;
//multiType = true;
//FUNCTIONS................................................................................
/*function add(num1: <type>, num2: <type>) : <return_type_here>{
    return (num1+num2);
}
//also provides intelli-sense for the errors in parameters static type checking
*/
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
//In typescript, every parameter is assumed to be required by a function
//Whereas this is not the case with .js, if we do not give the parameters to function, it takes it as undefined by default
//We can get this functionalty in .ts as well using '?' at the end of parameter name
//Note: optional parameters must always be defined after the required parameters in the end.
//Optonal parameters:
function add2(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add2(10)); //optional parameter num2, so no error, returns 10
console.log(add2(10, 10)); //returns 20
//Default parameters with a default value given in function declaration itself
//It works when no value is passed for that corresponding parameter, as shown below:
function add3(num1, num2 = 10) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add3(10)); //returns 10+10 = 20
console.log(add3(10, 20)); //returns 10+20 = 30
//INTERFACE........................................................................................
//We should note that we can also define object as datatypes as well.
function fullName(person) {
    console.log(` ${person.firstName} ${person.lastName}`);
}
let p = {
    firstName: 'Bruce',
    lastName: 'wayne'
};
fullName(p);
function fullName2(person) {
    console.log(` ${person.firstName} ${person.lastName}`);
}
fullName2(p);
//ClASS....................................................................................................
class Employee {
    constructor(name) {
        this.employeeName = name;
    }
    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}
let emp = new Employee('Sohail');
console.log(emp.employeeName);
emp.greet();
class Manager extends Employee {
    constructor(managerName) {
        super(managerName); //calling constructor of base class here (Employee)
    }
    delegateWork() {
        console.log(`Manager delegating tasks`);
    }
}
//Now we have access to all the variables and methods of base class 
let m1 = new Manager('Clark');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
//ACCESS MODIFIERS...................................................................................
//private, public and protected
//By default all the data is public here in class
//public: grants access to all the data to its own objects and methods as well as derived class objects and methods
//private: data is not accessible outside the class i.e. the data of base is accessed within its own method, not even by the derived class methods.
//protected: when we want to restrict the access outside the class but wish to grant access to the derived class method, then we use it.
class Employee2 {
    constructor(name, pcode) {
        this.key = 'abcd123'; //can be accessed within the methods of base and derived classed
        this.empName = name;
        this.code = pcode; //private so only accessed here
    }
    greeting() {
        console.log(`This is Base class`);
        console.log(`public Accessible : Name: ${this.empName}`);
        console.log(`private Accessible : passcode ${this.code}`);
        console.log(`protected Accessible: key ${this.key}`);
    }
}
let emp2 = new Employee2('Ishan', 1234);
console.log(`outside base class, accessed by base class ${emp2.empName}`); //public so can be accessed anywhere
emp2.greeting();
class Manager2 extends Employee2 {
    constructor(managerName) {
        super(managerName, 100); //calling constructor of base class here (Employee)
    }
    delegateWork() {
        console.log(`This is Derived class`);
        console.log(`public Accessible: ${this.empName}`);
        console.log(`protected Accessible: ${this.key}`);
    }
}
//Now we have access to all the variables and methods of base class 
let m2 = new Manager2('Ken');
m2.delegateWork();
m2.greeting();
console.log(`outside base class, accessed by derived class: public ${m2.empName}`);
