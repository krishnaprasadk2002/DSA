

function QuickSort(arr){
    if(arr.length <= 1){
        return arr
    }
    let pivot = arr[0]
    let left =[]
    let right = []

    for(let i=1;i<arr.length;i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...QuickSort(left),pivot,...QuickSort(right)]
}

let myArray = [3, 7, 2, 5, 1, 4, 6, 8];
console.log(QuickSort(myArray));
