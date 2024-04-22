arr = [9, 3, 6, 2, 1, 11]
console.log(SelectionSort(arr))

function SelectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let max = i
        for(let j = i+1;j<arr.length;j++){
            if(arr[j] < arr[max]){
                max = j
            }
        }
        if(max != i){
            let temp = arr[i]
            arr[i] = arr[max]
            arr[max] = temp
        }
    }
    return arr
}