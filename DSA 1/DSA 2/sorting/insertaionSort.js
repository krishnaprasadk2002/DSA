// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let NumberToInsert = arr[i]
//         let j=i-1

//         while(j >=0 && arr[j] > NumberToInsert){
//             arr[j+1] = arr[j]
//             j=j-1
//         }
//         arr[j+1] = NumberToInsert
//     }
// }


const arr = [8,-2,20,4,-6]
insertionSort(arr)
console.log(arr);

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let NumberToInsert = arr[i]
        let j = i-1

        while( j >= 0 && arr[j] > NumberToInsert){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = NumberToInsert
    }
}