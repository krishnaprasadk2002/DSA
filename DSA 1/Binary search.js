// const arr =[1,2,3,4,5,6,7] ,target = 3
// console.log(Binary(arr));

// function Binary(arr){

//     let start = 0
//     let end = arr[arr.length-1]

//     while(start <= end){
//         let middle = Math.floor((start+end)/2)

//         if(arr[middle] === target){
//             return middle
//         }

//         if(arr[middle] < target){
//             start = middle+1
//         }else{
//             end = middle-1
//         }
//     }
//     return -1
// }



const Word = ["A","B","C","D"] , target="C"

console.log(Binary(Word,target))

function Binary(Word,target){
    let start = 0
    let end = Word.length-1

    while(start <= end){
        let middle = Math.floor((start+end)/2)

        if(Word[middle] === target){
            return middle
        }
        
        if(Word[middle] < target){
            start = middle + 1
        }else{
            end = middle - 1
        }
    }
    return -1
}