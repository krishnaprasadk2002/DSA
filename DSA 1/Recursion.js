//Factorial series

// function factorial(n){
//     if(n == 0){
//         return 1
//     }
//     return n * factorial(n-1)
// }

// console.log(factorial(5));

//Range of numbers

// function Rangeofnumbers(start,end){
//     if(end < start){
//         return []
//     }
//     const numbers = Rangeofnumbers(start,end-1)
//     numbers.push(end)
//     return numbers
// }

// console.log(Rangeofnumbers(0,5));


// palidrome in mumber

// function isPalidrome(arr){

//     let nums = arr.toString()

//     if(nums.length <= 1){
//       return true
//     }

//     if(nums[0] === nums[nums.length-1]){
//         return isPalidrome(nums.slice(1,-1))
//     }else{
//         return false
//     }
// }

// console.log(isPalidrome(12121))
// console.log(isPalidrome(10))


// Alphabats


// function isPalindrome(str) {
//     if (str.length <= 1) {
//         return true;
//     }

//     if (str[0] !== str[str.length - 1]) {
//         return false;
//     }

//     return isPalindrome(str.slice(1, -1));
// }

// console.log(isPalindrome('india'));
// console.log(isPalindrome('malayalam'));


//Reversing string

// function reverseString(str){

//     if(str === ''){
//         return ''
//     }else{
//         return reverseString(str.substr(1)) + str[0]
//     }
// }

// console.log(reverseString('shafeeq'));


//array reversing

// function reversearray(arr){
//     if(arr.length === 0){
//         return []
//     }else{
//         return [arr[arr.length-1]].concat(reversearray(arr.slice(0,-1)))
//     }
// }

// console.log(reversearray([1,2,3,4,5]));

// palindrome

// function palindrome(n){
//     const strnum = n.toString()

//     if(strnum <=1){
//         return true
//     }

//     if(strnum[0]==strnum[strnum.length-1]){
//         return palindrome(strnum.slice(1,-1))
//     }else{
//         return false
//     }

//     }
// console.log(palindrome(121));

//fibanocci

// function fiba(n){
// if(n<=1){
//     return n
// }
// return fiba(n-1) + fiba(n-2)
// }

// console.log(fiba(6))

// factorial

// function fact(n){
//     if(n<=1){
//         return n
//     }
//     return n * fact(n-1)
// }
// console.log(fact(5));

//range of an number

// function Rangeofnumbers(start,end){
//     if(end < start){
//                 return []
//              }
//     const number = Rangeofnumbers(start,end-1)
//     number.push(end)
//     return number
// }

// console.log(Rangeofnumbers(0,9));

// function palidrome(str){
//     if(str.length === 1){
//         return true
//     }
//     if(str[0] === str[str.length-1]){
//         return palidrome(str.slice(1,-1))
//     }
//     return false
// }

// console.log(palidrome("121"))

// Array

// function arrayReverse(arr){
//     if(!arr.length){
//         return []
//     }
//     return arrayReverse(arr.slice(1)).concat(arr[0])
// }

// const arr = [1,2,3,4,5,6,7]
// console.log(arrayReverse(arr));

//sum

// function sum(n){
//     if(n.length === 1){
//         return n[0]
//     }
//     return n.pop() + sum(n)
// }

// const arr = [1,2,3,4,5]
// console.log(sum(arr));


// letter Swapping

// const str = "apple"
// let result = []
// result.push(str.slice(0,2))
// result.push(str.slice(2,str.length))
// console.log(letterSwapping(result))

// function letterSwapping(str){
//     if(!str.length){
//         return ''
//     }
//     return letterSwapping(str.slice(1))+str[0]
// }


