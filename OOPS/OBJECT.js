// OBJECTS are variale too but contain many variables 
// object are Instance of a class that have properties and method 
//OBJECT are non-primitive data type and get store in heap memory

//OBJECT IS PRESENT IN { }  AND  HAVE *KEY : VALUE* PAIR  AND DO-NOT HAVE DUPLICATES

// let obj={                       //object creation
//     name: "akash",
//     roll_no: 20,
//     suject: "maths",
//     year: 2014,
    
//     pass: [{puc:2016 , sub:"science"} ,  //array
//            { grad:2020 , sub:"eng"}],
    
//            validstud: function(){               //anonimus function 
        
//         console.log("valid")
//         return this.year+10            // THIS keyword refers to the current object in a method or constructor
//     }
// };
// console.log(obj.name)           //access value using dot(.) operator
// console.log(obj["name"])        //access value using [] square bracket
// year= "roll_no"
// console.log(obj[year])

// obj.year=2016
// console.log(obj.year)           //we can update value of a key 

// console.log(obj.pass[0].sub)     //science

// b=obj
// b["subject"]="english"
// console.log(obj.subject)        //english coz change made by "b object" is permanent now(change in heap)

// x=obj.validstud()
// console.log(x)                     //valid    \n   2024
// delete obj.year;                    // to delete property from object
// obj.number=2344;                   // to add new property in object
// obj.number++                       // 2345
// console.log(obj)

//---------------------------------------------------------------------------------------------------------

let obj = {
    name: '10xAcad',
    age: 26
};

let arr = [1,2,3];

// for(let val of arr) {
//     console.log(val);
// }


Object.defineProperty(obj, 'city', {
    value: 'Hyderabad',
    writable: true,
    configurable: true,
    enumerable: true // observe -  this is true
} );

Object.defineProperty(obj, 'password', {
    value: 'testpwd',
    writable: false,
    configurable: false,
    enumerable: false // observe - this is false
} );

Object.defineProperty(obj, 'test', {
    value: 'dummy',
    writable: true, // observe - this is true - means you can edit this 
    configurable: false,
    enumerable: true // true means you can get this in loop
} );


obj.city="delhi";
obj.test = "random value";
console.log(obj)
//  delete(obj.test);
//  console.log(obj)

// obj.newProperty = "fahjlfhjla"
// Object.seal(obj); // will not allow new properties but you can update existing properties
// obj.anotherNewProperty = "dadaada";

// Object.freeze(obj); // cannot add and update

// obj.yetAnotherProperty = "anfjkahfa";

// obj.age = 30;

// for(let key in obj) {
//     console.log("The value of " + key + " is " + obj[key]);
// }
// // console.log("The password is ",obj.password);

// console.log(Object.getOwnPropertyNames(obj)); // prints password as well

// console.log(Object.keys(obj)); // GIVE YOU ALL KEYS

//console.log(Object.values(obj));  // GIVE YOU ALL VALUES

// console.log(Object.entries(obj));

//  const myObj = {
//     fname: "a",
//     lname: "b"
//  };

// myObj.fname = "jsfhs";
// myObj.surname = "fsfafa";
// //  myObj = {};
//  console.log(myObj);


//  myObj.__proto__ = obj;
//  // alternative
//  Object.setPrototypeOf(myObj, obj); // is the order correct? interchange them to see

// console.log(Object.getOwnPropertyNames(myObj)); // prints password as well

// console.log(Object.keys(myObj)); // this does not show password

// console.log(Object.values(myObj));






// The __proto__ is an object within every object that points out (references) 
// the prototype that has been set for that object.
//  __proto__ is the actual object that is used in the lookup chain to resolve methods, etc.

// The prototype property is only present for functions and is a property that’s set only if you’re using the
//  ‘new’ keyword when creating objects with this (constructor) function.
// Prototype is a simple way to share behaviour and data between multiple object access using prototype
// Its a base class for all object and it help use to achieve the inheritence

// var house = {color: "brown",
//             size: "huge",
//             expensive: true}

// house.prototype // undefined
// house.__proto__ // {constructor: ƒ, __defineGetter__: ƒ, __defineSet... (__pro

// // Note: 'house' is an object that has a __proto__ object, but does not have a prototype

// function add (a,b) {
// return a + b
// }

// add.prototype // {constructor: ƒ}
// add.__proto__ // ƒ () { [native code] }

//-----------------------------------------------------------------------------------------------------

// When we try to access something (method) on arr, 
//JS first checks if that is present on arr
// If not, goes down the prototype chain to find it on Array
//If not found there as well, goes down to Array's prototype i.e Object
//If not found there as well, goes down to Object's prototype i.e null
// It doesnot find any and returns back

// If you want to add a method that should be accessible to all instances of array, add it to the prototype of it

//arr.__proto__.hi = function() {console.log("Hi there")};