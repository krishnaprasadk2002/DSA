function DselctionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let min = i

        for(let j=i+1;j<arr.length;j++){
            if(arr[j] > arr[min]){
                min = j
            }
        }
        if(min != i){
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}

arr = [ 64, 25, 12, 22, 11]
console.log(DselctionSort(arr));