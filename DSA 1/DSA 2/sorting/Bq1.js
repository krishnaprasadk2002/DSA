
function BubbleSort(arr){
    let swapped
    do {
        swapped = false
        for(let i=0;i<arr.length;i++){
            if(arr[i+1] < arr[i]){
                let temp =arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped =true
            }
        }
    } while (swapped);
}

arr = [ 1, 4, 2, 5, -2, 3 ]
BubbleSort(arr)
console.log(arr);