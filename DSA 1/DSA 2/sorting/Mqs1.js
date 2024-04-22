
function mergeSort(arr){
    if(arr.length <= 1){
        return arr
    }

    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)

    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let sortedArr =[]

    while(left.length && right.length){
        if(left[0] <= right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...left,...right]
}

let arr = [ 38, 27, 43, 10]
console.log(mergeSort(arr));