let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// ###
// select a SMALLEST ELEMENT from unsorted array and  place it at the beginning of unsorted array
// select a LARGEST ELEMENT from unsorted array and place it at end of an unsorted array


// let m=parseInt(readLine())
// for(let i=0;i<m;i++){
//     selectionSort()
// }
// function selectionSort(){
//     let n=parseInt(readLine())
//     let arr=readLine().split(" ").map(Number)

let arr=[4,5,4,3,9,1]    
for(let i=0;i<arr.length-1;i++){
        min=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[min]>arr[j]){
                min=j             // MIN is 4  and if any number smaller then 4 ,  the we get NEW MIN i.e min=j
            }                     // 3 less then 4 , so MIN is 3  .. and now process goes on and lastly get 1 as Min
        }
        temp=arr[i]
        arr[i]=arr[min]
        arr[min]=temp
        console.log(arr)
        }
    
console.log(...arr)

// }

