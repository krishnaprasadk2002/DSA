
//binary search

function binarySearch(nums,target){
    let start = 0
    let end = nums.length-1

    while(start<=end){
        let middle = Math.floor((start+end)/2)

        if(nums[middle]  === target){
            return middle
        }else if(nums[middle] < target){
            start = middle + 1
        }else{
            end = middle-1
        }
    }
    return -1
}

array = [3,-1,0,9,2,1,5]

let result = array.sort((a,b)=>a-b)

console.log(result);

console.log(binarySearch(result , 9));
//=====================================================================================================================================//

//Maximum Count of Positive Integer and Negative Integer

//nums = [-2,-1,-1,1,2,3]
// output = 3

function maxcount(nums) {
    return Math.max(upperBound(nums), lowerBound(nums));
}

function upperBound(nums) {
    let low = 0;
    let high = nums.length - 1;

    while (low < high) {
        let mid = Math.ceil((low + high) / 2);

        if (nums[mid] < 0) {
            low = mid;
        } else {
            high = mid - 1;
        }
    }

    return nums[0] >= 0 ? 0 : low + 1;
}

function lowerBound(nums) {
    let low = 0;
    let high = nums.length - 1;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] > 0) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return nums[nums.length - 1] <= 0 ? 0 : nums.length - low;
}

console.log(maxcount([-2, -1, -1, 1, 2, 3]));
