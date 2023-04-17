//LCM -  number that can be divided by all number in array
//HCF - number that can divide all array element

// let a = [4, 16, 8, 12, 20]
// max = 0
// for (let i = 1; i < Number.POSITIVE_INFINITY; i++) {
//     lcm = 0
//     hcf = 0
//     for (let j = 0; j < a.length; j++) {    
//         if (i % a[j] == 0) {               //  LCM count
//             lcm++
//         }
//         if (a[j] % i == 0) {             // HCF count
//             hcf++
//         }
//     }
//     if (lcm == a.length) {     // lcm count = array_length  coz all number must divide that one number
//         console.log(i)
//         break
//     }
//     if (hcf == a.length) {      // max number that divide all array element
//         xxx = i
//          if (max < xxx) {
//             max = xxx
//         }
//     }
// }
// console.log(max)

//-------------------------------------------------------------------------------------------------------

// For N = 3 the pattern will be 
// 3 3 3 2 2 2 1 1 1
// 3 3 2 2 1 1
// 3 2 1
// let n=3

// for(let i = n; i >0 ; i--){
//    let arr=[]
//      for(let j = n ; j>0 ; j--){
//       var array1 = new Array(i);
      
//       array1.fill(j)
//       arr.push(array1)
//       //process.stdout.write( j +" ")
//        }
//        for(let i=0;i<arr.length;i++){
//          process.stdout.write(arr[i] +" ")
//        }
//      console.log()
//      arr=[]
    
// }


let a=[1,2,3,4,5,5,5,2]
x=a.filter(item => item==item)
console.log(x)