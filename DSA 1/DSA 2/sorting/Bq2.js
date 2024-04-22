let myArray = [3, 4, 7, 10, 12];
console.log(bubbleSort(myArray));

function bubbleSort(myArray){
    let swap 
    do{
       swap = false
       for(let i=0;i<myArray.length-1;i++){
        if(myArray[i] < myArray[i+1]){
            let temp = myArray[i]
            myArray[i] = myArray[i+1]
            myArray[i+1] = temp
            swap = true
        }
       }
    }while(swap)
    return myArray
}