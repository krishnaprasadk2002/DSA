// function BubbleSort(nums){
//     let swapped
//     do{
//         swapped =false
//         for(let i=0;i<nums.length;i++){
//             if(nums[i+1] < nums[i]){
//                 let temp = nums[i]
//                 nums[i] = nums[i+1]
//                 nums[i+1] = temp
//                 swapped = true
//             }
//         }
//     }while(swapped)
    
// }

const nums = [10,6,3,8,7,9]
BubbleSort(nums)
console.log(nums);

function BubbleSort(nums){
    let swapped
    do {
        swapped = false
        for(let i=0;i<nums.length;i++){
           if(nums[i] > nums[i+1]){
            let temp = nums[i]
            nums[i] = nums[i+1]
            nums[i+1] = temp
            swapped = true
           }
        }
    } while (swapped);
}