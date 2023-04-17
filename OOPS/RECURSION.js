// we use recursion when  1.Problem have tree like structure
//                        2.Problem required back-tracking
// type: direct recursion -  tail recursion
//                           head recursion
//                           tree recurion
//                           nested recursion

// PRINTING FROM  1 to 5

// function print(n){
//     if(n==6){                  // Base case
//         return
//     }
//     console.log(n)
//     print(n+1)                 // Recursive case
// }
// print(1)

// **if we have something that changes with each recursive call , then take that as parameter**
// SUM OF n natural NUMBERS

// function sum(n,total=0){
//     if(n==5){
//         return total
//     }
//     return sum(n+1,total+=n)
// }
// console.log(sum(1))


// FACTORIAL OF A NUMBER 

// function fact(n,fac){
//     if(n==0){
//         return fac
//     }
//     return fact(n-1,fac*=n)
// }
// console.log(fact(4,1))


let arr=[1,2,[3,5],6,[26,7,[8,3],],16]
let final=[]
unc