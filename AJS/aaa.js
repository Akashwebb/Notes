// //Asynchronous example
// // 3  do not wait for 2 to get execute first , so 1,3 executed asynchronously , and the 2 after 3sec
// // console.log(1)
// // setTimeout ( ()=>{   //  2 will be printed after 3 sec
// //    console.log(2)
// // },3000)
// // console.log(3)       // order of o/p will be    1  3  2

//----------------------------------------------------------------------------------------------------------

// let data=new Promise((resolve,reject)=>{
//    resolve(1)
//    reject("error")
// })
// data.then(function(res){
//   console.log(res)
// }, function(err){
//   console.log(err)
// })

// // ).catch(function(err){
// //   console.log(err)
// // }).finally(function(){         // it will execute no matter resolve or reject
// //   console.log("i am finally")
// // })

//----------------------------------------------------------------------------------------------------------

// let screen=document.getElementById("in")
//     console.log(screen)
//     let screenvalue=''
//     let buttons = document.getElementsByClassName("butt")
//     console.log(buttons)
//     for(x of buttons){
//         x.addEventListener("click",function(event){
//             buttontext=event.target.innerHTML;
           
//             if(buttontext=="clear"){
//                 screenvalue=""
//                 screen.value=screenvalue;
//             }
//             else if(buttontext=="="){
//                 screen.value=eval(screenvalue)
//             }
//             else{
//                 screenvalue+=buttontext
//                 console.log(screenvalue)
//                 screen.value=screenvalue
//                 console.log(screen.value)
//             }
//         })
//     }

//---------------------------------------------------------------------------------------------------

// let newarr=[]
// let a=[{name:"aa",age:22},{name:"bb",age:23},{name:"cc",age:27}]
// for(let i=0;i<a.length;i++){
//     if(a[i].age!=23){
//         newarr.push(a[i])
//     }
// }
// console.log(newarr)

// --------------------------------------------------------------------------------------------------------------

// clouser property ::  You have a closure when a function reads or modifies the value of a variable defined outside its context
// function outer(){
//     count=0
//     function inner(){
//         count++
//         console.log(count);
//     }
//     inner()       // invoking inner
// }
// outer()    //1
// outer()    //1    


// function outer(){
//     count=0
//     function inner(){
//         count++
//         console.log(count);
//     }
//     return inner      //   instead of invoking inner ,    we are returning inner
// }
// let fn =outer()    //      return is present in fn
// fn()
// fn()   

let x=[1,2,3,4,5,6,7]
let z=x.map((val)=>{
    return val>5
})
console.log(z)