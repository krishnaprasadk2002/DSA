// //linear Search


function linearSearch(nums,target){
 for(let i = 0 ;i < nums.length;i++ ){
    if(target === nums[i]){
        return i
    }
 }
 return -1
}

console.log(linearSearch([4,5,6,7,0,1,2],0));


//Global linear seearch

function GlobalLinear(nums,target){
    let result = []
    for(let i = 0 ; i < nums.length ;i++){
        if(target === nums[i]){
            result.push(i)
        }
    }
    if(result.length === 0){
        return -1
    }
    return result
}

console.log(GlobalLinear([4,5,0,7,0,1,2],0));

//kthpositive

function kthpositive(arr,k){
    let count = 0

    for(let i=0;i<arr.length;i++){
        if(arr[i] <= k+count){
            count++
        }
    }
    return k+count
}

console.log(kthpositive([2,3,4,7,11], 5));