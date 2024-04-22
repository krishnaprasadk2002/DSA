let arr = [6,1,6,8,10,4,15,6,3,9,6]
let target = 6

function exchange(arr, target) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[i] == target) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

exchange(arr, target);
console.log(arr);
