let array= [10,80,30,90,40]
console.log(DQuickSort(array))

function DQuickSort(arr){
    if(arr.length <= 1){
        return arr
    }

    let pivot = arr[0]
    let left = []
    let right = []

    for(let i=1;i<arr.length;i++){
        if(arr[i] > pivot ){
           left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...DQuickSort(left),pivot,...DQuickSort(right)]
}