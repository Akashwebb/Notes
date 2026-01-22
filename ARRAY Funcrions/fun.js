Object.values(user) ::  returns an array of the object’s values (not keys).
  
  const user = {
  name: "Akash",
  age: 26,
  role: "Developer"
};
console.log(Object.values(user));

✅ Output
["Akash", 26, "Developer"]

------------------------------------------------------------------------------------------------
  
Reduce() — Transform Everything Into One
👉 Sum
👉 Object
👉 Count
👉 Group
👉 Max
👉 Map

const nums = [5, 1, 3, 2];

const sum = nums.reduce((acc, curr) => {
    console.log(acc,curr)    
  return acc + curr;
}, 0);
console.log(sum);

✅ Output
0 5
5 1
6 3
9 2
11

---------------------------------------------------------------
const people = [
  { city: "Delhi", name: "A" },
  { city: "Mumbai", name: "B" },
  { city: "Delhi", name: "C" }
];

const grouped = people.reduce((acc, p) => {
  console.log("aaaaaa" ,acc , p)
  if (!acc[p.city]) acc[p.city] = [];
  acc[p.city].push(p);
  return acc;
}, {});

console.log(grouped);

✅ Output
aaaaaa {} { city: 'Delhi', name: 'A' }
aaaaaa { Delhi: [ { city: 'Delhi', name: 'A' } ] } { city: 'Mumbai', name: 'B' }
aaaaaa {
  Delhi: [ { city: 'Delhi', name: 'A' } ],
  Mumbai: [ { city: 'Mumbai', name: 'B' } ]
} { city: 'Delhi', name: 'C' }
{
  Delhi: [ { city: 'Delhi', name: 'A' }, { city: 'Delhi', name: 'C' } ],
  Mumbai: [ { city: 'Mumbai', name: 'B' } ]
}
-------------------------------------------------------------------------------------------------
  
//1.  *at()
// let arr=[1,2,3,4,5]
// let x= arr.at(2)
// console.log(x)        // 3


//2.  *entries()
// let arr= [9,8,7,6]
// let f= arr.entries()
// for(x of f){
//     console.log(x)         // [ 0, 9 ] [ 1, 8 ] [2,7]
// }


// 3. *every()   --- give true or false
// const ages = [32, 33, 15, 40];
// let x=ages.every(checkAge)
// //console.log(x)
// function checkAge(age) {
//   z= age < 18;
//   console.log(z)        // false
// }


// 4. The *fill()   method overwrites the original array.
//    Start and end position can be specified. If not, all elements will be filled.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.fill("Kiwi",2,4);
// console.log(fruits)            // [ 'Banana', 'Orange', 'Kiwi', 'Kiwi' ]


// 5.  *filter()
// let arr=[1,2,3,4,5,6,7]
// let x= arr.filter(fil)
// console.log(x)               //  [ 1, 2, 3, 4, 6 ]
// function fil(x){
//    return x!==5 && x!==7  
// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]


// let arr=[1,2,3,4]
// let x= arr.filter((val)=>{
//     return val!==3
// })
// console.log(x)

// 6.  *find()   and  *findIndex
// let arr=[11,12,13,14,15]
// let x= arr.find(fin)
// let y= arr.findIndex(fin)
// console.log(x,y)
// function fin(x,y){
//    if(x==14){
//      return x
//    }
// }


// 7. *flat()  :: join subarray
// const myArr = [1, 2, [3, [4, 5, 6], 7], 8];
// const a = myArr.flat(2);
// console.log(a)         // [1,2,3,4,5,6,7,8,9]


// The forEach() method calls a function for each element in an array.
// let students = ['John', 'Sara', 'Jack'];
// students.forEach(myFunction);
// function myFunction(item) {
//     console.log(item);
// }

//  *join(" anything ")     
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join("and");
// console.log(text)                     //  Banana and Orange and Apple and Mango


//  *reduce()  
// let arr=[2,3,4,5,1]
// let x= arr.reduce((leftmost,val)=>{
//     return leftmost + val
// })
// console.log(x)


//  *reduceRight()
// let arr=[1,2,5]
// let x= arr.reduceRight((rightmost,val)=>{
//     return rightmost-val
// })
// console.log(x)          // 2     --   5-2-1 = 2

