let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. 
// The array is virtually split into a sorted and an unsorted part. 
// Values from the unsorted part are picked and placed at the correct position in the sorted part.

// To sort an array of size n in ascending order:
// Iterate from arr[1] to arr[n] over the array.
// Compare the current element (key) to its predecessor.
// If the key element is smaller than its predecessor, compare it to the elements before. 
// Move the greater elements one position up to make space for the swapped element.


// 2
// 5
// 5 10 2 4 -12
// 4
// 12 89 90 7


function insertionSort(arr){
    count=0
        for(let i = 1 ; i < arr.length ; i++){
            for (let j = 0 ; j < i ; j++){ 
                if (arr[i] < arr[j]){ 
                    count++                                                      // 
                    temp = arr[j]
                    arr[j] = arr[i]
                    arr[i] = temp
                    
                }
            }
        }
       
        console.log(...arr)
    }
let n = parseInt(readLine())
    for(let i = 0 ; i < n ; i++){
        let num = parseInt(readLine())
        let arr = readLine().split(" ").map(Number)
        insertionSort(arr)
    }