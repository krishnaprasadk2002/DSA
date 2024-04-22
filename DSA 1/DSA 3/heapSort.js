//HeapSort

function createHeap(array){
    let heap = [...array]
    
    for(let i= Math.floor((heap.length)/2);i>=0;i--){
        heapify(heap,i,heap.length)
    }
    return heap
}

function heapify(heap,i,heapSize){
    let left = i * 2 + 1
    let right = i * 2 + 2
    let largest = i
    
    if(left < heapSize && heap[left] > heap[largest]){
        largest = left
    } 
    
    if(right < heapSize && heap[right] > heap[largest] ){
        largest = right
    }
    
    if(largest != i){
        [heap[largest],heap[i]] = [heap[i],heap[largest]]
        heapify(heap,largest,heapSize)
    }
}

function heapSort(array){
    let heap = createHeap(array)
    let sort = []
    
    while(heap.length > 0){
        sort.unshift(heap.shift())
        heap = createHeap(heap)
    }
    return sort
}

let array = [3, 5, 1, 4,23,44,12,5, 2];
  let sortedArray = heapSort(array);
  console.log(sortedArray)