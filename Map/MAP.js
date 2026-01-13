// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

let ex = new Map() //create map
ex.set("apple",20)
ex.set(20,40)
ex.set('aa','bb')

// ex.set("a", "bb")
// console.log(ex)
// console.log(ex.get(20))  // o/p 40
// console.log(ex.get(40))  // o/p undefine   coz  40 is value  / not key

// ex.set(20,100)
// console.log(ex.get(20))  // o/p 100  coz now 40 value is UPDATED to 100  AND KEY WILL ALWAYS BE UNIQUE

// ex.delete('aa')            // delete 'aa' key and 'bb' value
// console.log(ex)            // Map(2) { 'apple' => 20, 20 => 40 }


let iterator = ex.keys()    // gives object that can iterate on values
for(let x of iterator){
    console.log(x);
}

let iterate =ex.entries()       // gives object that gives [key,value]  pairs
for(let y of iterate){
    console.log(y[0])
}


// function countthree(arr){
//     let map =new Map()
//     sum=0
//     for(let i=0;i<arr.length;i++){

//         if(map.has(arr[i])){
           
//             map.set(arr[i],map.get(arr[i])+1)
//               sum=sum+ map.get(arr[i])
//     }else{
//               map.set(arr[i],0)
//         }
//     }return sum
// }
// console.log(countthree("abaab"))

-----------------------------------------------------------------------------------------------------------------
   
let arr=[11,22,33,44,11,33]
let map=new Map()
for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
        map.set(arr[i],map.get(arr[i])+1)
    }else{
        map.set(arr[i],1)
    }
}
console.log(map)                             //  Map(4) { 11 => 2, 22 => 1, 33 => 2, 44 => 1 }
console.log(map.size)                        //  4

for(const [key,value] of map.entries()){       // way to iterate over map 
    console.log(key,value)
    if(value==2){
        console.log("hello")
    }
}

for (const key of map.keys()) {
  console.log(key);
}

for (const value of map.values()) {
  console.log(value);
}



// Object	                                               Map
// Not directly iterable	                            Directly iterable
// Do not have a size property                      	Have a size property
// Keys must be Strings (or Symbols)	                Keys can be any datatype
// Keys are not well ordered	                        Keys are ordered by insertion
// Have default keys	                                Do not have default keys

