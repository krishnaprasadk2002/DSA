class maxHeap{
    constructor(){
        this.data = []
    }

    getParent(i){
        return Math.floor(i-1/2)
    }

    getLeft(i){
        return i * 2 + 1
    }

    getRight(i){
        return i * 2 + 2
    }

    swap(i1,i2){
        [this.data[i1],this.data[i2]] = [this.data[i2],this.data[i1]]
    }

    push(value){
        this.data[this.data.length] = value
        this.heapifyUp()
    }

    heapifyUp(){
        let curr = this.data.length-1
        while(this.data[curr] > this.data[this.getParent(curr)]){
            this.swap(curr,this.getParent(curr))

            curr = this.getParent(curr)
        }
    }

    poll(){
        let value = this.data[0]
        this.data[0] =  this.data[this.data.length-1]
        this.data.length--
        this.heapifyDown()
        return value
    }

    heapifyDown(){
        let curr = 0

        while(this.data[curr] < this.data[this.getLeft(curr)]){
            let biggestIndex = this.getLeft(curr)

            if(this.getRight(curr) < this.data.length && this.data[this.getLeft(curr)] < this.data[this.getRight(curr)] ){
                biggestIndex = this.getRight(curr)
            }

                if(this.data[curr] < this.data[biggestIndex]){
                    this.swap(curr,biggestIndex)
                    curr = biggestIndex
                }else{
                    return
                }
            
        }
    }
    heapSort(Array){
        let heap1 = new maxHeap()
        let sortedArray = []
    
        for(let i=0;i<Array.length;i++){
            heap1.push(Array[i])
        }
    
        for(let i=0;i<Array.length;i++){
           sortedArray.unshift(heap1.poll())
        }
        return sortedArray
    }
}

const heap = new maxHeap()

heap.push(17)
heap.push(68)
heap.push(35)
heap.push(48)
heap.push(82)
heap.push(30)
heap.push(46)
heap.push(50)

console.log(heap.data)
heap.poll()
console.log(heap.data);

heap.poll()
console.log(heap.data);

console.log(heap.heapSort([17,68,35,48,82,30,46,50]));