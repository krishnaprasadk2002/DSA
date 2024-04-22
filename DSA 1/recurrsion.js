// Fibannoci series

// function fiba(n) {
//     if (n < 2) {
//         return n
//     }
//         return fiba(n - 1) + fiba(n - 2);
// }


// console.log(fiba(10));
//===========================================================
//factorial

// function factorial(n){
//     if(n<=1){
//         return n
//     }
//     return n*factorial(n-1)
// }

// console.log(factorial(5))

//====================================================
// String palidrome

// function palidrome(n){
//     if(n.length <=1){
//         return true
//     }
//     if(n[0] === n[n.length-1]){
//      return palidrome(n.slice(1,-1))   
//     }else{
//         return false
//     }
// }

// console.log(palidrome("kasmir"));


//numbers palidrome

// console.log(palidrome(11646));

// function palidrome(n){
//     let arr = n.toString()
//     if(arr.length <= 1){
//         return true
//     }
//     if(arr[0] === arr[arr.length-1]){
//         return palidrome(arr.slice(1,-1))
//     }else{
//         return false
//     }
// }


// sum of integer array

// function sum(arr){
//     if(arr.length === 1){
//         return arr[0]
//     }
//     return arr.pop()+sum(arr)
// }

// const arr = [1,2,3,4,5]
// console.log(sum(arr))

//Range of 2,9

// function RangeOfNumbers(start,end){
//     if(start > end){
//         return []
//     }else{
//         const numsbers = RangeOfNumbers(start,end-1)
//         numsbers.push(end)
//         return numsbers
//     }
// }

// console.log(RangeOfNumbers(0,5));

// String reversing

// function reverse(str){
//     if(str.length <= 1){
//       return str
//     }
//     return reverse(str.slice(1))+str[0]
// }

// const str = "krishna prasad"
// console.log(reverse(str));

//word swapping

// const str = "dasarp anhsirk"
// const word = str.split(' ')
// console.log(swapping(word))

// function swapping(n){
//     if(!n.length){
//         return ""
//     }
//     return swapping(n.slice(1))+n[0]+" "
// }

// letter swapping

// const a = "apple"
// const letter = []
// letter.push(a.slice(0,2)) 
// letter.push(a.slice(2,a.length)) 
// console.log(letterswapping(letter))

// function letterswapping(n){
//     if(!n.length){
//         return ""
//     }
//     return letterswapping(n.slice(1)) + n[0]
// }

// Array reversing

function ArrayReversing(num){
    if(!num.length){
        return []
    }
    return ArrayReversing(num.slice(1)).concat(num[0])
}
console.log(ArrayReversing([1,2,3,4,5,6]));