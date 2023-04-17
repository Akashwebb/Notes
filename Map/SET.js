//  Sets is a collection of unique values and of any data type.
// Each value can only occur once in a Set.

//  let letter = new Set();

// // // adding values using  --  add() method
// letter.add("a");
// letter.add("boss");
// letter.add(23);
// letter.add(23);         // not be added as SET ALWAYS HAVE UNIQUE VALUES
// letter.add('23')
// console.log(letter)     // Set(4) { 'a', 'boss', 23, '23' }

// letter.delete(23)                  // **delete()  will delete value with 23
// console.log(letter.has("boss"))   // **has()  return true or false

// // **value()  method will return OBJECT that can ITERATE over values of SET  i.e [set Iterator]
// let it= letter.values()  
// for(let x of it){
//     console.log(x)
// }

// // // **keys() method returns the same as values()  SINCE set do not have keys
// let iterate = letter.keys()
// for(let y of iterate){
//     console.log(y)
// }

// // **entries()  method will return  [value,value]  pairs  ,  since  SET do not have keys
// let iter = letter.entries()
// for(let z of iter){
//     console.log(z)
// }

// **forEach()	Invokes a callback for each element
// let ff = new Set(['a','akash',23])
// console.log(ff)
// ff.forEach (function(value){
//     console.log(value)
// })

function two(arr,target){
   let set = new Set()
   
   for(let i=0;i<arr.length;i++){
    x=target-arr[i]
    if(set.has(x)){
        console.log(x,arr[i])
        
    }else{
        set.add(arr[i])
    }
   }
}
two([1,4,5,6,9],10)
