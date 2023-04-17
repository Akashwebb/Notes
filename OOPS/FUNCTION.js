//JavaScript is a text-based programming language that allows you to create interactive elements on your web page. 
// Use for interactive website , video games , web and mobile application

// HTML- what do you want on your website
// CSS-  What do you want it to look like
// JS- what do you want it to do

// A Function is a block of code that is designed to perform a task and executed when it is been called or invoked.
// #There are 3 ways of writing a function in JavaScript:

// 1. Function Declaration
// 2. Function Expression

// let add = function(a, b) {
//     console.log(a+b);
// }
//      add(2, 3);

// 3. Arrow Function // =>

// **parameter is use just to take input  

// -------------------------------------------------------------------------------------------------------
// function func(a){        //function declare with parameter
//     sum=0
//     for(let i=0;i<a;i++){
//         sum=sum+i
//     }
//     return sum
// }
// func(3)
// console.log(func(3))      //  1. Function call   (3)

// let x=func(4)             //  2. Calling function by declaring another variable (6)
// console.log(x)         

// for(let i=1;i<4;i++){      // 3. Using for-loop, Call function as many time with i = required-argument  
    // console.log(func(i))   //     ( 0  \n   1   \n   3   \n   6)
// }

// -----------------------------------------------------------------------------------------------------------------

// function func(a,b,c){
//     //console.log(a,b,c)
//     sum=a+b
//     m=a-b
//     return 220,sum,m   // try to return 3 items but it return only  **m
// }
// func(10,20)            // 10 20 undefined
// func(10,20,30,40,50)  // 10 20 30

// let x=func(10,20,30)   // We capture a return value in x
// console.log(func(10,20,30))         // we print return   (o/p  -10 coz return will always look at **last return )

// --------------------------------------------------------------------------------------------------

// function func(arr){
//      sum=0
//      for(let i=0;i<arr.length;i++){
//         sum=sum+a[i]
//      }
//      return sum
// }
// let a=[1,2,3,4,5]
// let x=func(a)       //array as input
// console.log(x)

//-----------------------------------------------------------------------------

// Q1. Male above 30 , women above 20 and other above 40 can Vote , 
// print eligible if person can vote or not for given input

// let fs = require("fs");
// let data = fs.readFileSync("xxx.txt", 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1].trim();
// }
// n=parseInt(readLine())                         
// function vote(){
//     let a=readLine().split(" ")         //reading 1st line of input
//     let x=a[0]
//     let y=a[1]
//     if(x > 20 && y=='F'){
//         console.log("F eligiable")
//     }
//     else if(x>30 && y=="M"){
//         console.log("M eligiable")
//     }
//     else if(x>40 && y=='B'){
//         console.log("B eligiable")
//     }else{
//         console.log('not')
//     }

// }                                                        //      3
//  //                                                          // 30  M
// for(let i=0;i<n;i++){  //run for 3 times                    // 30  F
//     vote()                                                   // 30  B
// }

//-------------------------------------------------------------------------------------------------------

// let a=900  //global variable
// function func(){
//     //a= 200;  // local variable
//     return a+100
// }
// console.log(func())          //300        900+100
//  console.log(a)
//  a+=func()
// console.log(a)  //200            //1900         1000+900
//  console.log(func())         //2000         1900+100   //so as value to "a" updated in line 90 , it takes update value of ""a"""

//-------------------------------------------------------------------------------------------------------

// let a=20
// function func(n){     //to access global a value  ,  NOT  local  a  value
//     let a=100         //coz we declare another value using LET keyword
//     console.log(n)    //so a=20 is not replace with 100
// }
// func(a)              // 20

//--------------------------------------------------------------------------------------------------

// PRIMITIVE datatype have predefine **fixed size  like int(4 byte),float(4),Char(2),boolean (1)
// NON-PRIMITIVE size are **define by user  like String,Array,object

// PRIMITIVE are store in CALL-STACK memory
// NON-PRIMITIVE are store in HEAP memory 

// PRIMITIVE are  **call-by-value         i.e  a=10       so in STACK value of a=10 will be store
// NON-PRIMITIVE are **call-by-reference  i.e  a=[10,20]  so in STACK , a=#address of heap will be store

// *CALL-BY-VALUE  means copy of actual parameter passed , so change made in function will not effect the actual parameter
// function func(x){
//     x=100
// }
// a=20; //stack , copy  not address
// func(a)
// console.log(a)   //20  coz  copy of "a" was send

// *CALL-BY-REFERENCE means address of data will be send , and change at address will change actual parameter also
//  function func(x){
//         x[0]=100
//     }
//     a=[20,10];  // stack , address of a
//     func(a)
//     console.log(a[0])  //100    --  value of a[0] updated

//-----------------------------------------------------------------------------------------------------------

//IF FUNCTION RETURN ANYTHING , THEN WE USE CONSOLE
//ELSE WE USE DIRECTLY FUNCTION NAME or OBJECT.FUNC_NAME in class