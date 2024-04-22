

let myArray = [3, 7, 4, 10, 12];
console.log(insertionSort(myArray));

function insertionSort(myArray){
    for(let i=1;i<myArray.length;i++){
        let NumberToInsert = myArray[i]
        let j = i - 1

        while(j >=0 && myArray[j] > NumberToInsert){
            myArray[j+1] = myArray[j]
            j--
        }
        myArray[j+1] = NumberToInsert
    }
    return myArray
}