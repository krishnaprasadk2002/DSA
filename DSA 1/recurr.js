
//fibanocci

// recursion method

// function fibanocci(n){
//     if(n <= 1){
//         return n
//     }
//     return fibanocci(n-1) + fibanocci(n-2)
// }

// console.log(fibanocci(6)); 

// normal Method
// function fiba(n){
//     let fiba=[0,1]

//     for(let i=2;i<n;i++){
//        fiba[i] = fiba[i-1] + fiba[i-2]
//     }
//     return fiba
// }
// console.log(fiba(5));

//===================================================================================

//factorial Using recurrsion

// function factorial(n){
//     if(n<=1){
//         return n
//     }
//     return n * factorial(n-1)
// }

// console.log(factorial(5));

//Normal

// function factorial(n){
//     let result = 1
//     for(let i=2;i<=n;i++){
//         result = result * i
//     }
//     return result
// }

// console.log(factorial(5));

//======================================================

// Range of an error

// function RangeOfNumber(start,end){
//     if(start > end){
//         return []
//     }
//     const number = RangeOfNumber(start,end-1)
//     number.push(end)
//     return number
// }

// console.log(RangeOfNumber(2,9));

//string reversing

// function palidrome(n){
//     if(n.length === 1){
//         return true
//     }
//     if(n[0] === n[n.length-1]){
//         return palidrome(n.slice(1,-1))
//     }
//     return false
// }

// console.log(palidrome("kpk"))

//Number reversing

// function palidrome(n){
//     let str = n.toString()

//     if(str.length <= 1){
//    return true
//     }
//     if(str[0] === str[str.length-1]){
//         return palidrome(str.slice(1,-1))
//     }else{
//         return false
//     }
// }

// console.log(palidrome(121))

//===================================================================================

//Two sum of an integer

// function Sum(n){
//  if(n.length === 1){
//     return n[0]
//  }
//  return n.pop() + Sum(n)
// }

// console.log(Sum([1,2,3,4,5,6]));


//===================================================

// string reversing

// function Reverse(str){

//     if(str.length <= 1){
//         return str
//     }
//     return Reverse(str.slice(1))+str.charAt(0)
// }

// console.log(Reverse("krishna prasad"));

// const str = "dasarp anhsirk"
// const word = str.split(" ")
// console.log(WordReverse(word))


// function WordReverse(str){
//     if(!str.length){
//         return ""
//     }
//     return WordReverse(str.slice(1))+str[0]+ " "
// }

//===========================================================one word reversing============================

// const name = 'John Cena'
// const word = name.split(' ')
// const firstWord = wordReverse(word[0])
// const reverse = firstWord + ' ' + word.slice(1).join(' ')

// console.log(reverse)

// function wordReverse(str){
//     if(str.length <= 1){
//       return str
//     }
//     return wordReverse(str.slice(1))+str[0]
// }

//==========================================================================
// letter swapping

// const name = 'apple'
// let result = []

// result.push(name.slice(0,2))
// result.push(name.slice(2,name.length))

// console.log(letterReversing(result))
    
//     function letterReversing(str){
//         if(!str.length){
//             return ''
//         }
//         return letterReversing(str.slice(1))+str[0]
//     }





