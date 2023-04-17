let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
function quickSort(A,low,high){
      if(low<high){
        let pos=partition(A,low,high)
        quickSort(A,low,pos-1) // 0 1 2 
        quickSort(A,pos+1,high) // 4 5 6
      }
}

function partition(A,low,high){
    let pivot=A[high]
    let q=low-1  
    for(let i=low;i<high;i++){
        if(A[i]<=pivot){
            q++   
            let temp=A[i]
            A[i]=A[q]
            A[q]=temp
        }
    }
    let temp=A[q+1]
    A[q+1]=A[high];
    A[high]=temp
    return q+1
}
let n=parseInt(readLine()) //2
for(let i=0;i<n;i++){
    let len=parseInt(readLine())
    let arr=readLine().split(" ").map(Number)
    quickSort(arr,0,arr.length-1)
    console.log(...arr)
}
